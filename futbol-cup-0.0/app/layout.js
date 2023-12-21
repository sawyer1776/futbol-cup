import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Futbol Cup',
  description: 'See the latest scores from Futbol torunaments around the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <div className='h-20 ' />
        <nav className='fixed z-10 top-0 left-0 w-full justify-center items-center p-5 text-lg font-semibold flex bg-alt-800  border-b border-alt-600 ' >
          <ul className='flex gap-6'>
            <li><Link href={ "/tournament" }>Tournaments</Link></li>
            <li><Link href={ "/" }>Current Matches</Link></li>
          </ul>
        </nav>
        { children }</body>
    </html>
  )
}
