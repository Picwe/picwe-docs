import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import ThemeLogo from '@/components/ThemeLogo'
import { Analytics } from '@vercel/analytics/next'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | PicWe',
    default: 'PicWe',
  },
  description: '',
}

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = <Navbar logo={<ThemeLogo lightSrc="/logo-light-use.png" darkSrc="/logo-dark-use.png" alt="Logo" width={100} height={100} />} />

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let pageMap: any[] = []
  try {
    const result = await getPageMap()
    pageMap = Array.isArray(result) ? result : []
  } catch (error) {
    console.error('Error getting pageMap:', error)
    pageMap = []
  }
  
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/Picwe/picwe-docs/tree/main"
          sidebar={{
            defaultMenuCollapseLevel: 1, // 只展开第一级，子目录默认收起
          }}
          // footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}
