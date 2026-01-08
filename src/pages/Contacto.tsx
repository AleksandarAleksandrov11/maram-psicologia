import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const faqs = [
  {
    question: "¿Cómo es una primera sesión?",
    answer:
      "La primera sesión es un espacio de conocimiento mutuo. Hablaremos sobre lo que te trae a consulta, tu historia personal y tus objetivos. Es una oportunidad para que conozcas nuestra forma de trabajar y decides si te sientes cómoda para continuar.",
  },
  {
    question: "¿Cuánto dura cada sesión?",
    answer:
      "Las sesiones individuales duran 50-60 minutos. Las sesiones de pareja pueden extenderse hasta 75-90 minutos según las necesidades del proceso terapéutico.",
  },
  {
    question: "¿Cuántas sesiones necesitaré?",
    answer:
      "La duración del tratamiento depende de cada caso. Algunas personas encuentran alivio en pocas sesiones, mientras que otros procesos requieren más tiempo. Lo importante es respetar tu ritmo y tus necesidades.",
  },
  {
    question: "¿La terapia online es igual de efectiva?",
    answer:
      "Sí. Numerosos estudios avalan la eficacia de la terapia online. Mantenemos la misma calidad y cercanía que en las sesiones presenciales, con la comodidad de conectarte desde donde estés.",
  },
  {
    question: "¿Cómo se garantiza la confidencialidad?",
    answer:
      "Todo lo que compartes en sesión es estrictamente confidencial. Nos regimos por el código deontológico del Colegio Oficial de Psicólogos, que protege tu privacidad en todo momento.",
  },
  {
    question: "¿Cuál es el precio de las sesiones?",
    answer:
      "Los precios varían según el tipo de terapia (individual, pareja, online). Te invitamos a contactarnos para conocer las tarifas actualizadas y opciones de pago.",
  },
];

const Contacto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Mensaje enviado correctamente", {
      description: "Te contactaremos lo antes posible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const whatsappUrl = `https://wa.me/34600000000?text=${encodeURIComponent(
    "Hola, me gustaría solicitar información sobre sus servicios de psicología."
  )}`;

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
              Contacto
            </p>
            <h1 className="title-hero mb-6">Estamos aquí para ayudarte</h1>
            <p className="subtitle">
              Da el primer paso hacia tu bienestar. Completa el formulario o
              contacta directamente con nosotras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl mb-8">Solicitar Cita Previa</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="font-sans text-sm">
                      Nombre *
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      required
                      className="rounded-none border-light-border focus:ring-1 focus:ring-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellidos" className="font-sans text-sm">
                      Apellidos *
                    </Label>
                    <Input
                      id="apellidos"
                      name="apellidos"
                      required
                      className="rounded-none border-light-border focus:ring-1 focus:ring-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-sans text-sm">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-none border-light-border focus:ring-1 focus:ring-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="font-sans text-sm">
                      Teléfono *
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      className="rounded-none border-light-border focus:ring-1 focus:ring-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicio" className="font-sans text-sm">
                    Tipo de consulta
                  </Label>
                  <Select name="servicio">
                    <SelectTrigger className="rounded-none border-light-border">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Terapia Individual</SelectItem>
                      <SelectItem value="pareja">Terapia de Pareja</SelectItem>
                      <SelectItem value="online">Terapia Online</SelectItem>
                      <SelectItem value="orientacion">
                        Primera Orientación
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="horario" className="font-sans text-sm">
                    Preferencia de horario
                  </Label>
                  <Select name="horario">
                    <SelectTrigger className="rounded-none border-light-border">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manana">Mañanas (9:00 - 14:00)</SelectItem>
                      <SelectItem value="tarde">Tardes (16:00 - 20:00)</SelectItem>
                      <SelectItem value="flexible">Horario flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="font-sans text-sm">
                    Motivo de consulta (opcional)
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos brevemente qué te gustaría trabajar..."
                    className="rounded-none border-light-border focus:ring-1 focus:ring-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>

                <p className="text-xs text-muted-foreground font-sans text-center">
                  Al enviar este formulario aceptas nuestra política de
                  privacidad. Tus datos serán tratados con confidencialidad.
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-serif text-2xl mb-8">Información de contacto</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <MapPin size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-sans font-medium mb-1">Ubicación</p>
                      <p className="text-muted-foreground font-sans text-sm">
                        Calle de la Salud, 123<br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-sans font-medium mb-1">Teléfono</p>
                      <p className="text-muted-foreground font-sans text-sm">
                        +34 600 000 000
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-sans font-medium mb-1">Email</p>
                      <p className="text-muted-foreground font-sans text-sm">
                        hola@marampiscologia.com
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock size={20} className="text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-sans font-medium mb-1">Horario</p>
                      <p className="text-muted-foreground font-sans text-sm">
                        Lunes a Viernes: 9:00 - 20:00<br />
                        Sábados: Cita previa
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-8 bg-secondary">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle size={24} className="text-[#25D366]" />
                  <h3 className="font-serif text-xl">¿Prefieres WhatsApp?</h3>
                </div>
                <p className="text-muted-foreground font-sans text-sm mb-6">
                  Si te resulta más cómodo, puedes contactarnos directamente por
                  WhatsApp. Te responderemos lo antes posible.
                </p>
                <Button
                  variant="whatsapp"
                  className="w-full justify-center"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    Escribir por WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing section-warm">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
                FAQ
              </p>
              <h2 className="title-section">Preguntas Frecuentes</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-light-border bg-background px-6"
                >
                  <AccordionTrigger className="font-serif text-lg text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
