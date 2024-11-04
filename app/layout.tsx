import "./globals.css";
import type { Metadata } from "next";

import { Outfit } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

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
          <main className="container h-16 mx-auto flex items-center justify-between">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
