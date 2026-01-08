import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-elegant section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/logo-maram.png"
              alt="MARAM Psicología"
              className="h-10 w-auto mb-6"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed font-sans">
              Espacio seguro para tu bienestar emocional. Psicología clínica y
              terapia online en Madrid.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Navegación</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/especialidades"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Especialidades
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre-nosotras"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Sobre Nosotras
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6">Servicios</h4>
            <ul className="space-y-3 font-sans text-sm text-primary-foreground/70">
              <li>Ansiedad y Estrés</li>
              <li>Depresión</li>
              <li>Autoestima</li>
              <li>Terapia de Pareja</li>
              <li>Terapia Online</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-foreground/50 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Madrid, España
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-foreground/50 flex-shrink-0" />
                <span className="text-primary-foreground/70">+34 600 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-foreground/50 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  hola@marampiscologia.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary-foreground/50 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Lun - Vie: 9:00 - 20:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm font-sans">
              © {new Date().getFullYear()} MARAM Psicología Clínica. Todos los
              derechos reservados.
            </p>
            <div className="flex gap-6 text-sm font-sans">
              <Link
                to="/privacidad"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/cookies"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
