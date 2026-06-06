import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollRevealProvider from "./components/ScrollRevealProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hill & Delamain | Zambia's Leading Freight Forwarder",
  description:
    "Established in Zambia in 1965, Hill & Delamain is Zambia's leading clearing and freight forwarding company. 15 offices, 150+ staff, IATA registered.",
  keywords: [
    "freight forwarding Zambia",
    "customs clearing Zambia",
    "air freight Lusaka",
    "sea freight Zambia",
    "surface freight",
    "customs broking ZRA",
    "logistics Zambia",
    "Hill Delamain",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlowCondensed.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ScrollRevealProvider>
          <Navbar />
          {children}
          <Footer />
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
