import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'
import classNames from 'classnames'

import { Logo } from '@/ui/Logo'
import { MainNav } from './Nav'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="flex items-center justify-between w-full p-4 mb-5 border-b-2 border-green-400 sm:max-w-6xl">
        <Link href="/" aria-label="Portrait app logo">
          <Logo />
        </Link>
        <MainNav />
      </header>
      <main className="flex flex-col items-center justify-between w-full gap-5 p-1 sm:max-w-6xl">
        {children}
      </main>
    </div>
  )
}
