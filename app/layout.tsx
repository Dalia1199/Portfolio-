import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dalia Shabana — Backend Developer",
  description:
    "Dalia Shabana is a Backend Developer building secure, scalable backend systems and RESTful APIs with Node.js, Express.js, NestJS, and TypeScript.",
  keywords: [
    "Dalia Shabana",
    "Backend Developer",
    "Node.js Developer",
    "NestJS",
    "Express.js",
    "TypeScript",
    "REST API",
    "MongoDB",
  ],
  openGraph: {
    title: "Dalia Shabana — Backend Developer",
    description:
      "I build secure, scalable backend applications and RESTful APIs using Node.js, Express.js, NestJS, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${jbMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
