'use client'
import { useEffect, useState } from 'react'

// function useTailwindVisibility(className: string) {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     function checkVisibility() {
//       const element = document.querySelector(className)
//       const newIsVisible = element
//         ? window.getComputedStyle(element).getPropertyValue('display') !==
//           'none'
//         : false
//       setIsVisible(newIsVisible)
//     }

//     checkVisibility() // Initial check

//     window.addEventListener('resize', checkVisibility)

//     return () => {
//       window.removeEventListener('resize', checkVisibility)
//     }
//   }, [className])

//   return isVisible
// }

// import { useEffect, useState } from 'react';

const getWindowSize = () => {
  if (typeof window === 'undefined') {
    return 'xl'
  }

  const width = window.innerWidth

  if (width >= 1536) {
    return '2xl'
  } else if (width >= 1280) {
    return 'xl'
  } else if (width >= 1024) {
    return 'lg'
  } else if (width >= 768) {
    return 'md'
  } else {
    return 'sm'
  }
}

export function useWindowSize() {
  const [windowSizeName, setWindowSizeName] = useState(getWindowSize())
  // Get window size width

  useEffect(() => {
    function handleResize() {
      setWindowSizeName(getWindowSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSizeName
}
