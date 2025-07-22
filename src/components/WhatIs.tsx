import { Building2, Users, Zap, Target } from "lucide-react";

const WhatIs = () => {
  const features = [
    {
      icon: Building2,
      title: "Programa Municipal",
      description: "Iniciativa de la Alcaldía de Cali"
    },
    {
      icon: Users,
      title: "Alianza Estratégica", 
      description: "En conjunto con la Cámara de Comercio"
    },
    {
      icon: Zap,
      title: "Cierre de Brechas",
      description: "Tecnológicas empresariales"
    },
    {
      icon: Target,
      title: "Enfoque Integral",
      description: "Formación, asesoría y herramientas"
    }
  ];

  return (
    <section id="que-es" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            ¿Qué es Empresas 4.0?
          </h2>
          
          <div className="bg-background rounded-2xl p-8 shadow-lg mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Es un programa liderado por la <strong>Alcaldía de Cali</strong> en alianza con la 
              <strong> Cámara de Comercio de Cali</strong>, que busca cerrar brechas tecnológicas 
              en empresas de los caleños, a través de la formación, la asesoría y el uso de 
              herramientas digitales.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;