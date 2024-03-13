import SEO from '@/shared/SEO'
import '@/styles/globals.css'
import GlobalStyles from '@/styles/GlobalStyles'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <SEO title="Next Books" description="" image="" />
      <body>
        <GlobalStyles />
        <main>{children}</main>
      </body>
    </html>
  )
}
