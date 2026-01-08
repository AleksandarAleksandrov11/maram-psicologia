import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Video, ArrowRight } from "lucide-react";

const specialties = [
  {
    title: "Ansiedad y Estrés",
    description:
      "La ansiedad es una respuesta natural, pero cuando se vuelve excesiva puede limitar tu vida. Te ayudamos a identificar los desencadenantes, desarrollar estrategias de afrontamiento y recuperar la calma.",
    symptoms: [
      "Preocupación constante",
      "Tensión muscular",
      "Dificultad para dormir",
      "Ataques de pánico",
    ],
  },
  {
    title: "Depresión",
    description:
      "La depresión va más allá de la tristeza. Es una condición que afecta tu forma de pensar, sentir y funcionar. Juntas trabajaremos para encontrar luz en los momentos oscuros.",
    symptoms: [
      "Tristeza persistente",
      "Pérdida de interés",
      "Fatiga constante",
      "Sentimientos de vacío",
    ],
  },
  {
    title: "Autoestima y Desarrollo Personal",
    description:
      "Tu relación contigo misma es la más importante. Te acompañamos en el proceso de conocerte, aceptarte y construir una imagen más positiva y realista de ti.",
    symptoms: [
      "Autocrítica excesiva",
      "Dificultad para poner límites",
      "Miedo al rechazo",
      "Comparación constante",
    ],
  },
  {
    title: "Terapia de Pareja",
    description:
      "Las relaciones requieren trabajo y cuidado. Facilitamos un espacio neutral donde mejorar la comunicación, resolver conflictos y fortalecer el vínculo.",
    symptoms: [
      "Problemas de comunicación",
      "Conflictos recurrentes",
      "Distanciamiento emocional",
      "Crisis de pareja",
    ],
  },
  {
    title: "Duelo y Pérdida",
    description:
      "Perder a alguien o algo importante es un proceso doloroso. Te acompañamos a elaborar el duelo, honrar lo perdido y encontrar un nuevo equilibrio.",
    symptoms: [
      "Negación o incredulidad",
      "Tristeza profunda",
      "Culpa o rabia",
      "Dificultad para continuar",
    ],
  },
  {
    title: "Gestión Emocional",
    description:
      "Aprender a identificar, comprender y regular tus emociones es fundamental para tu bienestar. Desarrolla inteligencia emocional para una vida más equilibrada.",
    symptoms: [
      "Explosiones emocionales",
      "Dificultad para expresarte",
      "Bloqueo emocional",
      "Reactividad excesiva",
    ],
  },
];

const Especialidades = () => {
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
              Nuestras Especialidades
            </p>
            <h1 className="title-hero mb-6">Psicología Sanitaria</h1>
            <p className="subtitle">
              Cada persona es única y merece un enfoque personalizado.
              Trabajamos desde una perspectiva integradora, adaptando las
              técnicas a tus necesidades específicas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Online Therapy Highlight */}
      <section className="section-spacing bg-background">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12 border border-light-border"
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                <Video size={32} className="text-foreground" />
              </div>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Terapia Online
              </h2>
              <p className="body-text text-muted-foreground max-w-2xl">
                La distancia no es un obstáculo. Nuestras sesiones online
                mantienen la misma calidad y cercanía que las presenciales,
                permitiéndote acceder a terapia desde cualquier lugar del
                mundo.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="elegant" asChild>
                <Link to="/contacto">Solicitar Info</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="section-spacing section-warm">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.article
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elegant bg-background"
              >
                <h3 className="font-serif text-2xl mb-4">{specialty.title}</h3>
                <p className="body-text text-muted-foreground mb-6">
                  {specialty.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-sans font-medium uppercase tracking-wide text-muted-foreground">
                    Señales comunes:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {specialty.symptoms.map((symptom) => (
                      <li
                        key={symptom}
                        className="flex items-center gap-2 text-sm font-sans text-muted-foreground"
                      >
                        <Check size={14} className="text-foreground flex-shrink-0" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
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
            <h2 className="title-section mb-6">¿Necesitas orientación?</h2>
            <p className="subtitle max-w-2xl mx-auto mb-10">
              Si no estás segura de qué tipo de terapia necesitas, podemos
              ayudarte. En la primera consulta evaluamos juntas cuál es el
              mejor enfoque para ti.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contacto">
                Agendar Consulta <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Especialidades;
