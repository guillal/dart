import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import { BookingProvider } from "@/components/booking-provider";
import "./globals.css";

const GA_ID = "G-49LENL6SCW";
const LINKEDIN_PARTNER_ID = "9942497";

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
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight-loader" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col grain">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
          />
        </noscript>
        <I18nProvider>
          <BookingProvider>{children}</BookingProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
