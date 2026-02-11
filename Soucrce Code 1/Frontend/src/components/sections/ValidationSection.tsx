import { useState } from "react";
import validationBg from "@/assets/validation-bg.jpg";
import { Upload, PlayCircle, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const ValidationSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
      setResult(null);
    }
  };

  const handleValidation = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a log data file first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const { data, error } = await supabase.functions.invoke("validate-engagement", {
        body: formData,
      });

      if (error) throw error;

      setResult(data);
      toast({
        title: "Validation Complete",
        description: "Student engagement has been predicted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Validation Failed",
        description: error.message || "An error occurred during validation",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getEngagementLabel = (level: number) => {
    switch (level) {
      case 0:
        return { label: "Disengaged", color: "text-destructive" };
      case 1:
        return { label: "Moderate", color: "text-yellow-500" };
      case 2:
        return { label: "Highly Engaged", color: "text-green-500" };
      default:
        return { label: "Unknown", color: "text-muted-foreground" };
    }
  };

  return (
    <section
      className="relative h-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${validationBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-h-full overflow-y-auto py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center animate-fade-in">
          Model Validation
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Validation Tool */}
          <div className="bg-card/90 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg border border-border animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlayCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Test the PrivLogEdu Model
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Upload student behavioral log data to validate the model's engagement prediction capabilities in real-time.
              </p>
            </div>
            
            {/* Upload Area */}
            <label className="border-2 border-dashed border-border rounded-xl p-12 mb-6 text-center hover:border-primary transition-colors cursor-pointer group block">
              <input
                type="file"
                accept=".csv,.json"
                onChange={handleFileChange}
                className="hidden"
              />
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4 group-hover:text-primary transition-colors" />
              <p className="text-foreground font-semibold mb-2">
                {file ? file.name : "Upload Log Data File"}
              </p>
              <p className="text-sm text-muted-foreground">
                Supported formats: CSV, JSON (Max 10MB)
              </p>
            </label>
            
            {/* Requirements */}
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <div className="flex gap-3 mb-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Required Data Fields:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Student ID (student_id)</li>
                    <li>• Problem ID (problem_id)</li>
                    <li>• Time taken (time_taken)</li>
                    <li>• Skill ID (skill_id)</li>
                    <li>• Correctness (correct)</li>
                    <li>• Timestamp (timestamp)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Action Button */}
            <button
              onClick={handleValidation}
              disabled={!file || isLoading}
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Validate Engagement"}
            </button>

            {/* Results Display */}
            {result && (
              <div className="mt-6 bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Validation Results
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Students:</span>
                    <span className="font-semibold text-foreground">{result.total_students}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Average Engagement:</span>
                    <span className={`font-semibold ${getEngagementLabel(result.average_engagement).color}`}>
                      {getEngagementLabel(result.average_engagement).label}
                    </span>
                  </div>
                  {result.predictions && (
                    <div className="mt-4 max-h-40 overflow-y-auto">
                      <p className="text-sm text-muted-foreground mb-2">Individual Predictions:</p>
                      <div className="space-y-2">
                        {result.predictions.slice(0, 5).map((pred: any, idx: number) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span>Student {pred.student_id}:</span>
                            <span className={getEngagementLabel(pred.engagement_level).color}>
                              {getEngagementLabel(pred.engagement_level).label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Validation Metrics Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border text-center">
              <h4 className="text-3xl font-bold text-primary mb-2">99.91%</h4>
              <p className="text-sm text-muted-foreground font-medium">Model Accuracy</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border text-center">
              <h4 className="text-3xl font-bold text-primary mb-2">&lt;100ms</h4>
              <p className="text-sm text-muted-foreground font-medium">Inference Time</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border text-center">
              <h4 className="text-3xl font-bold text-primary mb-2">3 Levels</h4>
              <p className="text-sm text-muted-foreground font-medium">Engagement Classes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
