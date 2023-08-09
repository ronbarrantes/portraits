import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

import { mainNavItems } from '@/app/client/navigation'
import { Logo } from '@/ui/Logo'
import { NavBar } from '@/ui/NavBar'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="flex items-center justify-between w-full p-4 mb-5 sm:max-w-6xl">
        <Link href="/" aria-label="Portrait app logo">
          <Logo />
        </Link>
        <NavBar navItems={mainNavItems}>
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-9 h-9', // THIS IS HOW TO CONTROL THE SIZE
              },
            }}
            afterSignOutUrl="/"
          />
        </NavBar>
      </header>
      <main className="flex flex-col items-center justify-between w-full gap-5 p-1 sm:max-w-6xl">
        {children}
      </main>
    </div>
  )
}
