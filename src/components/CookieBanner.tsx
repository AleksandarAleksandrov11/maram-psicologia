import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "maram_cookie_consent";

type ConsentValue = "accepted" | "rejected";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="container-elegant">
            <div className="bg-card border border-border shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <p className="font-serif text-base font-medium mb-1">
                  Uso de cookies
                </p>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Utilizamos cookies propias y de terceros para mejorar tu
                  experiencia de navegación y analizar el uso de nuestra web.
                  Puedes aceptar todas las cookies o rechazarlas. Para más
                  información, consulta nuestra{" "}
                  <Link
                    to="/cookies"
                    className="underline hover:text-foreground transition-colors"
                  >
                    política de cookies
                  </Link>{" "}
                  y nuestra{" "}
                  <Link
                    to="/privacidad"
                    className="underline hover:text-foreground transition-colors"
                  >
                    política de privacidad
                  </Link>
                  .
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Button
                  variant="elegant-outline"
                  size="sm"
                  onClick={() => handleConsent("rejected")}
                >
                  Rechazar
                </Button>
                <Button
                  variant="elegant"
                  size="sm"
                  onClick={() => handleConsent("accepted")}
                >
                  Aceptar
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
