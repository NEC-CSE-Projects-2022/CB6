import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received validation request");
    
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      throw new Error('No file provided');
    }

    console.log(`Processing file: ${file.name}, size: ${file.size} bytes`);

    const text = await file.text();
    let data: any[] = [];

    // Parse CSV or JSON
    if (file.name.endsWith('.json')) {
      data = JSON.parse(text);
    } else if (file.name.endsWith('.csv')) {
      // Simple CSV parsing
      const lines = text.split('\n').filter(line => line.trim());
      const headers = lines[0].split(',').map(h => h.trim());
      
      data = lines.slice(1).map(line => {
        const values = line.split(',');
        const row: any = {};
        headers.forEach((header, idx) => {
          row[header] = values[idx]?.trim();
        });
        return row;
      });
    } else {
      throw new Error('Unsupported file format. Please upload CSV or JSON.');
    }

    console.log(`Parsed ${data.length} records`);

    // Validate required fields
    const requiredFields = ['student_id', 'problem_id', 'time_taken', 'skill_id', 'correct'];
    const sampleRow = data[0];
    const missingFields = requiredFields.filter(field => !(field in sampleRow));
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Group by student_id and predict engagement
    const studentData: { [key: string]: any[] } = {};
    data.forEach(row => {
      const studentId = row.student_id;
      if (!studentData[studentId]) {
        studentData[studentId] = [];
      }
      studentData[studentId].push(row);
    });

    console.log(`Processing ${Object.keys(studentData).length} students`);

    // Simple engagement prediction based on heuristics from the paper
    const predictions = Object.entries(studentData).map(([studentId, logs]) => {
      // Calculate engagement metrics
      const avgTimeTaken = logs.reduce((sum, log) => sum + parseFloat(log.time_taken || 0), 0) / logs.length;
      const correctRate = logs.filter(log => log.correct === '1' || log.correct === 1).length / logs.length;
      const uniqueSkills = new Set(logs.map(log => log.skill_id)).size;
      const logCount = logs.length;

      // Engagement scoring (0: Disengaged, 1: Moderate, 2: Highly Engaged)
      let engagementScore = 0;
      
      // High correctness rate indicates engagement
      if (correctRate > 0.7) engagementScore += 1;
      if (correctRate > 0.85) engagementScore += 0.5;
      
      // Reasonable time on task (not too fast, not too slow)
      if (avgTimeTaken > 10 && avgTimeTaken < 120) engagementScore += 0.5;
      
      // Variety in skill practice
      if (uniqueSkills > 3) engagementScore += 0.5;
      
      // Sufficient log activity
      if (logCount > 10) engagementScore += 0.5;

      let engagementLevel = 0;
      if (engagementScore >= 2) engagementLevel = 2; // Highly Engaged
      else if (engagementScore >= 1) engagementLevel = 1; // Moderate
      else engagementLevel = 0; // Disengaged

      return {
        student_id: studentId,
        engagement_level: engagementLevel,
        correct_rate: correctRate.toFixed(2),
        avg_time: avgTimeTaken.toFixed(2),
        log_count: logCount
      };
    });

    // Calculate summary statistics
    const totalStudents = predictions.length;
    const avgEngagement = Math.round(
      predictions.reduce((sum, p) => sum + p.engagement_level, 0) / totalStudents
    );
    const engagementDistribution = {
      disengaged: predictions.filter(p => p.engagement_level === 0).length,
      moderate: predictions.filter(p => p.engagement_level === 1).length,
      highly_engaged: predictions.filter(p => p.engagement_level === 2).length,
    };

    console.log("Validation complete:", {
      total_students: totalStudents,
      avg_engagement: avgEngagement,
      distribution: engagementDistribution
    });

    return new Response(
      JSON.stringify({
        success: true,
        total_students: totalStudents,
        average_engagement: avgEngagement,
        distribution: engagementDistribution,
        predictions: predictions,
        message: `Successfully analyzed ${totalStudents} students`
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error: any) {
    console.error('Validation error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'An error occurred during validation' 
      }),
      { 
        status: 400, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
