import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-maram.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Consulta de psicología acogedora"
          className="w-full h-full object-cover object-[70%_30%] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-elegant relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-6"
          >
            Psicología Clínica & Bienestar Emocional
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="title-hero mb-6"
          >
            Cuidar(te) también es crecer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle mb-10 max-w-xl"
          >
            Un espacio seguro donde acompañarte en tu proceso de bienestar
            emocional. Porque pedir ayuda es el primer paso hacia una vida más
            plena.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" asChild>
              <Link to="/contacto">Reservar Consulta</Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/especialidades">Conocer Servicios</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
