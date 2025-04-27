import './globals.css'
import type { Metadata } from 'next'
import { SWRConfig } from 'swr'
import { SignInModalProvider } from '@/components/SignInModalProvider'
import HeaderAuthControls from '@/components/HeaderAuthControls'

export const metadata: Metadata = {
  title: 'Next.js Template with Supabase Auth',
  description: 'A clean Next.js template with Supabase authentication',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SWRConfig 
          value={{
            revalidateOnFocus: false,
          }}
        >
          <SignInModalProvider>
            <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Next.js Template</h1>
                  </div>
                </div>
                <HeaderAuthControls />
              </div>
            </header>
            
            <div className="">
              {children}
            </div>
          </SignInModalProvider>
        </SWRConfig>
      </body>
    </html>
  )
}