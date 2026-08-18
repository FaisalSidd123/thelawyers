import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "The Lawyers | Professional Legal Counsel & Advisory",
  description: "The Lawyers delivers precise, editorial, and modern legal services. Specialized in corporate, property, family, and civil law. Contact +92 307 3685421.",
  keywords: "The Lawyers, Law Firm Karachi, Legal Services Pakistan, Corporate Law Pakistan, Property Lawyers, Family Court Advocates, Civil Litigation, Immigration Lawyers",
  openGraph: {
    title: "The Lawyers | Professional Legal Counsel",
    description: "The Lawyers delivers precise, editorial, and modern legal services. Contact +92 307 3685421.",
    url: "https://thelawyers.pk",
    type: "website",
  },
};

import GlobalWhatsApp from "@/components/GlobalWhatsApp";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-brand-paper text-brand-navy selection:bg-brand-burgundy selection:text-brand-paper" suppressHydrationWarning>
        {children}
        <GlobalWhatsApp />
      </body>
    </html>
  );
}

