


import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";


export const metadata: Metadata = {
  title: "MATRIXWAYZ — AI-powered products & custom AI services",
  description:
    "MATRIXWAYZ builds AI products and delivers custom AI solutions — chatbots, voice & speech assistants, workflow automations and AI consulting for enterprises across Education, Logistics, Finance, Retail and more.",
  metadataBase: new URL("https://www.matrixwayz.com/"),
  keywords: [
    "AI solutions",
    "AI products",
    "chatbot development",
    "voice assistant",
    "workflow automation",
    "AI consulting",
    "enterprise AI",
    "MATRIXWAYZ"
  ],
  authors: [{ name: "MATRIXWAYZ", url: "https://www.matrixwayz.com/about" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": 160,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.matrixwayz.com/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MATRIXWAYZ — AI-powered products & custom AI services",
    description:
      "MATRIXWAYZ builds AI products and delivers custom AI solutions — chatbots, voice & speech assistants, workflow automations and AI consulting for enterprises.",
    url: "https://www.matrixwayz.com/",
    siteName: "MATRIXWAYZ",
    images: [
      {
        url: "https://www.matrixwayz.com/matrixbg.png", // create 1200×630 OG image and place at this path
        width: 1200,
        height: 630,
        alt: "MATRIXWAYZ — AI solutions for enterprises",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "MATRIXWAYZ — AI-powered products & custom AI services",
    description:
      "AI products and custom AI services: chatbots, voice assistants, workflow automations, and AI consulting.",
    card: "summary_large_image",
    images: ["https://www.matrixwayz.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
