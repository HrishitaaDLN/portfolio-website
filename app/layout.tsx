import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-syne",
  display: "swap",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050508",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Hrishitaa Dharmavarapu | Software Engineer - AI Portfolio",
  description:
    "Software Engineer - AI & MS Computer Science @ UIC. Building ML systems, LLM applications, and data pipelines with real-world impact.",
  keywords: [
    "Software Engineer - AI",
    "Machine Learning",
    "LLM",
    "RAG",
    "UIC",
    "Data Science",
    "Hrishitaa Dharmavarapu",
  ],
  authors: [{ name: "Lakshmi Naga Hrishitaa Dharmavarapu" }],
  openGraph: {
    title: "Hrishitaa Dharmavarapu | Software Engineer - AI",
    description:
      "Building intelligent systems at the intersection of AI, data, and impact.",
    type: "website",
    locale: "en_US",
    siteName: "Hrishitaa Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Hrishitaa — Software Engineer - AI Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrishitaa Dharmavarapu | Software Engineer - AI",
    description: "ML systems, LLM apps, and data pipelines",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrains.variable}`}>
      <body className="font-display antialiased bg-background text-[#e8e8f0]">
        {children}
      </body>
    </html>
  );
}
