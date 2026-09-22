import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SessionsSectionProps {
  showCTA?: boolean;
}

const SessionsSection = ({ showCTA = false }: SessionsSectionProps) => {
  return (
    <section className="section-spacing bg-background border-y border-light-border">
      <div className="container-elegant">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
            Sesiones
          </p>
          <h2 className="title-section mb-4">
            Acompañamiento terapéutico y formato de sesiones
          </h2>
          <p className="subtitle max-w-2xl mx-auto">
            Las sesiones están pensadas como un espacio de acompañamiento
            profesional, cercano y adaptado a cada persona.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="p-8 bg-background border border-light-border text-center"
          >
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-2">
              Primera sesión
            </p>
            <h3 className="font-serif text-2xl mb-2">45€</h3>
            <p className="text-muted-foreground font-sans text-sm">
              60 minutos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-background border border-light-border text-center"
          >
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-2">
              Siguientes sesiones
            </p>
            <h3 className="font-serif text-2xl mb-2">60€</h3>
            <p className="text-muted-foreground font-sans text-sm">
              60 minutos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-background border border-light-border text-center"
          >
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-2">
              Bono 5 sesiones
            </p>
            <h3 className="font-serif text-2xl mb-2">250€</h3>
            <div className="flex items-center justify-center gap-2 text-muted-foreground font-sans text-sm">
              <Check size={14} className="text-foreground" />
              <span>50€ por sesión</span>
            </div>
          </motion.div>
        </div>

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Button variant="hero" asChild>
              <Link to="/contacto">Reserva tu sesión</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SessionsSection;
