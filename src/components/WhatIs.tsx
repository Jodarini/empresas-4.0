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
          
          <div className="bg-background rounded-2xl p-8 shadow-lg">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Es un programa liderado por la <strong>Alcaldía de Santiago de Cali</strong> a través de la 
              <strong> Secretaria de Desarrollo Económico</strong> en alianza con la 
              <strong> Cámara de Comercio de Cali</strong>, que busca cerrar brechas tecnológicas 
              a los empresarios caleños con formación grupal, asesoría especializada y el uso de 
              herramientas digitales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;