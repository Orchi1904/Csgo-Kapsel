import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "../../Context/store";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import HeroSection from "@/components/HeroSection/HeroSection";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSGO-Kapsel",
  description: "Get price information for all CS major sticker capsules",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} layout`}>
        <GlobalContextProvider>
          <PageWrapper
            accentColor="var(--blue)"
            endLineBgImg="/images/backgrounds/endLineBlueBG.svg"
          >
            <HeroSection />
            {children}
          </PageWrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
