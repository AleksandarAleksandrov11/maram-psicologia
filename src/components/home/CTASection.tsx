import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="section-spacing section-warm">
      <div className="container-elegant">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="title-section mb-6">
            El primer paso es el más importante
          </h2>
          <p className="subtitle mb-10">
            No tienes que hacerlo sola. Estamos aquí para acompañarte en tu
            camino hacia el bienestar emocional. Reserva tu primera consulta y
            comienza tu transformación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/contacto">Reservar Primera Cita</Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/sobre-nosotras">Conocer al Equipo</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
