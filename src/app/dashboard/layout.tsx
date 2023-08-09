import type { Metadata } from 'next'

import { PageLayout } from '../components/layouts'
import { DashboardNav } from '../components/navigations'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Portrait App',
//   description: 'Generates portraits from images',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageLayout>
        <DashboardNav />
        {children}
      </PageLayout>
    </>
  )
}
