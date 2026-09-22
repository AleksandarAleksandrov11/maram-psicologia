import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import teamMariaTrinidad from "@/assets/team-maria-trinidad.webp";
import teamLucia from "@/assets/team-lucia.webp";
import teamEquipo from "@/assets/team-equipo.jpg";

const team = [
  {
    name: "María Trinidad",
    title: "Psicóloga sanitaria",
    license: "M-44056",
    image: teamMariaTrinidad,
    bio: "Acompaña procesos de estrés, malestar emocional y crecimiento personal, combinando claridad y dirección terapéutica. Su intervención ayuda a comprender lo que ocurre a nivel emocional y relacional, desarrollando recursos internos y estrategias para avanzar con seguridad. Su experiencia en contextos profesionales y programas de desarrollo personal le permite integrar la gestión de la autoexigencia, los límites y los bloqueos dentro del proceso terapéutico.",
  },
  {
    name: "Lucía Zazo",
    title: "Psicóloga sanitaria",
    license: "M-44057",
    image: teamLucia,
    bio: "Acompaña procesos de ansiedad, bajo estado de ánimo y gestión emocional desde una escucha cercana y una comprensión profunda de la historia personal. Ofrece un espacio terapéutico seguro y adaptado a cada persona, poniendo especial atención al vínculo, al ritmo emocional y a las necesidades del momento vital. Su forma de intervenir ayuda a entender lo que ocurre a nivel emocional y relacional, favoreciendo el desarrollo de recursos internos para el bienestar psicológico.",
  },
];

const values = [
  {
    title: "Ética profesional",
    description:
      "Trabajamos bajo los principios del código deontológico de la psicología, garantizando la confidencialidad y el respeto a la persona.",
  },
  {
    title: "Espacio seguro",
    description:
      "Creamos un ambiente de confianza donde puedes expresarte libremente, sin juicios ni expectativas.",
  },
  {
    title: "Enfoque personalizado",
    description:
      "Cada proceso es único. Acompañamos sin forzar, respetando tu ritmo y tus objetivos personales.",
  },
  {
    title: "Alianza terapéutica",
    description:
      "Establecemos una relación basada en la confianza y el respeto, que potencia la efectividad del acompañamiento y el bienestar emocional.",
  },
];

const SobreNosotras = () => {
  return (
    <Layout>
      <section className="section-spacing bg-secondary">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              Nuestro equipo
            </p>
            <h1 className="title-hero mb-6">Psicólogas sanitarias online</h1>
            <p className="subtitle">
              Profesionales comprometidas con tu bienestar, que acompañan procesos de ansiedad,
              relaciones, autoestima y regulación emocional desde un enfoque cercano y seguro.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={teamEquipo}
                  alt="Equipo MARAM Psicología"
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
                Quiénes somos
              </p>
              <h2 className="title-section mb-6">Somos MARAM</h2>
              <p className="body-text text-muted-foreground leading-relaxed mb-4">
                Somos un equipo de psicólogas sanitarias unidas por una misma
                vocación: acompañar a las personas en su proceso de bienestar
                emocional desde un espacio seguro, profesional y cercano.
              </p>
              <p className="body-text text-muted-foreground leading-relaxed">
                Creemos en una psicología humana, accesible y adaptada a cada
                persona. Nuestra forma de trabajar combina rigor profesional con
                calidez, creando un vínculo terapéutico que potencia el cambio y
                el crecimiento personal.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing section-warm">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              El equipo
            </p>
            <h2 className="title-section">Conoce a nuestras psicólogas</h2>
          </motion.div>

          <div className="space-y-16">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center`}
              >
                <div className="w-full lg:w-1/3">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <h2 className="font-serif text-3xl mb-2">{member.name}</h2>
                  <p className="text-sm font-sans text-muted-foreground mb-4">
                    {member.title} · Nº Col. {member.license}
                  </p>
                  <p className="body-text text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

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
              Nuestra filosofía
            </p>
            <h2 className="title-section">Los valores que nos definen</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-secondary border border-light-border"
              >
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="body-text text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-secondary">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title-section mb-6">¿Listo/a para dar el paso?</h2>
            <p className="subtitle max-w-2xl mx-auto mb-10">
              Nos encantaría conocerte y acompañarte en tu proceso. La primera
              consulta es el comienzo de tu transformación.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contacto">Contactar</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SobreNosotras;
