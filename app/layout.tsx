import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/navigation/sidebar'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Salad Maker',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <div className='bg-gray flex h-screen w-screen gap-x-10 overflow-hidden'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
