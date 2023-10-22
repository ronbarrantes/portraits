import { NavItem } from '@ui'
// import { FaceIcon, CameraIcon ImageIcon, SunIcon, DashboardIcon, LightningBoltIcon } from '@radix-ui/react-icons'

export const mainNavItems: NavItem[] = [
  {
    href: '/',
    name: 'Dashboard',
    icon: 'dashboard',
  },
  {
    href: '/generate',
    name: 'Generate',
    icon: 'generate',
  },
  {
    href: '/dashboard/generated',
    name: 'Get Generated',
    icon: 'generate',
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
