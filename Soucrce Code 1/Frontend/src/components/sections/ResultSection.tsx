import resultsBg from "@/assets/results-bg.jpg";
import { TrendingUp, Award, BarChart3, CheckCircle2 } from "lucide-react";

const performanceMetrics = [
  { metric: "Overall Accuracy", value: "99.91%", icon: Award },
  { metric: "F1-Score", value: "Near-Optimal", icon: TrendingUp },
  { metric: "Computational Cost", value: "Low", icon: BarChart3 },
  { metric: "Real-time Performance", value: "Excellent", icon: CheckCircle2 }
];

const comparisonData = [
  { model: "PrivLogEdu (Proposed)", accuracy: "99.91%", stability: "High", privacy: "Complete" },
  { model: "Baseline LSTM", accuracy: "97.3%", stability: "Moderate", privacy: "Complete" },
  { model: "Transformer", accuracy: "98.1%", stability: "Moderate", privacy: "Complete" },
  { model: "Vision-based Methods", accuracy: "95-98%", stability: "Variable", privacy: "Limited" }
];

export const ResultSection = () => {
  return (
    <section
      className="relative h-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${resultsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-h-full overflow-y-auto py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center animate-fade-in">
          Results & Performance
        </h2>
        
        {/* Performance Metrics Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {performanceMetrics.map((item, index) => (
            <div
              key={index}
              className="bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">{item.value}</h3>
              <p className="text-sm text-muted-foreground font-medium">{item.metric}</p>
            </div>
          ))}
        </div>
        
        {/* Key Findings */}
        <div className="max-w-5xl mx-auto bg-card/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-6">Key Findings</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed text-justify">
                Achieved <strong className="text-primary">99.91% accuracy</strong> on the EdNet-KT1 dataset, demonstrating superior performance in engagement classification across low, moderate, and high engagement levels.
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed text-justify">
                Near-optimal F1-scores across all engagement categories indicate strong model generalization and minimal misclassification rates.
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed text-justify">
                Computational efficiency enables real-time deployment in production learning environments without significant infrastructure requirements.
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed text-justify">
                Complete privacy preservation through non-visual data analysis aligns with modern educational privacy standards and regulations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Comparative Analysis Table */}
        <div className="max-w-5xl mx-auto bg-card/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Comparative Analysis
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-4 px-4 text-foreground font-bold">Model</th>
                  <th className="text-left py-4 px-4 text-foreground font-bold">Accuracy</th>
                  <th className="text-left py-4 px-4 text-foreground font-bold">Stability</th>
                  <th className="text-left py-4 px-4 text-foreground font-bold">Privacy</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border/50 ${
                      index === 0 ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="py-4 px-4 text-foreground font-semibold">{row.model}</td>
                    <td className={`py-4 px-4 ${index === 0 ? "text-primary font-bold" : "text-muted-foreground"}`}>
                      {row.accuracy}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{row.stability}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.privacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic text-center">
            * PrivLogEdu demonstrates superior performance across all evaluation metrics
          </p>
        </div>
      </div>
    </section>
  );
};