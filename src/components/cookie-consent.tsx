"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { CONSENT_KEY, CONSENT_EVENT, getStoredConsent } from "./analytics";

export function CookieConsent() {
  const { locale, t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === null) {
      // Small delay so the banner doesn't slap the user on landing
      const timer = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const decide = (decision: "accepted" | "rejected") => {
    localStorage.setItem(CONSENT_KEY, decision);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 lg:left-auto lg:right-6 lg:bottom-6 lg:max-w-md z-50 bg-card border border-yellow/30 p-6 shadow-xl shadow-black/50"
          role="dialog"
          aria-label="Cookie consent"
        >
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {t.cookies.message[locale]}
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => decide("accepted")}
              className="flex-1 bg-yellow text-black text-sm font-semibold px-4 py-2.5 hover:bg-yellow-dark transition-colors"
            >
              {t.cookies.accept[locale]}
            </button>
            <button
              onClick={() => decide("rejected")}
              className="flex-1 border border-white/20 text-white text-sm font-medium px-4 py-2.5 hover:border-white hover:text-white transition-colors"
            >
              {t.cookies.reject[locale]}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
