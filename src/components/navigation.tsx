"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, type Locale } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = { es: "ES", ca: "CA", en: "EN" };
const locales: Locale[] = ["es", "ca", "en"];

export function Navigation() {
  const { locale, setLocale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [light, setLight] = useState(false);

  const navLinks = [
    { href: "/#programa", label: t.nav.programa[locale] },
    { href: "/#plan-de-estudios", label: t.nav.planEstudios[locale] },
    { href: "/#profesorado", label: t.nav.profesorado[locale] },
    { href: "/#admision", label: t.nav.admision[locale] },
    { href: "/#contacto", label: t.nav.contacto[locale] },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
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
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-yellow transition-colors duration-300 p-1.5"
              aria-label={light ? "Dark mode" : "Light mode"}
            >
              {light ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
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
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 lg:hidden"
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
              <button
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-yellow transition-colors duration-300 p-1.5 ml-2"
                aria-label={light ? "Dark mode" : "Light mode"}
              >
                {light ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                )}
              </button>
            </div>

            <motion.a
              href="https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              className="bg-yellow text-black text-lg font-semibold px-8 py-3 mt-2"
            >
              {t.nav.inscribete[locale]}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
