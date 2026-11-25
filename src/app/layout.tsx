import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Onest } from "next/font/google";
import { buildDefaultMetadata, getRequestSiteUrl } from "@/lib/seo";
import { LoadingCurtain } from "@/components/loading-curtain";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getRequestSiteUrl();
  return buildDefaultMetadata(baseUrl);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable} ${onest.variable}`}>
      <body className="w-full max-w-440 mx-auto">
        <LoadingCurtain />
        {children}
      </body>
    </html>
  );
}
