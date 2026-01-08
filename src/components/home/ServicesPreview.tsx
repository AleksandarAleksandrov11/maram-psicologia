import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Ansiedad y Estrés",
    description:
      "Aprende a gestionar la ansiedad y recupera el control de tu vida con herramientas efectivas.",
  },
  {
    title: "Depresión",
    description:
      "Acompañamiento profesional para superar momentos difíciles y recuperar tu bienestar.",
  },
  {
    title: "Autoestima",
    description:
      "Trabaja en tu relación contigo misma y desarrolla una imagen más positiva.",
  },
  {
    title: "Terapia de Pareja",
    description:
      "Mejora la comunicación y fortalece los vínculos con tu pareja.",
  },
  {
    title: "Terapia Online",
    description:
      "Sesiones desde la comodidad de tu hogar, manteniendo la misma calidad terapéutica.",
  },
  {
    title: "Duelo y Pérdida",
    description:
      "Apoyo en procesos de duelo para elaborar pérdidas y encontrar un nuevo equilibrio.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-spacing section-warm">
      <div className="container-elegant">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              Nuestras Especialidades
            </p>
            <h2 className="title-section">Áreas de intervención</h2>
          </div>
          <Button variant="elegant-outline" className="mt-6 md:mt-0" asChild>
            <Link to="/especialidades">
              Ver todas <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to="/especialidades"
                className="card-elegant block h-full bg-background group"
              >
                <h3 className="font-serif text-xl mb-3 group-hover:text-muted-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="body-text text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
