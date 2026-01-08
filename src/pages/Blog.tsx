import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "¿Cuándo es el momento de pedir ayuda profesional?",
    excerpt:
      "Identificar cuándo necesitamos apoyo psicológico no siempre es fácil. Te contamos las señales que indican que podría ser un buen momento para buscar ayuda.",
    category: "Bienestar",
    date: "15 de Enero, 2026",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "5 técnicas para gestionar la ansiedad en el día a día",
    excerpt:
      "La ansiedad puede ser abrumadora, pero existen herramientas prácticas que puedes incorporar a tu rutina para sentirte mejor.",
    category: "Ansiedad",
    date: "10 de Enero, 2026",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "La importancia del autocuidado en tiempos difíciles",
    excerpt:
      "El autocuidado no es egoísmo, es una necesidad. Descubre cómo priorizarte sin culpa y mejorar tu bienestar emocional.",
    category: "Autoestima",
    date: "5 de Enero, 2026",
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Terapia online: ¿Es tan efectiva como la presencial?",
    excerpt:
      "La terapia online ha demostrado ser una alternativa eficaz. Te explicamos sus beneficios y cómo aprovecharla al máximo.",
    category: "Terapia",
    date: "28 de Diciembre, 2025",
    readTime: "6 min",
  },
  {
    id: 5,
    title: "Cómo mejorar la comunicación en pareja",
    excerpt:
      "La comunicación es el pilar de toda relación sana. Aprende estrategias para expresarte mejor y escuchar de forma activa.",
    category: "Pareja",
    date: "20 de Diciembre, 2025",
    readTime: "8 min",
  },
  {
    id: 6,
    title: "El duelo: un proceso único y personal",
    excerpt:
      "No hay una forma correcta de vivir el duelo. Cada persona transita su pérdida de manera diferente y eso está bien.",
    category: "Duelo",
    date: "15 de Diciembre, 2025",
    readTime: "5 min",
  },
];

const Blog = () => {
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
              Blog & Recursos
            </p>
            <h1 className="title-hero mb-6">Artículos sobre bienestar</h1>
            <p className="subtitle">
              Reflexiones, herramientas y recursos para acompañarte en tu
              camino hacia el bienestar emocional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-spacing bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="border border-light-border p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground/30">•</span>
                      <span className="text-xs font-sans text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl mb-3 group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h2>
                    <p className="body-text text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-spacing section-warm">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="title-section mb-6">
              Recibe recursos en tu email
            </h2>
            <p className="subtitle mb-8">
              Suscríbete a nuestra newsletter y recibe artículos, herramientas
              y reflexiones sobre bienestar emocional directamente en tu
              bandeja de entrada.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-grow px-4 py-3 border border-light-border bg-background font-sans text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground text-xs font-sans uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Suscribir <ArrowRight size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
