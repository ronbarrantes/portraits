import {
  CameraIcon,
  DashboardIcon,
  ExitIcon,
  LightningBoltIcon,
} from '@radix-ui/react-icons'

const iconMap = {
  photos: CameraIcon,
  dashboard: DashboardIcon,
  generate: LightningBoltIcon,
  logout: ExitIcon,
} as const

type IconName = keyof typeof iconMap
interface IconProps {
  name: IconName
  className?: string
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconToRender = iconMap[name]
  return <IconToRender {...props} />
}
