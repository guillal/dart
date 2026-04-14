import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import { BookingProvider } from "@/components/booking-provider";
import "./globals.css";

const GA_ID = "G-49LENL6SCW";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "darc.barcelona — Máster en Dirección de Arte y Comunicación | UAB",
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
    "darc barcelona",
  ],
  metadataBase: new URL("https://darc.barcelona"),
  openGraph: {
    title: "darc.barcelona — Máster en Dirección de Arte y Comunicación",
    description:
      "Formamos directores de arte globales y estrategas. 60 ECTS. UAB Barcelona.",
    type: "website",
    locale: "es_ES",
    url: "https://darc.barcelona",
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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col grain">
        <I18nProvider>
          <BookingProvider>{children}</BookingProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
