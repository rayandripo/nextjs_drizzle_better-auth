import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "sonner";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Flavors&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-quicksand">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
