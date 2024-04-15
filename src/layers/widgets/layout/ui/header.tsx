'use client'

import { cn } from '@/src/layers/shared/lib/utils'
import { FunctionComponent, HTMLAttributes, useEffect, useState } from 'react'
interface headerProps extends HTMLAttributes<HTMLDivElement> {}

const TOP_BAR_HEIGHT = 66

const Header: FunctionComponent<headerProps> = ({ className, ...props }) => {
  const [isBgColor, setIsBgColor] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_BAR_HEIGHT) {
        setIsBgColor(true)
      } else {
        setIsBgColor(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full h-[50px] z-50 bg-transparent transition duration-700 text-white',
        isBgColor ? 'bg-black/90 text-white' : '',
        className,
      )}
      {...props}
    >
      <div className="m-auto flex h-full w-[800px] items-center text-2xl font-semibold">
        2DC
      </div>
    </header>
  )
}

export { Header }
