import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

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
          <LinkButton href="/">main</LinkButton>
        </li>
        <li>
          <LinkButton href="/dashboard">dashboard</LinkButton>
        </li>
        <li>
          <LinkButton href="/generate">generate</LinkButton>
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

export const DashboardNav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-3">
        <li>
          <LinkButton href="/">main</LinkButton>
        </li>
        <li>
          <LinkButton href="/dashboard">dashboard</LinkButton>
        </li>
        <li>
          <LinkButton href="/generate">generate</LinkButton>
        </li>
      </ul>
    </nav>
  )
}
