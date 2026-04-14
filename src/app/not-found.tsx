"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useI18n } from "@/lib/i18n";

export default function NotFound() {
  const { locale, t } = useI18n();

  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-xl"
        >
          {/* Lost duck */}
          <motion.div
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="mb-8"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-32 h-32 lg:w-40 lg:h-40"
            >
              <rect width="100" height="100" fill="#FFDE00" />
              <g fill="#000000">
                <ellipse cx="58" cy="62" rx="38" ry="22" />
                <circle cx="38" cy="40" r="20" />
                <rect x="4" y="36" width="18" height="10" rx="3" />
              </g>
              {/* Sad eye (smaller, lower) */}
              <circle cx="40" cy="38" r="2" fill="#FFDE00" />
            </svg>
          </motion.div>

          <p className="font-heading font-bold text-7xl lg:text-9xl text-yellow leading-none mb-4">
            404
          </p>

          <h1 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-3">
            {t.notFound.heading[locale]}
          </h1>

          <p className="text-muted-foreground text-base lg:text-lg mb-10 max-w-md">
            {t.notFound.description[locale]}
          </p>

          <a
            href="/"
            className="inline-flex items-center bg-yellow text-black font-semibold px-8 py-4 text-base hover:bg-yellow-dark transition-colors duration-300 group"
          >
            {t.notFound.cta[locale]}
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
