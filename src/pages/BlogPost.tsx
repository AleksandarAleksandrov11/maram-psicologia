import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "./Blog";

const postContent: Record<string, React.ReactNode> = {
  "como-es-una-primera-sesion-de-terapia": (
    <>
      <p>
        Dar el primer paso hacia terapia puede generar dudas e incluso nervios. En MARAM sabemos que lo desconocido suele generar incertidumbre, por eso queremos explicarte de forma clara y sencilla qué puedes esperar en tu primera sesión.
      </p>

      <h2>Paso 1: Bienvenida y creación de un espacio seguro</h2>
      <p>
        La primera sesión comienza con una conversación inicial para que te sientas cómodo. El psicólogo te explicará cómo funciona el proceso terapéutico, la confidencialidad y resolverá cualquier duda que tengas. El objetivo principal es que te sientas en un espacio seguro y de confianza.
      </p>

      <h2>Paso 2: Motivo de consulta</h2>
      <p>
        Te preguntarán qué te ha llevado a buscar ayuda en este momento. No necesitas tener todo claro ni saber explicarlo perfectamente. Puedes empezar simplemente diciendo: "No me estoy sintiendo bien" o "Estoy pasando por una situación difícil".
      </p>

      <h2>Paso 3: Conocer tu historia</h2>
      <p>
        El profesional puede hacerte algunas preguntas sobre tu contexto personal, familiar o emocional. Esto no es un interrogatorio, sino una forma de comprender mejor tu situación y ofrecerte un acompañamiento adecuado.
      </p>

      <h2>Paso 4: Definir objetivos</h2>
      <p>
        Juntos podrán empezar a identificar qué te gustaría trabajar o mejorar. No es obligatorio tener objetivos muy concretos desde el inicio; estos pueden ir definiéndose con el proceso.
      </p>

      <h2>Paso 5: Plan de trabajo</h2>
      <p>
        Al finalizar, el psicólogo puede explicarte cómo podrían desarrollarse las siguientes sesiones, la frecuencia recomendada y el enfoque que utilizarán.
      </p>

      <hr />

      <h2>Lo más importante: no tienes que hacerlo "perfecto"</h2>
      <p>
        No necesitas prepararte de una manera especial, ni saber exactamente qué decir. La primera sesión es un espacio para empezar, a tu ritmo.
      </p>
      <p>
        En MARAM, entendemos que iniciar terapia es un paso importante. Nuestro compromiso es acompañarte con profesionalismo, empatía y cercanía desde el primer momento.
      </p>
      <p className="font-medium">
        Si estás considerando comenzar, recuerda: dar el primer paso ya es parte del cambio.
      </p>
    </>
  ),
  "como-saber-si-necesitas-ir-a-terapia": (
    <>
      <p>
        Muchas personas se preguntan: "¿Realmente necesito ir a terapia o solo estoy pasando por una mala racha?" En MARAM queremos ayudarte a identificar señales claras que pueden indicar que es momento de buscar apoyo profesional.
      </p>

      <h2>Señal 1: Tus emociones te sobrepasan</h2>
      <p>
        Sentir tristeza, ansiedad o enojo es normal. Pero si estas emociones son intensas, frecuentes o duran demasiado tiempo, y empiezan a afectar tu día a día, puede ser una señal de que necesitas acompañamiento.
      </p>

      <h2>Señal 2: Tu bienestar diario se ve afectado</h2>
      <p>
        Cuando el malestar emocional interfiere en tu trabajo, estudios, relaciones o descanso, no es algo que debas ignorar. La terapia ayuda a recuperar el equilibrio y mejorar tu calidad de vida.
      </p>

      <h2>Señal 3: Repites los mismos patrones</h2>
      <p>
        Si sientes que siempre terminas en situaciones similares —conflictos de pareja, problemas de autoestima, dificultades para poner límites— la terapia puede ayudarte a comprender y cambiar esos patrones.
      </p>

      <h2>Señal 4: Has pasado por un cambio importante</h2>
      <p>
        Mudanzas, rupturas, pérdidas, cambios laborales o etapas nuevas pueden generar un impacto emocional significativo. No es necesario "tocar fondo" para pedir ayuda.
      </p>

      <h2>Señal 5: Simplemente quieres conocerte mejor</h2>
      <p>
        No todo se trata de crisis. Muchas personas acuden a terapia para crecer, fortalecer su autoestima y desarrollar herramientas emocionales.
      </p>

      <hr />

      <h2>La pregunta clave no es "¿estoy lo suficientemente mal?"</h2>
      <p>
        La verdadera pregunta es: <strong>¿quiero estar mejor?</strong>
      </p>
      <p>
        En MARAM creemos que la salud mental es prevención, crecimiento y bienestar. Buscar apoyo no significa que haya algo "mal" contigo; significa que estás dispuesto a invertir en tu bienestar emocional.
      </p>
      <p className="font-medium">
        Si te identificaste con alguna de estas señales, quizá este sea el momento de dar el paso. Tu bienestar importa.
      </p>
    </>
  ),
  "mitos-y-realidades-sobre-ir-al-psicologo": (
    <>
      <p>
        En los últimos años, acudir al psicólogo ha dejado de ser un tema tabú, pero todavía existen muchos mitos que impiden a las personas dar el paso. En MARAM queremos ayudarte a tomar decisiones informadas y conscientes sobre tu bienestar emocional.
      </p>

      <h2>Mito 1: "Ir al psicólogo es solo para personas con problemas graves"</h2>
      <p>
        <strong>Realidad:</strong> La psicología no es solo para crisis profundas o trastornos severos. También es un espacio para conocerte mejor, aprender a gestionar emociones, mejorar relaciones y desarrollar herramientas para tu crecimiento personal. Así como vas al médico para prevenir, también puedes acudir al psicólogo para fortalecer tu salud mental.
      </p>

      <h2>Mito 2: "Si voy al psicólogo es porque soy débil"</h2>
      <p>
        <strong>Realidad:</strong> Pedir ayuda es un acto de valentía. Reconocer que necesitas apoyo demuestra responsabilidad y compromiso contigo mismo. La fortaleza no está en aguantar en silencio, sino en buscar soluciones saludables.
      </p>

      <h2>Mito 3: "El psicólogo me dirá qué hacer"</h2>
      <p>
        <strong>Realidad:</strong> El psicólogo no toma decisiones por ti. Su función es acompañarte, orientarte y ofrecerte herramientas para que tú encuentres tus propias respuestas. Es un proceso colaborativo y confidencial.
      </p>

      <h2>Mito 4: "Hablar no sirve para nada"</h2>
      <p>
        <strong>Realidad:</strong> Hablar en un espacio seguro y profesional sí genera cambios. La terapia ayuda a ordenar pensamientos, entender emociones y modificar patrones que pueden estar afectando tu bienestar.
      </p>

      <hr />

      <h2>Entonces, ¿cuándo es buen momento para ir al psicólogo?</h2>
      <ul>
        <li>Cuando sientes ansiedad, tristeza o estrés constante.</li>
        <li>Cuando atraviesas cambios importantes en tu vida.</li>
        <li>Cuando quieres mejorar tu autoestima o tus relaciones.</li>
        <li>Cuando simplemente deseas conocerte mejor.</li>
      </ul>
      <p>
        En MARAM creemos que cuidar tu salud mental es tan importante como cuidar tu salud física. Ir al psicólogo no significa que algo esté "mal" contigo; significa que estás dispuesto a estar mejor.
      </p>
      <p className="font-medium">
        Si estás pensando en dar el paso, tal vez este sea el momento de priorizarte. Tu bienestar emocional lo merece.
      </p>
    </>
  ),
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const content = postContent[post.id];

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
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Volver al blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
                {post.category}
              </span>
              <span className="text-muted-foreground/30">•</span>
              <span className="text-xs font-sans text-muted-foreground flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
            <h1 className="title-hero mb-6">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
              <Calendar size={14} />
              {post.date}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg prose-neutral
              [&>p]:font-sans [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6
              [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4
              [&>hr]:my-10 [&>hr]:border-light-border
              [&>ul]:font-sans [&>ul]:text-muted-foreground [&>ul]:space-y-2 [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:pl-6
              [&>ul>li]:leading-relaxed"
          >
            {content}
          </motion.div>
        </div>
      </section>

      <section className="section-spacing section-warm">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="title-section mb-6">¿Quieres dar el primer paso?</h2>
            <p className="subtitle mb-8">
              Estamos aquí para acompañarte. Solicita tu primera cita y empieza tu camino hacia el bienestar.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-xs font-sans uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Pedir Cita <ArrowLeft size={14} className="rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
