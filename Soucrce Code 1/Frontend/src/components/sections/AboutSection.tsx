import aboutBg from "@/assets/about-bg.jpg";

export const AboutSection = () => {
  return (
    <section
      className="relative h-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-h-full overflow-y-auto py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center animate-fade-in">
            About the Research
          </h2>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-border animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6 text-justify">
                Educational reform in the digital learning age increasingly calls for systems not only to track but also to amplify student participation in blended-classroom settings. Toward United Nations Sustainable Development Goal (SDG) 4: Quality Education, this work presents <strong className="text-primary">PrivLogEdu</strong>, a novel method for real-time engagement detection from non-visual log data with high prediction accuracy and strong privacy protection.
              </p>
              
              <p className="text-foreground leading-relaxed mb-6 text-justify">
                Differing from vision-based emotion detection methods that pose privacy and deployment issues, PrivLogEdu leverages behavioral and temporal learning logs—problem-solving sequences, time-on-task, and skill-switching patterns—to infer levels of engagement without recording personally identifiable visual information.
              </p>
              
              <p className="text-foreground leading-relaxed mb-6 text-justify">
                The suggested approach makes use of a multi-stage pipeline: data preprocessing, sophisticated feature engineering, Skill2Vec-based embedding extraction, and a GRU-attention deep neural architecture tailored for sequence modeling. This architecture allows the system to learn temporal dependencies, pay attention to important behavioral features, and provide engagement classification at three levels (low, moderate, high) with an accuracy of <strong className="text-primary">99.91%</strong> on the EdNet-KT1 dataset.
              </p>
              
              <p className="text-foreground leading-relaxed text-justify">
                This research not only helps advance AI-based adaptive learning systems but also provides a scalable solution for learning platforms looking to enhance learning outcomes in hybrid and remote environments while maintaining privacy standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};