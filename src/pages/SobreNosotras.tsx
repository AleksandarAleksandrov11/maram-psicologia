import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import teamMaria from "@/assets/team-maria.jpg";
import teamAna from "@/assets/team-ana.jpg";
import teamLaura from "@/assets/team-laura.jpg";

const team = [
  {
    name: "María García Ruiz",
    title: "Psicóloga Sanitaria",
    specialty: "Ansiedad y Estrés",
    license: "M-32451",
    image: teamMaria,
    bio: "Con más de 10 años de experiencia, María se especializa en el tratamiento de trastornos de ansiedad y estrés. Su enfoque integrador combina técnicas cognitivo-conductuales con mindfulness para ofrecer un abordaje completo y personalizado.",
  },
  {
    name: "Ana Martínez López",
    title: "Psicóloga Sanitaria",
    specialty: "Depresión y Duelo",
    license: "M-28934",
    image: teamAna,
    bio: "Ana aporta una mirada cálida y profesional al acompañamiento de procesos de duelo y estados depresivos. Formada en terapia humanista y EMDR, crea un espacio seguro donde cada persona puede explorar su mundo emocional.",
  },
  {
    name: "Laura Sánchez Moreno",
    title: "Psicóloga Sanitaria",
    specialty: "Autoestima y Terapia de Pareja",
    license: "M-35672",
    image: teamLaura,
    bio: "Laura se especializa en el trabajo con la autoestima y las relaciones de pareja. Su enfoque sistémico y narrativo ayuda a las personas a reescribir su historia y construir vínculos más saludables.",
  },
];

const values = [
  {
    title: "Ética Profesional",
    description:
      "Nos regimos por los más altos estándares deontológicos de nuestra profesión, garantizando un trato digno y confidencial.",
  },
  {
    title: "Formación Continua",
    description:
      "Nos mantenemos actualizadas con las últimas investigaciones y técnicas para ofrecer el mejor tratamiento posible.",
  },
  {
    title: "Espacio Seguro",
    description:
      "Creamos un ambiente de confianza donde puedes expresarte libremente, sin juicios ni expectativas.",
  },
  {
    title: "Enfoque Personalizado",
    description:
      "Cada tratamiento se adapta a tus necesidades únicas, respetando tu ritmo y tus objetivos personales.",
  },
];

const SobreNosotras = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-spacing bg-secondary">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              Nuestro Equipo
            </p>
            <h1 className="title-hero mb-6">Psicólogas Sanitarias</h1>
            <p className="subtitle">
              Un equipo de profesionales comprometidas con tu bienestar.
              Colegiadas, con formación especializada y vocación de servicio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-background">
        <div className="container-elegant">
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
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-2">
                    {member.specialty}
                  </p>
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

      {/* Values */}
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
              Nuestra Filosofía
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
                className="p-8 bg-background border border-light-border"
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

      {/* CTA */}
      <section className="section-spacing bg-background">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title-section mb-6">¿Lista para dar el paso?</h2>
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
