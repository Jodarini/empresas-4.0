import { Button } from "@/components/ui/button";
import heroTech from "@/assets/hero-tech.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Pattern/Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-accent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-neon-green rounded-lg rotate-12 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Empresas 4.0 es la oportunidad para que tu empresa avance
            </h1>
            
            <p className="text-xl lg:text-2xl text-accent leading-relaxed">
              Con este programa recibirás acompañamiento, formación y herramientas 
              prácticas para impulsar la transformación digital de los negocios caleños.
            </p>

            <div className="pt-4">
              <Button 
                size="lg"
                onClick={() => window.open('https://empresas40.transformaciondigital.com.co/', '_blank')}
                className="bg-secondary hover:bg-neon-green hover:text-neon-green-foreground font-semibold uppercase px-8 py-4 text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              >
                Inscríbete aquí y recibe tu diagnóstico gratuito
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroTech}
                alt="Transformación Digital" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-accent rounded-2xl opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-soft-yellow rounded-2xl opacity-20 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;