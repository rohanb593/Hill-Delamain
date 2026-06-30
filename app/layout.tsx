import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollRevealProvider from "./components/ScrollRevealProvider";

export const metadata: Metadata = {
  title: "Hill + Delamain | Zambia's Leading Freight Forwarder",
  description:
    "Established in Zambia in 1965, Hill + Delamain is Zambia's leading clearing and freight forwarding company. 14 offices, 150+ staff.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.png",    sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
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
    <html lang="en" className="antialiased">
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
