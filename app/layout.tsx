import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import type { Metadata } from "next";

import { outfit, taviraj } from "@/lib/fonts";

import Navbar from "@/components/navbar/navbar";

import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SessionProvider from "@/components/providers/session-provider";

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
    <SessionProvider>
      <html
        lang="en"
        className={`${outfit.variable} ${taviraj.variable} no-scrollbar`}
        suppressHydrationWarning
      >
        <body className={`font-sans antialiased`}>
          <ThemeProvider enableSystem disableTransitionOnChange>
            <Navbar />
            <main className="container mx-auto p-4 md:p-6">
              {children}
              <ToastContainer position="bottom-center" />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
