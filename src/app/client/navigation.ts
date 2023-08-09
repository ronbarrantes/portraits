import { NavItem } from '@ui'

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
