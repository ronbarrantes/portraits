import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

import { Logo } from '@ui'
import { MainNavBar } from '@ui'
import { mainNavItems } from '@/app/client/navigation'

interface PageLayoutProps {
  children: React.ReactNode
}

const MainNav = () => {
  return (
    <nav className="flex  items-center flex-col justify-between w-20 p-4 mb-5 lg:w-1/6">
      <Link href="/" aria-label="Portrait app logo">
        <Logo />
      </Link>
      <MainNavBar navItems={mainNavItems} />
      <button>Log Out</button>
    </nav>
  )
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex items-center min-h-screen">
      <MainNav />
      <div>
        <header className="flex flex-col items-center justify-between w-20 p-4 mb-5 border border-red-500 lg:w-1/6">
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-9 h-9', // THIS IS HOW TO CONTROL THE SIZE
              },
            }}
            afterSignOutUrl="/"
          />
        </header>
        <main className="flex flex-col items-center justify-between w-full gap-5 p-1 sm:max-w-6xl">
          {children}
        </main>
      </div>
    </div>
  )
}
