"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const UAB_URL =
  "https://www.uab.cat/web/master-en-direccion-de-arte-y-comunicacion/admision-1206597472150.html/d-Touch/param1-4879_es/";

const CONTACT_EMAIL = "coordinacio.master.direccio.art.comunicacio@uab.cat";

export function Footer() {
  const { locale, t } = useI18n();

  return (
    <footer id="contacto" className="border-t border-white/5 py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading font-bold text-2xl tracking-tight">
              <span className="text-yellow">darc</span>
              <span className="text-white">.barcelona</span>
            </span>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs leading-relaxed">
              {t.footer.description[locale]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-yellow mb-4">
              {t.footer.contacto[locale]}
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-white">Guillem Marca Frances</p>
              <p className="text-muted-foreground">{t.footer.director[locale]}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground hover:text-yellow transition-colors duration-300 block break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-yellow mb-4">
              {t.footer.ubicacion[locale]}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Facultat de Ciències de la Comunicació</p>
              <p>Universitat Autònoma de Barcelona</p>
              <p>08193 Cerdanyola del Vallès</p>
              <p>Barcelona</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-yellow mb-4">
              {t.footer.enlaces[locale]}
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={UAB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-yellow transition-colors duration-300 block"
              >
                {t.footer.paginaUab[locale]}
              </a>
              <a
                href="https://www.uab.cat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-yellow transition-colors duration-300 block"
              >
                UAB
              </a>
              <a
                href="/faq"
                className="text-muted-foreground hover:text-yellow transition-colors duration-300 block"
              >
                FAQ
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.copyright[locale]}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.footer.department[locale]}
          </p>
        </div>
      </div>
    </footer>
  );
}
