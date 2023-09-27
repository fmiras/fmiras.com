import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ComputerScript } from './computer'

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Federico Miras`,
  description:
    'Federico Miras is founder of Pluggy, a software engineer, early-stage startup angel investor and advisor.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={[jetbrains.className, 'flex justify-center'].join(' ')}>
        {children}
        <ComputerScript />
      </body>
    </html>
  )
}
