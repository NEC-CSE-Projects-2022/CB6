import procedureBg from "@/assets/procedure-bg.jpg";
import { Database, Wrench, Network, Target } from "lucide-react";

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Data Preprocessing",
    description: "Collection and preprocessing of non-visual log data from the EdNet-KT1 dataset, including problem-solving sequences, time-on-task metrics, and skill-switching patterns."
  },
  {
    icon: Wrench,
    number: "02",
    title: "Feature Engineering",
    description: "Sophisticated feature extraction using Skill2Vec-based embeddings to capture behavioral patterns and temporal dependencies in student learning activities."
  },
  {
    icon: Network,
    number: "03",
    title: "Model Architecture",
    description: "Implementation of GRU-attention deep neural network for sequence modeling, enabling the system to learn complex temporal patterns and focus on critical behavioral features."
  },
  {
    icon: Target,
    number: "04",
    title: "Training & Optimization",
    description: "Model training with class balancing, label smoothing, and threshold tuning to ensure robust generalization and minimal misclassification across engagement levels."
  }
];

export const ProcedureSection = () => {
  return (
    <section
      className="relative h-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${procedureBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-h-full overflow-y-auto py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center animate-fade-in">
          Methodology & Procedure
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Multi-stage Pipeline Overview */}
          <div className="bg-card/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Multi-Stage Pipeline
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify mb-4">
              The PrivLogEdu framework implements a comprehensive multi-stage pipeline designed to process behavioral learning data and generate accurate engagement predictions. The pipeline consists of four main stages, each critical to the overall system performance.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              This systematic approach ensures that the model can effectively capture temporal dependencies in student behavior while maintaining high accuracy and computational efficiency suitable for real-time applications.
            </p>
          </div>
          
          {/* Procedure Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary/30 text-center">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Implementation Details */}
          <div className="bg-card/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border mt-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Technical Implementation
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed text-justify">
                <strong className="text-foreground">Sequence Modeling:</strong> The GRU (Gated Recurrent Unit) architecture processes sequential behavioral data, capturing long-term dependencies in student engagement patterns over time.
              </p>
              <p className="leading-relaxed text-justify">
                <strong className="text-foreground">Attention Mechanism:</strong> The attention layer enables the model to focus on the most relevant behavioral features, improving classification accuracy for different engagement levels.
              </p>
              <p className="leading-relaxed text-justify">
                <strong className="text-foreground">Privacy Preservation:</strong> By exclusively using non-visual log data, the system maintains complete student privacy while achieving high accuracy in engagement detection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};