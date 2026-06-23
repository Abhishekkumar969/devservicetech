import { Inter, Outfit, Playfair_Display } from "next/font/google";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import FloatingActions from "../components/FloatingActions/FloatingActions";
import Footer from "../components/Footer/Footer";
import DisableInspect from "../components/DisableInspect/DisableInspect";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DevService Tech (Development and service technology) | Top Global Website Design & Software Development Agency",
  description: "DevService Tech (Development and service technology) is a top-rated global digital agency specializing in expert website design, SEO services, and comprehensive software development to grow your business worldwide.",
  keywords: [
    // Short-tail keywords
    "web design", "software development", "SEO services", "e-commerce solutions", "logo design", "tech agency", "DevService Tech (Development and service technology)", "global digital agency",
    // Long-tail keywords
    "best global website design company",
    "top software development agency worldwide",
    "affordable SEO services for small businesses",
    "custom software development company global",
    "e-commerce website development worldwide",
    "api integration services in India",
    "professional website designers with standout results"
  ],
  icons: {
    icon: '/images/devservicetech.jpg',
    shortcut: '/images/devservicetech.jpg',
    apple: '/images/devservicetech.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <DisableInspect />
        <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <TopBar />
          <Header />
        </div>
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <SpeedInsights />
      </body>
    </html>
  );
}
