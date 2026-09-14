import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Aqua Mountain | Pure As Nature",
  description: "Premium packaged drinking water. Pure as nature, safe for life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-ivory selection:bg-gold/30 selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
