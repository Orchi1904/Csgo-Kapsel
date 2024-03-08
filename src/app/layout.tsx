import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from '../Context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CSGO-Kapsel',
  description: 'Get price information for all CS major sticker capsules'
}

// Gute Seite für Loading: https://blog.logrocket.com/create-loading-component-next-js-13-react-suspense/
// Klappt, nur das Auswählen anderer Währungen klappt nun nicht mehr...
// Außerdem klappt das Loading mit dem Spinner nicht, also er bewegt sich dann nicht mehr..
// Nochmal machen und genau schauen, wie ich das jetzt hinkrigen kann
// Idee für das 8h laden problem: Playwright oder iwas anderes nutzen und über github actions alle 8h ein Mal die produktive Seite aufrufen

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} layout`}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
