import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

import { IconName } from './Icon'

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

export type NavItem = {
  href: string
  name: string | React.ReactNode
  icon?: IconName
}
interface NavProps {
  navItems: NavItem[]
  children?: React.ReactNode
}

export const NavBar = ({ navItems, children }: NavProps) => {
  return (
    <nav className="flex flex-col items-center border border-green-300">
      <ul className="flex flex-col items-center gap-3">
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