import type { Metadata } from "next";
import { DM_Sans, Allura } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Iris Xie - Portfolio",
  description:
    "Strategic marketer and creative problem-solver with a passion for building brands that resonate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${allura.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
