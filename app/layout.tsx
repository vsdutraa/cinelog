import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import type { Metadata } from "next";

import { Outfit } from "next/font/google";

import Navbar from "@/components/navbar/navbar";

import SessionWrapper from "@/components/auth/session-wrapper";
import { ToastContainer } from "react-toastify";

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
    <SessionWrapper>
      <html lang="en">
        <body className={font.className}>
          <Navbar />
          <main className="container mx-auto px-4 md:px-6 py-4 md:py-6">
            {children}
            <ToastContainer position="bottom-center" />
          </main>
        </body>
      </html>
    </SessionWrapper>
  );
}
