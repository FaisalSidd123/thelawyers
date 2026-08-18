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
  metadataBase: new URL("https://thelawyers.com.pk"),
  title: {
    default: "The Lawyers | Professional Legal Counsel & Advisory in Pakistan",
    template: "%s | The Lawyers Pakistan",
  },
  description: "The Lawyers delivers precise, editorial, and modern legal services in Pakistan. Specialized in corporate law, company registration, income tax, sales tax, NTN registration, and civil law. Contact +92 307 3685421.",
  keywords: "The Lawyers Pakistan, Law Firm Karachi, Legal Services Pakistan, Corporate Law Pakistan, Company Registration Pakistan, NTN Registration, Income Tax Filing, Sales Tax Registration, Property Lawyers, Family Court Advocates, Civil Litigation",
  authors: [{ name: "The Lawyers" }],
  creator: "The Lawyers",
  publisher: "The Lawyers",
  alternates: {
    canonical: "https://thelawyers.com.pk",
  },
  openGraph: {
    title: "The Lawyers | Professional Legal Counsel & Advisory in Pakistan",
    description: "The Lawyers delivers precise, editorial, and modern legal services in Pakistan. Contact +92 307 3685421.",
    url: "https://thelawyers.com.pk",
    siteName: "The Lawyers",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lawyers | Professional Legal Counsel & Advisory in Pakistan",
    description: "The Lawyers delivers precise, editorial, and modern legal services in Pakistan. Contact +92 307 3685421.",
  },
  verification: {
    google: "f13473f23346b76d",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

