import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "PhysioCare - Premium Doorstep Physiotherapy Services",
  description: "Expert physiotherapy at your doorstep. Personalized treatment plans to restore mobility, reduce pain, and improve your quality of life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-gray-800 bg-white antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

