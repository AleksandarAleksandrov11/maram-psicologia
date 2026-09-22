import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

export const blogPosts = [
  {
    id: "como-es-una-primera-sesion-de-terapia",
    title: "Cómo es una primera sesión de terapia: qué esperar paso a paso",
    excerpt:
      "Dar el primer paso hacia terapia puede generar dudas e incluso nervios. En MARAM sabemos que lo desconocido suele generar incertidumbre, por eso queremos explicarte de forma clara y sencilla qué puedes esperar en tu primera sesión.",
    category: "Terapia",
    date: "1 de Marzo, 2026",
    readTime: "6 min",
  },
  {
    id: "como-saber-si-necesitas-ir-a-terapia",
    title: "Cómo saber si necesitas ir a terapia",
    excerpt:
      "Muchas personas se preguntan: \"¿Realmente necesito ir a terapia o solo estoy pasando por una mala racha?\" En MARAM queremos ayudarte a identificar señales claras que pueden indicar que es momento de buscar apoyo profesional.",
    category: "Bienestar",
    date: "20 de Febrero, 2026",
    readTime: "5 min",
  },
  {
    id: "mitos-y-realidades-sobre-ir-al-psicologo",
    title: "Mitos y realidades sobre ir al psicólogo",
    excerpt:
      "En los últimos años, acudir al psicólogo ha dejado de ser un tema tabú, pero todavía existen muchos mitos que impiden a las personas dar el paso. En MARAM queremos ayudarte a tomar decisiones informadas y conscientes sobre tu bienestar emocional.",
    category: "Psicología",
    date: "10 de Febrero, 2026",
    readTime: "7 min",
  },
];

const Blog = () => {
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
              Blog & Recursos
            </p>
            <h1 className="title-hero mb-6">Artículos</h1>
            <p className="subtitle">
              Reflexiones, herramientas y recursos para acompañarte en tu
              camino hacia el bienestar emocional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <span className="text-sm font-sans text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                        Leer más <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
