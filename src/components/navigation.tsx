"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useI18n, type Locale } from "@/lib/i18n";
import { useBooking } from "@/components/booking-provider";

const localeLabels: Record<Locale, string> = { es: "ES", ca: "CA", en: "EN" };
const locales: Locale[] = ["es", "ca", "en"];

const UAB_ADMISSION_URL =
  "https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/";

export function Navigation() {
  const { locale, setLocale, t } = useI18n();
  const booking = useBooking();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isHome = pathname === "/";

  const navLinks = [
    { href: "/#programa", id: "programa", label: t.nav.programa[locale] },
    { href: "/#plan-de-estudios", id: "plan-de-estudios", label: t.nav.planEstudios[locale] },
    { href: "/#profesorado", id: "profesorado", label: t.nav.profesorado[locale] },
    { href: "/#admision", id: "admision", label: t.nav.admision[locale] },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking (homepage only)
  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev,
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      { threshold: [0, 0.25, 0.5], rootMargin: "-30% 0px -50% 0px" },
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHome]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group relative">
            <span className="font-heading font-bold text-xl tracking-tight">
              <span className="text-yellow">darc</span>
              <span className="text-white">.</span>
              <span className="text-white">barcelona</span>
            </span>
            <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-yellow group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Nav links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm transition-colors duration-300 tracking-wide relative ${
                      isActive
                        ? "text-yellow"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute -bottom-2 left-0 right-0 h-[1px] bg-yellow"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Language selector */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-6">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`text-xs font-heading font-bold px-2 py-1 transition-colors duration-300 ${
                    locale === l ? "text-yellow" : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>

            {/* Actions group */}
            <div className="flex items-center gap-5 border-l border-white/10 pl-6">
              <button
                onClick={booking.open}
                className="text-sm text-muted-foreground hover:text-yellow transition-colors duration-300"
              >
                {t.nav.booking[locale]}
              </button>

              <a
                href={UAB_ADMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow text-black text-sm font-semibold px-5 py-2.5 hover:bg-yellow-dark transition-colors duration-300"
              >
                {t.nav.inscribete[locale]}
              </a>
            </div>
          </div>

          {/* Mobile: compact CTA + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={UAB_ADMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow text-black text-xs font-semibold px-3 py-1.5 hover:bg-yellow-dark transition-colors duration-300"
            >
              {t.nav.inscribete[locale]}
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
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
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-6 lg:hidden px-6"
          >
            {/* Primary CTA first */}
            <motion.a
              href={UAB_ADMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="bg-yellow text-black text-lg font-semibold px-10 py-4"
            >
              {t.nav.inscribete[locale]}
            </motion.a>

            <motion.button
              onClick={() => {
                setMobileOpen(false);
                booking.open();
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="border border-white/30 text-white text-base font-medium px-8 py-3 hover:border-yellow hover:text-yellow transition-colors duration-300"
            >
              {t.nav.bookingLong[locale]}
            </motion.button>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.16 }}
              className="h-[1px] w-16 bg-white/10 my-2"
            />

            {/* Nav links */}
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="text-xl font-heading font-medium text-white hover:text-yellow transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            {/* FAQ + Contacto relegated below */}
            <motion.a
              href="/faq"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + navLinks.length * 0.05 }}
              className="text-sm text-muted-foreground hover:text-yellow transition-colors mt-2"
            >
              {t.nav.faq[locale]}
            </motion.a>
            <motion.a
              href="/#contacto"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + navLinks.length * 0.05 }}
              className="text-sm text-muted-foreground hover:text-yellow transition-colors"
            >
              {t.nav.contacto[locale]}
            </motion.a>

            {/* Language selector (utility, at bottom) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 + navLinks.length * 0.05 }}
              className="flex items-center gap-3 mt-6"
            >
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`text-sm font-heading font-bold px-3 py-1.5 transition-colors ${
                    locale === l ? "text-black bg-yellow" : "text-muted-foreground"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
