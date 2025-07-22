import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";

const Terms = () => {
  const terms = [
    "El programa está dirigido a empresas ubicadas en Santiago de Cali",
    "Participación gratuita en todas las fases del programa",
    "Compromiso de asistencia a las sesiones programadas", 
    "Disponibilidad para implementar las recomendaciones del diagnóstico",
    "Autorización para el uso de datos con fines estadísticos del programa"
  ];

  return (
    <section id="terminos" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Términos y Condiciones
            </h2>
            <p className="text-xl text-muted-foreground">
              Conoce los requisitos para participar en Empresas 4.0
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Terms List */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Requisitos de Participación
                </h3>
                {terms.map((term, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">
                      {term}
                    </p>
                  </div>
                ))}
              </div>

              {/* Download Section */}
              <div className="flex flex-col items-center justify-center text-center space-y-6 bg-muted/50 rounded-xl p-8">
                <div className="w-20 h-20 bg-vibrant-purple rounded-full flex items-center justify-center">
                  <Download className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Documento Completo
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Descarga el documento completo con todos los términos y condiciones del programa
                  </p>
                </div>

                <Button 
                  size="lg"
                  className="bg-vibrant-purple hover:bg-soft-yellow hover:text-soft-yellow-foreground font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    // Placeholder for download functionality
                    console.log('Download terms and conditions');
                  }}
                >
                  Descargar Términos y Condiciones
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;