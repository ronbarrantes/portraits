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
    <nav className="flex flex-col items-center w-32 p-4 border border-pink-500 min-w-20">
      <Link href="/" aria-label="Portrait app logo">
      <Logo className='m-auto border-red-500' />
      <hr className='flex w-20 my-10'/>
      </Link>
      <MainNavBar navItems={mainNavItems} />
    </nav>
  )
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen border border-purple-700">
      <MainNav />
      <div className='w-full border border-green-600'>
        <header className="flex items-center justify-between w-full p-4 mb-5 border border-red-500">
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
        <main className="flex flex-col items-center justify-between w-full gap-5 p-1 sm:max-w-6xl">
          {children}
        </main>
      </div>
    </div>
  )
}
