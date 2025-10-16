import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simon Guo',
  description: 'Frontend engineer and engineering director. Author of React Suite.',
  keywords: ['Simon Guo', 'React Suite', 'Frontend Engineer', 'TypeScript', 'React'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/zpix.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6K563Z6ZXD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6K563Z6ZXD');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
