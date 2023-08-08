import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'
import classNames from 'classnames'

import { Logo } from '@/ui/Logo'

interface PageLayoutProps {
  children: React.ReactNode
}

const LinkButton = ({ href, children }: { href: string; children: string }) => (
  <Link
    href={href}
    className="pb-0.5 hover:border-b-2 border-transparent hover:border-violet-500 hover:text-violet-500 disabled:!bg-rose-900"
    // disabled:!bg-rose-900
  >
    {children}
  </Link>
)

export const MainNav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-3">
        <li>
          <LinkButton href="/">Dashboard</LinkButton>
        </li>
        <li>
          <LinkButton href="/generate">Generate</LinkButton>
        </li>
      </ul>
      <div className="ml-3 w-9 h-9">
        <UserButton
          appearance={{
            elements: {
              avatarBox: 'w-9 h-9', // THIS IS HOW TO CONTROL THE SIZE
            },
          }}
          afterSignOutUrl="/"
        />
      </div>
    </nav>
  )
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="flex items-center justify-between w-full p-4 sm:max-w-6xl">
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
