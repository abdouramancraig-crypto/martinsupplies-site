import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

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
      <body className="antialiased bg-[var(--white)] text-[var(--black)]">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
