'use client'
import { ReactNode } from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import classNames from 'classnames'

interface TooltipTriggerProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

interface TooltipContentProps {
  children: React.ReactNode
  className?: string
  side?: TooltipPrimitive.TooltipContentProps['side']
  sideOffset?: TooltipPrimitive.TooltipContentProps['sideOffset']
}

interface TooltipProps {
  children: ReactNode
  delay?: number
}

export const TooltipTrigger = ({
  children,
  className,
  asChild,
}: TooltipTriggerProps) => {
  return (
    <TooltipPrimitive.Trigger className={className} asChild={asChild}>
      {children}
    </TooltipPrimitive.Trigger>
  )
}

export const TooltipContent = ({
  children,
  className,
  sideOffset = 5,
  side = 'top',
}: TooltipContentProps) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={classNames('rounded-lg p-3 py-1', className)}
        side={side}
        sideOffset={sideOffset}
      >
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export const TooltipArrow = ({ className }: { className?: string }) => (
  <TooltipPrimitive.Arrow className={className} />
)

export const Tooltip = ({ children, delay = 0 }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider delayDuration={delay}>
      <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.Arrow = TooltipArrow
Tooltip.Content = TooltipContent
Tooltip.Trigger = TooltipTrigger
