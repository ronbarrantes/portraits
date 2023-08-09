import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

const LinkButton = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    className="pb-0.5 hover:border-b-2 border-transparent hover:border-violet-500 hover:text-violet-500 disabled:!bg-rose-900"
    // disabled:!bg-rose-900
  >
    {children}
  </Link>
)

type NavItem = {
  href: string
  name: string | React.ReactNode
}
interface NavProps {
  navItems: NavItem[]
  children?: React.ReactNode
}

export const mainNavItems: NavItem[] = [
  {
    href: '/',
    name: 'main',
  },
  {
    href: '/dashboard',
    name: 'dashboard',
  },
  {
    href: '/generate',
    name: 'generate',
  },
]

export const dashboardNavItems: NavItem[] = [
  {
    href: '/dashboard',
    name: 'uploaded',
  },
  {
    href: '/dashboard/generated',
    name: 'generate',
  },
]

export const Nav = ({ navItems, children }: NavProps) => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-3">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <LinkButton href={item.href}>{item.name}</LinkButton>
          </li>
        ))}
      </ul>

      {children && <div className="ml-3 w-9 h-9">{children}</div>}
    </nav>
  )
}

export const MainNav = ({ children }: { children: React.ReactNode }) => (
  <Nav navItems={mainNavItems}>{children}</Nav>
)

export const DashboardNav = () => <Nav navItems={dashboardNavItems} />
