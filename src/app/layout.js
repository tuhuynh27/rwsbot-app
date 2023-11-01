import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RWS Bot',
  titleTemplate: '%s | Rakuten Web Search Bot',
  description: 'Simplify your Scrum activities and keep track of your system\'s status with real-time alerts using RWS Bot.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
