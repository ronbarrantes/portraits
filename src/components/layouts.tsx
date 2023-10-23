import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

import { Logo } from '@ui'
import { MainNavBar } from '@ui'
import { mainNavItems } from '@/app/client/navigation'

interface PageLayoutProps {
  title: string
  children: React.ReactNode
}

const MainNav = () => {
  return (
    <nav className="flex flex-col items-center p-4 border-r w-52 min-w-20 border-violet-800">
      <Link href="/" aria-label="Portrait app logo">
        <Logo className="m-auto" />
        <hr className="flex w-20 h-0.5 my-8 border-0 bg-violet-800 " />
        {/* <hr className="w-64 h-1 my-8 bg-red-200 dark:bg-red-700" /> */}
      </Link>
      <MainNavBar navItems={mainNavItems} />
    </nav>
  )
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <MainNav />
      <div className="w-full">
        <header className="flex items-center justify-between w-full p-4 mb-5 border-b border-violet-800">
          <h1 className="text-2xl">{title}</h1>
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-9 h-9', // THIS IS HOW TO CONTROL THE SIZE
              },
            }}
            afterSignOutUrl="/"
          />
        </header>
        <main className="flex flex-col items-center justify-between w-full gap-5 p-1">
          {children}
        </main>
      </div>
    </div>
  )
}
