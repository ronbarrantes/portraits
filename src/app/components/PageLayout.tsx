import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="flex items-center justify-between w-full p-1 sm:max-w-6xl">
        <span>Portrait app</span>
        <nav className="flex items-center">
          <ul className="flex items-center gap-2">
            <li>
              <Link
                className="p-3 py-1 border border-white rounded-md"
                href="/"
              >
                Generated
              </Link>
            </li>

            <li>
              <Link
                className="p-3 py-1 border border-white rounded-md"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="ml-3 w-9 h-9 ">
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>
      </header>
      <main className="flex items-center justify-between w-full p-1 border border-red-500 sm:max-w-6xl">
        {children}
      </main>
    </div>
  )
}
