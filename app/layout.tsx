import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MartinSupplies & Co | Premium Heritage-Grown Ingredients",
  description: "Premium Non-GMO corn, soybean, and exotic spices sourced from Central Africa. FDA-registered quality for discerning food professionals worldwide.",
  keywords: ["wholesale ingredients", "non-GMO", "African spices", "premium grains", "food supply", "sustainable sourcing"],
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
        className={`${poppins.variable} ${playfair.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
