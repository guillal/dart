import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dart.barcelona — Máster en Dirección de Arte y Comunicación | UAB",
  description:
    "Máster universitario de 60 ECTS en Dirección de Arte y Comunicación. Publicidad, branding, fotografía y audiovisual. Universitat Autònoma de Barcelona.",
  keywords: [
    "dirección de arte",
    "comunicación",
    "máster",
    "UAB",
    "Barcelona",
    "publicidad",
    "branding",
    "fotografía",
    "audiovisual",
    "dart barcelona",
  ],
  metadataBase: new URL("https://dart.barcelona"),
  openGraph: {
    title: "dart.barcelona — Máster en Dirección de Arte y Comunicación",
    description:
      "Formamos directores de arte globales y estrategas. 60 ECTS. UAB Barcelona.",
    type: "website",
    locale: "es_ES",
    url: "https://dart.barcelona",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
