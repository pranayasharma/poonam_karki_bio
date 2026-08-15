import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Poonam Karki - Ph.D. Student in Soil Microbial Ecology',
  description:
    'Ph.D. student in Biology at Saint Louis University studying soil microbial ecology, microbial nitrogen cycling, soil health, and sustainable agriculture.',
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