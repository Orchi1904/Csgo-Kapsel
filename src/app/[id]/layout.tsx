import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "../../Context/store";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import HeroSection from "@/components/HeroSection/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSGO-Kapsel",
  description: "Get price information for all CS major sticker capsules",
};

// Gute Seite für Loading: https://blog.logrocket.com/create-loading-component-next-js-13-react-suspense/
// Klappt, nur das Auswählen anderer Währungen klappt nun nicht mehr...
// Außerdem klappt das Loading mit dem Spinner nicht, also er bewegt sich dann nicht mehr..
// Nochmal machen und genau schauen, wie ich das jetzt hinkrigen kann

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
            accentColor="var(--red)"
            endLineBgImg="'/images/backgrounds/endLineRedBG.svg'"
          >
            {children}
          </PageWrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
