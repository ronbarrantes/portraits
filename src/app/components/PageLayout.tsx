import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

interface PageLayoutProps {
  children: React.ReactNode
}

export const MainNav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-2">
        <li>
          <Link className="p-3 py-1 border border-white rounded-md" href="/">
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            className="p-3 py-1 border border-white rounded-md"
            href="/generate"
          >
            Generate
          </Link>
        </li>
      </ul>
      <div className="ml-3 w-9 h-9 ">
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
      <header className="flex items-center justify-between w-full p-1 sm:max-w-6xl">
        <Link href="/">Portrait app</Link>
        <MainNav />
      </header>
      <main className="flex flex-col items-center justify-between w-full gap-5 p-1 border border-red-500 sm:max-w-6xl">
        {children}
      </main>
    </div>
  )
}
