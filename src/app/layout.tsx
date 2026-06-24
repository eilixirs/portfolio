import type { Metadata } from "next";
import { Geist, Fraunces, Long_Cang } from "next/font/google";
import { PaperTexture } from "@/components/primitives";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: "italic",
  weight: ["400", "500", "600", "700"],
});

const longCang = Long_Cang({
  variable: "--font-long-cang",
  weight: "400"
})

export const metadata: Metadata = {
  title: {
    default: "Iris Xie - Portfolio",
    template: "%s | Iris Xie",
  },
  description:
    "Strategic marketer and creative problem-solver with a passion for building brands that resonate.",
  metadataBase: new URL("https://eilixirs.cc"),
  keywords: [
    "Iris Xie",
    "marketing",
    "brand strategy",
    "creative",
    "portfolio",
    "marketer",
  ],
  authors: [{ name: "Iris Xie" }],
  creator: "Iris Xie",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        geist.variable,
        fraunces.variable,
        longCang.variable,
        "antialiased relative bg-bg-light text-text-dark font-sans leading-relaxed overflow-x-hidden"
      )}>
        <PaperTexture />
        {children}
      </body>
    </html>
  );
}
