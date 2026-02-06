import "./globals.css";
import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-07508bfe.vercel.app"),
  title: {
    default: "كيف أسأل؟",
    template: "%s | كيف أسأل؟"
  },
  description:
    "دليل تفاعلي يساعدك على صياغة أسئلة واضحة وقوية في مواقف مختلفة باللغة العربية.",
  keywords: [
    "صياغة الأسئلة",
    "التواصل الفعّال",
    "تعلم اللغة العربية",
    "كيف أسأل",
    "طرح الأسئلة"
  ],
  openGraph: {
    title: "كيف أسأل؟",
    description:
      "دليل تفاعلي يساعدك على صياغة أسئلة واضحة وقوية في مواقف مختلفة باللغة العربية.",
    url: "https://agentic-07508bfe.vercel.app",
    siteName: "كيف أسأل؟",
    locale: "ar_AR",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <body className="min-h-screen gradient-bg">
        <div className="min-h-screen bg-white/85 backdrop-blur-3xl">
          {children}
        </div>
      </body>
    </html>
  );
}
