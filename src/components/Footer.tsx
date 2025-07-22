import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }, 
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "¿Qué es Empresas 4.0?", href: "#que-es" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Términos y Condiciones", href: "#terminos" }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Empresas 4.0</h3>
            <p className="text-accent mb-6 leading-relaxed">
              Programa de transformación digital para empresas caleñas, 
              impulsado por la Alcaldía de Cali en alianza con la Cámara de Comercio.
            </p>
            
            {/* Organization Logos */}
            <div className="flex items-center space-x-6 mb-6">
              <img 
                src="/lovable-uploads/da0cc74b-e673-4f5a-b9ef-41a01b8c631c.png" 
                alt="Alcaldía de Santiago de Cali"
                className="h-16 w-auto bg-white rounded-lg p-2"
              />
              <img 
                src="/lovable-uploads/c93a9607-038c-4a06-ba01-78e6bd3d289a.png" 
                alt="Cámara de Comercio de Cali"
                className="h-16 w-auto bg-white rounded-lg p-2"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-accent hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-accent">info@empresas40.gov.co</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-accent">+57 (2) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-accent">Santiago de Cali, Valle del Cauca</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Legal */}
        <div className="border-t border-accent/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-accent">Síguenos:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-neon-green transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <a 
                href="https://www.cali.gov.co/tic/publicaciones/171934/politica-de-tratamiento-de-datos-personales/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors duration-300"
              >
                Política de Datos - Alcaldía
              </a>
              <a 
                href="https://www.ccc.org.co/politicas/politica-datos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors duration-300"
              >
                Política de Datos - CCC
              </a>
              <span className="text-accent">
                © 2024 Empresas 4.0 - Todos los derechos reservados
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;