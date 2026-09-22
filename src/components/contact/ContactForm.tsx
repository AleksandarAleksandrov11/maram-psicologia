import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";

const PHONE_NUMBER = "34698994566";

const contactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede superar los 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, "El nombre solo puede contener letras"),
  telefono: z
    .string()
    .trim()
    .min(1, "El teléfono es obligatorio")
    .regex(/^\d{9}$/, "El teléfono debe tener exactamente 9 dígitos numéricos"),
  motivo: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres)")
    .max(500, "El motivo no puede superar los 500 caracteres"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const steps = [
  {
    field: "nombre",
    question: "¿Cómo te llamas?",
    helper: "Solo el nombre, para saber cómo dirigirnos a ti.",
  },
  {
    field: "telefono",
    question: "¿A qué teléfono te escribimos?",
    helper: "Te contactamos por WhatsApp o llamada, de Lun a Vie de 9:00 a 20:00.",
  },
  {
    field: "motivo",
    question: "¿Qué te está pasando ahora mismo?",
    helper:
      "No hace falta que lo tengas claro. Unas líneas nos ayudan a preparar mejor tu primera sesión.",
  },
] as const;

const ContactForm = () => {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      motivo: "",
    },
    mode: "onSubmit",
  });

  const isLastStep = step === steps.length - 1;

  const goNext = async () => {
    const valid = await form.trigger(steps[step].field);
    if (!valid) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => setStep((current) => Math.max(current - 1, 0));

  const onSubmit = (data: ContactFormValues) => {
    const text = [
      "*Nueva solicitud de cita - MARAM Psicología*",
      "",
      `*Nombre:* ${data.nombre}`,
      `*Teléfono:* ${data.telefono}`,
      `*Motivo de consulta:* ${data.motivo}`,
    ].join("\n");

    const whatsappFormUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappFormUrl, "_blank");

    toast.success("¡Solicitud preparada!", {
      description: "Se ha abierto WhatsApp. Pulsa enviar para confirmar tu solicitud de cita.",
      duration: 6000,
    });

    setIsSubmitted(true);
    form.reset();
    setStep(0);
  };

  const onError = () => {
    toast.error("Revisa el formulario", {
      description: "Hay campos con errores que necesitan ser corregidos.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <CheckCircle size={48} className="text-[#25D366]" />
        <h3 className="font-serif text-2xl">¡Solicitud enviada!</h3>
        <p className="text-muted-foreground font-sans text-sm max-w-md">
          Tu solicitud se ha abierto en WhatsApp. Completa el envío allí para que podamos
          contactarte lo antes posible.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
            Paso {step + 1} de {steps.length}
          </p>
          <div className="h-[2px] w-full bg-light-border">
            <motion.div
              className="h-full bg-foreground"
              initial={false}
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={steps[step].field}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="min-h-[200px]"
          >
            {step === 0 && (
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-serif text-2xl leading-snug">
                      {steps[0].question}
                    </FormLabel>
                    <p className="text-muted-foreground font-sans text-sm pt-1 pb-4">
                      {steps[0].helper}
                    </p>
                    <FormControl>
                      <Input
                        autoFocus
                        placeholder="Tu nombre"
                        className="rounded-none border-light-border focus:ring-1 focus:ring-foreground"
                        {...field}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            goNext();
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {step === 1 && (
              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-serif text-2xl leading-snug">
                      {steps[1].question}
                    </FormLabel>
                    <p className="text-muted-foreground font-sans text-sm pt-1 pb-4">
                      {steps[1].helper}
                    </p>
                    <FormControl>
                      <div className="flex">
                        <span className="flex items-center px-4 border border-r-0 border-light-border text-muted-foreground font-sans text-sm">
                          +34
                        </span>
                        <Input
                          autoFocus
                          type="tel"
                          placeholder="612345678"
                          inputMode="numeric"
                          maxLength={9}
                          className="rounded-none border-light-border focus:ring-1 focus:ring-foreground"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "").slice(0, 9);
                            field.onChange(value);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              goNext();
                            }
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {step === 2 && (
              <FormField
                control={form.control}
                name="motivo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-serif text-2xl leading-snug">
                      {steps[2].question}
                    </FormLabel>
                    <p className="text-muted-foreground font-sans text-sm pt-1 pb-4">
                      {steps[2].helper}
                    </p>
                    <FormControl>
                      <Textarea
                        autoFocus
                        rows={5}
                        placeholder="Cuéntanos brevemente qué te gustaría trabajar..."
                        className="rounded-none border-light-border focus:ring-1 focus:ring-foreground resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-4">
          {step > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={goBack}
              className="flex-shrink-0"
            >
              <ArrowLeft size={16} />
              Atrás
            </Button>
          )}

          {isLastStep ? (
            <Button
              type="submit"
              variant="hero"
              className="flex-1"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Enviando..." : "Enviar y reservar"}
            </Button>
          ) : (
            <Button type="button" variant="hero" className="flex-1" onClick={goNext}>
              Continuar
            </Button>
          )}
        </div>

        <p className="text-xs text-muted-foreground font-sans text-center">
          Al enviar este formulario aceptas nuestra política de privacidad.
          Tus datos serán tratados con confidencialidad.
        </p>
      </form>
    </Form>
  );
};

export default ContactForm;
