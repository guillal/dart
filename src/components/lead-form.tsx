"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { submitLead, type LeadFormState } from "@/app/actions/submit-lead";

const initialState: LeadFormState = { status: "idle" };

export function LeadForm() {
  const { locale, t } = useI18n();
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  if (state.status === "success") {
    return (
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-yellow/30 p-10 lg:p-14 text-center"
          >
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 border-2 border-yellow text-yellow">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-3">
              {t.leadForm.successTitle[locale]}
            </h3>
            <p className="text-muted-foreground text-base">
              {t.leadForm.successDescription[locale]}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 lg:mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-yellow" />
            <span className="text-xs uppercase tracking-[0.3em] text-yellow">
              {t.leadForm.label[locale]}
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-[1.1] mb-4">
            {t.leadForm.heading[locale]}
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl">
            {t.leadForm.description[locale]}
          </p>
        </motion.div>

        <motion.form
          action={formAction}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Honeypot — hidden from humans, visible to bots */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", left: "-9999px", opacity: 0 }}
            aria-hidden="true"
          />

          <input type="hidden" name="locale" value={locale} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {t.leadForm.fieldName[locale]} *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-yellow outline-none text-white py-3 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {t.leadForm.fieldEmail[locale]} *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-yellow outline-none text-white py-3 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="interest" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {t.leadForm.fieldInterest[locale]}
            </label>
            <select
              id="interest"
              name="interest"
              defaultValue="info"
              className="w-full bg-transparent border-b border-white/20 focus:border-yellow outline-none text-white py-3 transition-colors"
            >
              <option value="info" className="bg-card text-white">{t.leadForm.interestInfo[locale]}</option>
              <option value="apply" className="bg-card text-white">{t.leadForm.interestApply[locale]}</option>
              <option value="international" className="bg-card text-white">{t.leadForm.interestInternational[locale]}</option>
              <option value="other" className="bg-card text-white">{t.leadForm.interestOther[locale]}</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {t.leadForm.fieldMessage[locale]}
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full bg-transparent border-b border-white/20 focus:border-yellow outline-none text-white py-3 transition-colors resize-none"
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 shrink-0 accent-yellow"
            />
            <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">
              {t.leadForm.consent[locale]}
            </span>
          </label>

          {state.status === "error" && (
            <p className="text-sm text-red-400">
              {state.message === "missing_fields"
                ? t.leadForm.errorMissingFields[locale]
                : state.message === "invalid_email"
                ? t.leadForm.errorInvalidEmail[locale]
                : state.message === "consent_required"
                ? t.leadForm.errorConsentRequired[locale]
                : t.leadForm.errorGeneric[locale]}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center bg-yellow text-black font-semibold px-8 py-4 text-base hover:bg-yellow-dark transition-colors duration-300 group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {pending ? t.leadForm.submitting[locale] : t.leadForm.submit[locale]}
            {!pending && (
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
