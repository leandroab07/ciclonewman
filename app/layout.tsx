import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const BASE_URL = "https://circulonewman.vercel.app";
const DESCRIPTION =
  "Pequena comunidade católica de leigos, sob o patrocínio de São Filipe Neri e São John Henry Newman. Intelectualidade, espiritualidade e convivência fraterna.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Círculo Newman",
    template: "%s | Círculo Newman",
  },
  description: DESCRIPTION,
  keywords: [
    "católico",
    "comunidade católica",
    "São Filipe Neri",
    "Newman",
    "John Henry Newman",
    "espiritualidade",
    "grupo católico",
    "oratório",
    "leigos",
  ],
  authors: [{ name: "Círculo Newman" }],
  creator: "Círculo Newman",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Círculo Newman",
    title: "Círculo Newman",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Círculo Newman — Cor ad cor loquitur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Círculo Newman",
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
