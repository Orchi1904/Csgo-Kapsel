import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "../Context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSGO-Kapsel",
  description: "Get price information for all CS major sticker capsules",
};

// This layout is needed because of the global context 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} layout`}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
