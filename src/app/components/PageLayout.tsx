import { UserButton } from '@clerk/nextjs'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24 border border-green-500">
      <header>
        <span>Portrait app</span>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">Generated</a>
              </li>

              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            </ul>
          </nav>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
