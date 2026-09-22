import { motion } from "framer-motion";
import { Heart, Shield, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Profesionalidad",
    description:
      "Psicólogas sanitarias colegiadas, con formación especializada y en actualización continua.",
  },
  {
    icon: Heart,
    title: "Empatía",
    description:
      "Acompañamos desde la escucha activa, la validación emocional, la comunicación consciente y el respeto por el ritmo de cada persona.",
  },
  {
    icon: Shield,
    title: "Confidencialidad",
    description:
      "Un espacio terapéutico seguro donde expresarse con libertad, sin juicios y con total privacidad.",
  },
  {
    icon: Sparkles,
    title: "Proceso",
    description:
      "Acompañamiento personalizado hacia tu bienestar y desarrollo personal.",
  },
];

const ValueProposition = () => {
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
          <h2 className="title-section mb-6">
            Por qué cuidar tu salud mental
          </h2>
          <p className="subtitle max-w-2xl mx-auto">
            Tu bienestar emocional es tan importante como tu salud física.
            Invertir en ti es la mejor decisión que puedes tomar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-6">
                <value.icon size={24} className="text-foreground" />
              </div>
              <h3 className="font-serif text-xl mb-3">{value.title}</h3>
              <p className="body-text text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
