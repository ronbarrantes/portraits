'use client'
import React, { useEffect, useState } from 'react'

function useTailwindVisibility(className: string) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function checkVisibility() {
      const element = document.querySelector(className)
      const newIsVisible = element
        ? window.getComputedStyle(element).getPropertyValue('display') !==
          'none'
        : false
      setIsVisible(newIsVisible)
    }

    checkVisibility() // Initial check

    window.addEventListener('resize', checkVisibility)

    return () => {
      window.removeEventListener('resize', checkVisibility)
    }
  }, [className])

  return isVisible
}

export const RandomComponent = () => {
  const isVisible = useTailwindVisibility('lg:trigger-class')

  useEffect(() => {
    if (typeof window !== 'undefined' && isVisible) {
      console.log('LG breakpoint reached!')
      // Your code here
    }
  }, [isVisible])

  return <div className="lg:trigger-class">{/* Your component content */}</div>
}
