import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "MartinSupplies & Co | Premium Heritage-Grown Ingredients",
  description: "Premium Non-GMO corn, soybean, and exotic spices sourced from Central Africa. FDA-aligned quality for discerning food professionals worldwide.",
  keywords: ["wholesale ingredients", "non-GMO", "African spices", "premium grains", "food supply", "sustainable sourcing", "Cameroon pepper", "Penja pepper"],
  authors: [{ name: "MartinSupplies & Co" }],
  openGraph: {
    title: "MartinSupplies & Co | Premium Heritage-Grown Ingredients",
    description: "Premium Non-GMO corn, soybean, and exotic spices sourced from Central Africa.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
