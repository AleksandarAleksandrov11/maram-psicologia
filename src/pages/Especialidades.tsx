import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Video, ArrowRight } from "lucide-react";

const specialties = [
  {
    title: "Estrés y ansiedad",
    subtitle: "Recupera tu calma y bienestar",
    description:
      "El estrés y la ansiedad pueden aparecer cuando la mente y el cuerpo permanecen en alerta, afectando tu descanso y tu bienestar diario. A veces no te sientes bien y no sabes por qué.\n\nEn Maram te ayudamos a reducir el estrés para que puedas recuperar calma, seguridad interna y equilibrio emocional en tu día a día.",
    bullets: [
      "Sientes que tu mente no se apaga",
      "Te cuesta descansar o desconectar",
      "Vives con una preocupación constante",
      "Hay momentos en los que el estrés te supera",
    ],
  },
  {
    title: "Gestión emocional",
    subtitle: "Gestiona tus emociones y encuentra equilibrio",
    description:
      "A veces las emociones se sienten intensas o difíciles de manejar, y eso puede generar tensión, bloqueos o conflictos internos. Puede que tengas dificultades para expresar o comprender lo que sientes.\n\nTe ofrecemos un espacio para reconocer, comprender y regular tus emociones, para relacionarte contigo y con los demás desde un lugar más consciente y seguro.",
    bullets: [
      "Te cuesta entender o gestionar tus emociones",
      "Sientes que reaccionas de forma desproporcionada",
      "Te sobrepasan la ira, la tristeza o la frustración",
      "Tienes dificultad para calmarte en momentos difíciles",
    ],
  },
  {
    title: "Relaciones y vínculos",
    subtitle: "Relaciones saludables y límites claros",
    description:
      "Las relaciones con los demás pueden ser fuente de apoyo o de tensión. A veces sientes que te cuesta poner límites o mantener vínculos saludables.\n\nEn Maram trabajamos el vínculo y las relaciones desde una mirada terapéutica que favorece la seguridad emocional y los límites sanos.",
    bullets: [
      "Te cuesta decir \"no\" o poner límites",
      "Sientes ansiedad en tus relaciones personales",
      "Te preocupa depender demasiado de otros",
      "Tienes conflictos frecuentes con personas cercanas",
    ],
  },
  {
    title: "Procesos de cambio y crecimiento personal",
    subtitle: "Crecimiento personal y transformación vital",
    description:
      "Los cambios vitales, laborales o personales pueden generar miedo o bloqueo, y a veces te sientes estancado/a o inseguro/a sobre qué decisión tomar.\n\nTe acompañamos en procesos de cambio vital, personal o profesional para que puedas avanzar con mayor claridad, confianza y seguridad.",
    bullets: [
      "Te sientes bloqueado/a ante decisiones importantes",
      "Tienes miedo a salir de tu zona de confort",
      "Deseas avanzar en tu desarrollo personal o profesional",
      "Te cuesta enfrentar cambios vitales",
    ],
  },
  {
    title: "Exigencia interna y seguridad emocional",
    subtitle: "Autoexigencia y seguridad interna",
    description:
      "La autoexigencia, el perfeccionismo y la culpa pueden hacer que nunca te sientas suficiente, generando presión constante y desgaste emocional.\n\nDesde Maram te ayudamos a reducir la presión interna, aumentar tu seguridad emocional y te enseñamos a construir una relación más amable contigo.",
    bullets: [
      "Te castigas por no cumplir tus expectativas",
      "Te cuesta aceptar errores o imperfecciones",
      "Sientes culpa frecuente o autoexigencia constante",
      "Deseas sentir más seguridad y calma interior",
    ],
  },
  {
    title: "Duelo y procesos de pérdida",
    subtitle: "Acompañamiento y recuperación emocional",
    description:
      "La pérdida, ya sea de personas, relaciones o situaciones importantes, puede generar tristeza, vacío o desconcierto, y afectar tu día a día.\n\nSostenemos procesos de duelo, para integrar la pérdida y recuperar equilibrio emocional.",
    bullets: [
      "Has perdido a alguien cercano o una relación importante",
      "Sientes tristeza o vacío que no desaparece",
      "Te cuesta aceptar la situación o seguir adelante",
      "Experimentas cambios emocionales intensos tras la pérdida",
    ],
  },
];

const Especialidades = () => {
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
              Nuestras especialidades
            </p>
            <h1 className="title-hero mb-6">Psicología online especializada</h1>
            <p className="subtitle">
              Cada persona es única y merece un enfoque personalizado.
              Trabajamos desde una perspectiva integradora, adaptando las
              técnicas a tus necesidades específicas.
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
            className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12 border border-light-border"
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                <Video size={32} className="text-foreground" />
              </div>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Terapia online
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
                <Link to="/contacto">Solicitar info</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
                <h3 className="font-serif text-2xl mb-2">{specialty.title}</h3>
                <p className="text-sm font-sans italic text-muted-foreground mb-4">
                  {specialty.subtitle}
                </p>
                <div className="body-text text-muted-foreground mb-6 space-y-3">
                  {specialty.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-sans font-medium uppercase tracking-wide text-muted-foreground">
                    Podemos ayudarte si:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {specialty.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-sm font-sans text-muted-foreground"
                      >
                        <Check size={14} className="text-foreground flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

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
              Si no estás seguro/a de qué tipo de terapia necesitas, podemos
              ayudarte. En la primera consulta evaluamos juntas/os cuál es el
              mejor enfoque para ti.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contacto">
                Agendar consulta <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Especialidades;
