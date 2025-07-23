import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-accent/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={isScrolled ? "/lovable-uploads/130a9f66-62a8-4c2e-aade-dd3d5d6f173d.png" : "/lovable-uploads/fe25efac-75b7-44da-b7cf-ca5fefb52b29.png"} 
              alt="Empresas 4.0" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("que-es")}
              className={`font-medium transition-all duration-300 ${
                isScrolled 
                  ? "text-neon-green hover:text-primary hover:shadow-md" 
                  : "text-white hover:text-neon-green"
              }`}
            >
              ¿Qué es?
            </button>
            <button 
              onClick={() => scrollToSection("beneficios")}
              className={`font-medium transition-all duration-300 ${
                isScrolled 
                  ? "text-neon-green hover:text-primary hover:shadow-md" 
                  : "text-white hover:text-neon-green"
              }`}
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection("terminos")}
              className={`font-medium transition-all duration-300 ${
                isScrolled 
                  ? "text-neon-green hover:text-primary hover:shadow-md" 
                  : "text-white hover:text-neon-green"
              }`}
            >
              Términos y condiciones
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => window.open('https://empresas40.transformaciondigital.com.co/', '_blank')}
            className="bg-primary hover:bg-neon-green hover:text-neon-green-foreground font-semibold uppercase px-6 py-2 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Inscríbete aquí
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;