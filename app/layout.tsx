import "./globals.css";
import type { Metadata } from "next";

import { Outfit } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/navbar";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Navbar />
          <main className="container mx-auto px-4 md:px-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
