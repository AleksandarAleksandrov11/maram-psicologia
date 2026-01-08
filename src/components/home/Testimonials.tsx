import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Encontré un espacio donde por fin pude expresarme sin miedo. Ha sido un antes y un después en mi vida.",
    author: "M.L.",
    context: "Paciente de terapia individual",
  },
  {
    quote:
      "La terapia online me permitió continuar mi proceso desde cualquier lugar. La calidad es exactamente la misma.",
    author: "A.G.",
    context: "Paciente de terapia online",
  },
  {
    quote:
      "Gracias a la terapia de pareja hemos aprendido a comunicarnos de una forma completamente nueva.",
    author: "R.M. & J.P.",
    context: "Pacientes de terapia de pareja",
  },
];

const Testimonials = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-elegant">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
            Testimonios
          </p>
          <h2 className="title-section">Lo que dicen nuestros pacientes</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 border border-light-border"
            >
              <Quote
                size={32}
                className="text-muted-foreground/20 absolute top-6 left-6"
              />
              <blockquote className="relative z-10 pt-8">
                <p className="body-text italic mb-6">"{testimonial.quote}"</p>
                <footer>
                  <p className="font-serif text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground font-sans">
                    {testimonial.context}
                  </p>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
