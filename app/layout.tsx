import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "../node_modules/@mdi/font/css/materialdesignicons.min.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zetta Survey",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
