import Layout from "@/components/layout/Layout";

const PoliticaPrivacidad = () => {
  return (
    <Layout>
      <div className="page-transition">
        <section className="section-warm section-spacing">
          <div className="container-elegant text-center">
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              Legal
            </p>
            <h1 className="title-hero mb-6">Política de Privacidad</h1>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-elegant max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none font-sans text-foreground/80 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  1. Responsable del tratamiento
                </h2>
                <p className="leading-relaxed">
                  MARAM Psicología Clínica (en adelante, "MARAM") es responsable del
                  tratamiento de los datos personales que nos facilites a través de
                  esta web.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Email: maram@marampsicologia.com</li>
                  <li>Teléfono: +34 698 994 566</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  2. Finalidad del tratamiento
                </h2>
                <p className="leading-relaxed">
                  Los datos personales que recabamos se utilizan para las
                  siguientes finalidades:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Gestionar las solicitudes de contacto y citas.</li>
                  <li>Prestar los servicios de psicología contratados.</li>
                  <li>Enviar comunicaciones relacionadas con nuestros servicios, si has dado tu consentimiento.</li>
                  <li>Mejorar la experiencia de navegación en nuestra web mediante análisis estadísticos.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  3. Legitimación
                </h2>
                <p className="leading-relaxed">
                  La base legal para el tratamiento de tus datos es:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Tu consentimiento al rellenar formularios de contacto.</li>
                  <li>La ejecución del contrato de servicios profesionales.</li>
                  <li>El interés legítimo para la mejora de nuestros servicios.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  4. Conservación de datos
                </h2>
                <p className="leading-relaxed">
                  Los datos personales se conservarán mientras exista una relación
                  profesional y durante los plazos legalmente establecidos. Los datos
                  de contacto se mantendrán hasta que solicites su supresión.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  5. Derechos del usuario
                </h2>
                <p className="leading-relaxed">
                  Puedes ejercer tus derechos de acceso, rectificación, supresión,
                  oposición, limitación del tratamiento y portabilidad enviando un
                  correo electrónico a{" "}
                  <a
                    href="mailto:maram@marampsicologia.com"
                    className="underline hover:text-foreground transition-colors"
                  >
                    maram@marampsicologia.com
                  </a>
                  , indicando tu nombre y el derecho que deseas ejercer.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  6. Seguridad
                </h2>
                <p className="leading-relaxed">
                  En MARAM adoptamos las medidas técnicas y organizativas necesarias
                  para garantizar la seguridad y confidencialidad de tus datos
                  personales, evitando su alteración, pérdida o acceso no autorizado.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  7. Cesión de datos
                </h2>
                <p className="leading-relaxed">
                  No compartimos tus datos personales con terceros, salvo
                  obligación legal o cuando sea necesario para la prestación de
                  nuestros servicios (por ejemplo, plataformas de videollamada para
                  sesiones online).
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  8. Actualización
                </h2>
                <p className="leading-relaxed">
                  Esta política de privacidad puede ser actualizada periódicamente.
                  Te recomendamos revisarla con regularidad. Última actualización:
                  marzo 2026.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PoliticaPrivacidad;
