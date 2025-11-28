import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iamet - Genetec Unified Security Partner",
  description: "Blindaje Tecnológico para la Industria de Tijuana. Seguridad Unificada y Cumplimiento C-TPAT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
