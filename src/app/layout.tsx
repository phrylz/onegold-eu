import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OneGold — Gold and Silver Simplified",
  description:
    "OneGold offers direct ownership of gold, silver, and platinum stored in secure Swiss vaults. Buy Switzerland Gold at Spot with promo code GOLD20.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} h-full`}>
      <body className="min-h-full bg-white text-white antialiased">
        {children}
      </body>
    </html>
  );
}
