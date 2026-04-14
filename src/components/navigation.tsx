"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, type Locale } from "@/lib/i18n";
import { useBooking } from "@/components/booking-provider";

const localeLabels: Record<Locale, string> = { es: "ES", ca: "CA", en: "EN" };
const locales: Locale[] = ["es", "ca", "en"];

export function Navigation() {
  const { locale, setLocale, t } = useI18n();
  const booking = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/#programa", label: t.nav.programa[locale] },
    { href: "/#plan-de-estudios", label: t.nav.planEstudios[locale] },
    { href: "/#profesorado", label: t.nav.profesorado[locale] },
    { href: "/#admision", label: t.nav.admision[locale] },
    { href: "/faq", label: t.nav.faq[locale] },
    { href: "/#contacto", label: t.nav.contacto[locale] },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-3 group">
            <span className="font-heading font-bold text-xl tracking-tight">
              <span className="text-yellow">darc</span>
              <span className="text-white">.</span>
              <span className="text-white">barcelona</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}

            {/* Language selector */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-6 ml-2">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`text-xs font-heading font-bold px-2 py-1 transition-colors duration-300 ${
                    locale === l
                      ? "text-yellow"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>

            <button
              onClick={booking.open}
              className="text-sm text-white hover:text-yellow transition-colors duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {t.nav.booking[locale]}
            </button>

            <a
              href="https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow text-black text-sm font-semibold px-5 py-2.5 hover:bg-yellow-dark transition-colors duration-300"
            >
              {t.nav.inscribete[locale]}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menú"
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl font-heading font-medium text-white hover:text-yellow transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile language selector + theme toggle */}
            <div className="flex items-center gap-3 mt-4">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`text-sm font-heading font-bold px-3 py-1.5 transition-colors ${
                    locale === l
                      ? "text-black bg-yellow"
                      : "text-muted-foreground"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>

            <motion.button
              onClick={() => {
                setMobileOpen(false);
                booking.open();
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="border border-white/30 text-white text-lg font-medium px-8 py-3 mt-2 hover:border-yellow hover:text-yellow transition-colors duration-300"
            >
              {t.nav.bookingLong[locale]}
            </motion.button>

            <motion.a
              href="https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 + 0.08 }}
              className="bg-yellow text-black text-lg font-semibold px-8 py-3"
            >
              {t.nav.inscribete[locale]}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
