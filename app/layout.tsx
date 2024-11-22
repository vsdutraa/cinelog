import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import type { Metadata } from "next";

import { Outfit } from "next/font/google";

import Navbar from "@/components/navbar/navbar";

import SessionWrapper from "@/components/auth/session-wrapper";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/theme/theme-provider";

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
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider enableSystem disableTransitionOnChange>
            <Navbar />
            <main className="container mx-auto p-4 md:p-6">
              {children}
              <ToastContainer position="bottom-center" />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
