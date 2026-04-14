"use server";

import { Resend } from "resend";

export interface LeadFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  // Honeypot field — if bots fill this, silently "succeed" but don't send
  if (formData.get("website")) {
    return { status: "success" };
  }

  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const interest = (formData.get("interest") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim() || "";
  const locale = (formData.get("locale") as string | null) || "es";
  const consent = formData.get("consent") === "on";

  // Validation
  if (!name || !email) {
    return { status: "error", message: "missing_fields" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "invalid_email" };
  }

  if (!consent) {
    return { status: "error", message: "consent_required" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  const from = process.env.LEAD_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    console.error("Missing Resend configuration");
    return { status: "error", message: "server_error" };
  }

  const resend = new Resend(apiKey);

  const interestMap: Record<string, string> = {
    apply: "Quiere inscribirse",
    info: "Quiere más información",
    international: "Estudiante internacional",
    other: "Otro",
  };

  const interestLabel = interestMap[interest || ""] || interest || "—";

  try {
    await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[darc.barcelona] Nueva consulta: ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; padding: 24px; color: #111;">
          <h2 style="color: #000; margin: 0 0 16px;">Nueva consulta desde darc.barcelona</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Nombre</td><td style="padding: 8px 0;"><strong>${escape(name)}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Interés</td><td style="padding: 8px 0;">${escape(interestLabel)}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Idioma</td><td style="padding: 8px 0;">${escape(locale)}</td></tr>
            ${message ? `<tr><td style="padding: 8px 0; color: #666; vertical-align: top;">Mensaje</td><td style="padding: 8px 0; white-space: pre-wrap;">${escape(message)}</td></tr>` : ""}
          </table>
          <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            Responde directamente a este email para contestar al candidato.
          </p>
        </div>
      `,
    });

    return { status: "success" };
  } catch (error) {
    console.error("Resend error:", error);
    return { status: "error", message: "send_failed" };
  }
}

function escape(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
