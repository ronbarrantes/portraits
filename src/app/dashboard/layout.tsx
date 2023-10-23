import type { Metadata } from 'next'

import { NavBar } from '@ui'
import { PageLayout } from '@components/layouts'
import { dashboardNavItems } from '../client/navigation'

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
      <PageLayout title='Dashboard layout'>
        <NavBar navItems={dashboardNavItems} />
        {children}
      </PageLayout>
    </>
  )
}
