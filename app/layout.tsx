import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gomaily - Send Personalized Emails from Google Sheets",
  description:
    "Gomaily is a powerful YAMM alternative for fast, personalized email campaigns. Send personalized emails directly from Google Sheets using Gmail.",
  keywords: "mail merge, Gmail, Google Sheets, email marketing, YAMM alternative, personalized emails",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="J2LTycitkfG5snmcnyfLLodGAvdItHJFUQjMfm5Cu3Y" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
