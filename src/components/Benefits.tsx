import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Users, 
  UserCheck, 
  Settings, 
  Map 
} from "lucide-react";

const Benefits = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const benefits = [
    {
      icon: Search,
      title: "Diagnóstico de madurez digital",
      description: "Evaluación completa del estado actual de digitalización de tu empresa para identificar oportunidades de mejora."
    },
    {
      icon: Users,
      title: "Asesoría grupal especializada",
      description: "Sesiones grupales sobre temas clave como Inteligencia Artificial, Big Data y otras tecnologías emergentes."
    },
    {
      icon: UserCheck,
      title: "Asesoría técnica personalizada", 
      description: "Acompañamiento uno a uno adaptado a las necesidades específicas de tu empresa."
    },
    {
      icon: Settings,
      title: "Herramienta digital estandarizada",
      description: "Acceso a plataformas digitales con licenciamiento incluido para optimizar tus procesos."
    },
    {
      icon: Map,
      title: "Hoja de ruta personalizada",
      description: "Plan estratégico detallado para guiar la transformación digital de tu empresa paso a paso."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Beneficios del Programa
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que tu empresa necesita para su transformación digital
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-accent/20"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-vibrant-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <Card className="border-accent/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-vibrant-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const IconComponent = benefits[currentSlide].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <CardTitle className="text-xl text-foreground">
                  {benefits[currentSlide].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefits[currentSlide].description}
                </p>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? 'bg-secondary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="outline" 
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;