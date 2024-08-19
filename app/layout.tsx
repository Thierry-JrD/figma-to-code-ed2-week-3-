import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tokena App",
  description: "This is a simplest crypto-money dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
