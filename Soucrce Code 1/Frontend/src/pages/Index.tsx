import { useState } from "react";
import { RotatingBanner } from "@/components/RotatingBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ObjectivesSection } from "@/components/sections/ObjectivesSection";
import { ProcedureSection } from "@/components/sections/ProcedureSection";
import { ResultSection } from "@/components/sections/ResultSection";
import { ValidationSection } from "@/components/sections/ValidationSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "objectives":
        return <ObjectivesSection />;
      case "procedure":
        return <ProcedureSection />;
      case "result":
        return <ResultSection />;
      case "validation":
        return <ValidationSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 overflow-hidden relative">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;