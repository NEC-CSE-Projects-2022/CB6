import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", section: "home" },
  { name: "ABOUT", section: "about" },
  { name: "OBJECTIVES", section: "objectives" },
  { name: "PROCEDURE", section: "procedure" },
  { name: "RESULT", section: "result" },
  { name: "VALIDATION", section: "validation" },
];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary/95 backdrop-blur-sm shadow-lg z-50 flex-shrink-0">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 w-full justify-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className={`text-white font-semibold hover:text-accent transition-colors ${
                  activeSection === item.section ? "text-accent" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className={`block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors ${
                  activeSection === item.section ? "bg-white/10" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
