import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import JsonLd from "./components/JsonLd";
import {
  buildMetadata,
  localBusinessSchema,
  websiteSchema,
} from "../lib/seo";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = buildMetadata({
  title: "Radha Krishna Bio Plantic | Plant Nursery in Saharanpur",
  description:
    "Fruit, horticulture and sandalwood plants raised from superior mother stock. Doorstep delivery across Saharanpur, U.P. Call +91 79769 86709.",
  path: "/",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}