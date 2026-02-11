import objectivesBg from "@/assets/objectives-bg.jpg";
import { Target, Shield, Brain, Zap, CheckCircle } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Real-Time Engagement Detection",
    description: "Develop a system capable of detecting student engagement in real-time using non-visual behavioral data."
  },
  {
    icon: Shield,
    title: "Privacy-First Approach",
    description: "Ensure complete privacy protection by avoiding any visual data collection or personally identifiable information."
  },
  {
    icon: Brain,
    title: "Advanced AI Architecture",
    description: "Implement GRU-attention deep neural networks for sophisticated sequence modeling and temporal dependency learning."
  },
  {
    icon: Zap,
    title: "High Accuracy Performance",
    description: "Achieve near-perfect classification accuracy (99.91%) for engagement levels across diverse learning scenarios."
  },
  {
    icon: CheckCircle,
    title: "Scalable Solution",
    description: "Create a framework that can be deployed across various educational platforms and hybrid learning environments."
  }
];

export const ObjectivesSection = () => {
  return (
    <section
      className="relative h-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${objectivesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-h-full overflow-y-auto py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center animate-fade-in">
          Research Objectives
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <objective.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Key Features Table */}
        <div className="max-w-5xl mx-auto bg-card/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Key Technical Features
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-foreground font-semibold">Feature</th>
                  <th className="text-left py-3 px-4 text-foreground font-semibold">Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">Model Architecture</td>
                  <td className="py-3 px-4 text-muted-foreground">GRU with Attention Mechanism</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">Feature Engineering</td>
                  <td className="py-3 px-4 text-muted-foreground">Skill2Vec Embeddings</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">Classification Levels</td>
                  <td className="py-3 px-4 text-muted-foreground">Low, Moderate, High</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">Dataset</td>
                  <td className="py-3 px-4 text-muted-foreground">EdNet-KT1</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground font-semibold">Accuracy</td>
                  <td className="py-3 px-4 text-primary font-bold">99.91%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};