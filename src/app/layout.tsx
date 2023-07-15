/* NPM Packages; Google Font */
import { Inter, IBM_Plex_Sans } from 'next/font/google'

/* Utilities, mainly react contexts */
import { AuthProvider } from '@/utils/contexts/Auth'
import { ModalProvider } from '@/utils/contexts/Modal'

/* Global CSS */
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const ibm = IBM_Plex_Sans({ weight: ['100', '200', '300', '400', '500', '600', '700' ], subsets: ['greek'], variable: "--mainFont"})

/* HEAD Meta data for SEO */
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${ibm.variable} font-sans`}>
        <AuthProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </AuthProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  )
}