import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, Globe, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Sesiones por videollamada",
    description: "Desde la comodidad de tu espacio, con la misma calidad y cercanía.",
  },
  {
    icon: Globe,
    title: "Desde cualquier lugar",
    description: "Solo necesitas conexión a internet. Sin desplazamientos.",
  },
  {
    icon: Shield,
    title: "Privacidad total",
    description: "Plataformas seguras que garantizan la confidencialidad.",
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
          className="text-center mb-12"
        >
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
            Modalidad
          </p>
          <h2 className="title-section mb-4">Terapia 100% online</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Todas nuestras sesiones se realizan online. Creemos que la
            terapia debe adaptarse a tu vida, no al revés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-background border border-light-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mx-auto mb-4">
                <feature.icon size={20} className="text-white" />
              </div>
              <h3 className="font-serif text-lg mb-2">{feature.title}</h3>
              <p className="body-text text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="elegant-outline" asChild>
            <Link to="/especialidades">
              Ver especialidades <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
