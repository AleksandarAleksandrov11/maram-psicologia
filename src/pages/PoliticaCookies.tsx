import Layout from "@/components/layout/Layout";

const PoliticaCookies = () => {
  return (
    <Layout>
      <div className="page-transition">
        <section className="section-warm section-spacing">
          <div className="container-elegant text-center">
            <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
              Legal
            </p>
            <h1 className="title-hero mb-6">Política de Cookies</h1>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-elegant max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none font-sans text-foreground/80 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  ¿Qué son las cookies?
                </h2>
                <p className="leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en tu
                  dispositivo cuando visitas un sitio web. Permiten que la web
                  recuerde tus preferencias y mejoran tu experiencia de navegación.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  Tipos de cookies que utilizamos
                </h2>

                <h3 className="font-serif text-xl font-medium text-foreground mb-3 mt-6">
                  Cookies técnicas (necesarias)
                </h3>
                <p className="leading-relaxed">
                  Son esenciales para el funcionamiento de la web. Permiten la
                  navegación y el uso de funciones básicas. No requieren tu
                  consentimiento.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>
                    <strong>maram_cookie_consent:</strong> Almacena tu preferencia
                    sobre el uso de cookies. Duración: 1 año.
                  </li>
                </ul>

                <h3 className="font-serif text-xl font-medium text-foreground mb-3 mt-6">
                  Cookies analíticas
                </h3>
                <p className="leading-relaxed">
                  Nos ayudan a comprender cómo los usuarios interactúan con nuestra
                  web, recopilando información de forma anónima. Solo se activan si
                  aceptas el uso de cookies.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>
                    <strong>Vercel Analytics:</strong> Recopila datos anónimos de
                    navegación para mejorar el rendimiento de la web. Duración: sesión.
                  </li>
                  <li>
                    <strong>Vercel Speed Insights:</strong> Mide el rendimiento de
                    carga de las páginas. Duración: sesión.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  ¿Cómo gestionar las cookies?
                </h2>
                <p className="leading-relaxed">
                  Al acceder a nuestra web por primera vez, te mostramos un banner
                  donde puedes aceptar o rechazar las cookies. Si aceptas, se
                  activarán todas las cookies descritas. Si rechazas, solo se
                  utilizarán las cookies técnicas necesarias.
                </p>
                <p className="leading-relaxed mt-3">
                  También puedes configurar tu navegador para bloquear o eliminar
                  cookies en cualquier momento. Ten en cuenta que desactivar ciertas
                  cookies puede afectar a la funcionalidad de la web.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
                      Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  Cambiar tu consentimiento
                </h2>
                <p className="leading-relaxed">
                  Si deseas cambiar tu preferencia de cookies, puedes eliminar la
                  cookie <em>maram_cookie_consent</em> desde la configuración de tu
                  navegador. Al volver a visitar nuestra web, se te mostrará de nuevo
                  el banner de consentimiento.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                  Contacto
                </h2>
                <p className="leading-relaxed">
                  Si tienes alguna pregunta sobre nuestra política de cookies, puedes
                  contactarnos en{" "}
                  <a
                    href="mailto:maram@marampsicologia.com"
                    className="underline hover:text-foreground transition-colors"
                  >
                    maram@marampsicologia.com
                  </a>
                  .
                </p>
                <p className="leading-relaxed mt-3">
                  Última actualización: marzo 2026.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PoliticaCookies;
