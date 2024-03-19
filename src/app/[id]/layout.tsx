import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "../../Context/store";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

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
        <PageWrapper
          accentColor="var(--red)"
          endLineBgImg="'/images/backgrounds/endLineRedBG.svg'"
        >
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
