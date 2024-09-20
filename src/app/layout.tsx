import type { Metadata } from "next";
import "./globals.css";
import {Manrope} from "next/font/google"
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const manrope = Manrope({subsets:['latin'], variable: "--font-manrope"})
export const metadata: Metadata = {
  title: "khaLo - Order tasty food online in Bihar",
  description: "Order food online from khaLo restaurant and get it delivered to your doorsteps. Currently available in Muzaffarpur, Samastipur, Begusarai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', manrope.variable)}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
