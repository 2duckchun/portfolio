'use client'

import { Button } from '@/src/layers/shared'
import { cn } from '@/src/layers/shared/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { FunctionComponent, HTMLAttributes, useEffect, useState } from 'react'
interface headerProps extends HTMLAttributes<HTMLDivElement> {}

const TOP_BAR_HEIGHT = 20

const Header: FunctionComponent<headerProps> = ({ className, ...props }) => {
  const [isBgColor, setIsBgColor] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const MenuIcon = isOpen ? X : Menu
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
        'fixed top-0 w-full h-[50px] z-40 bg-transparent transition duration-700 justify-between md:justify-evenly flex text-white',
        isBgColor ? 'bg-black/90 text-white' : '',
        className,
      )}
      {...props}
    >
      <Button
        variant={'ghost'}
        className="flex h-full items-center px-4 py-0 text-2xl font-semibold hover:bg-white/40"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        2DC
      </Button>
      <div className="hidden items-center justify-evenly gap-5 md:flex">
        <Link href={'#about-me'}>
          <Button className={cn('bg-transparent')}>About Me</Button>
        </Link>
        <Link href={'#skills'}>
          <Button className={cn('bg-transparent')}>Skills</Button>
        </Link>
        <Link href={'#career'}>
          <Button className={cn('bg-transparent')}>Career</Button>
        </Link>
        <Link href={'#projects'}>
          <Button className={cn('bg-transparent')}>Projects</Button>
        </Link>
        <Link href={'#peer-review'}>
          <Button className={cn('bg-transparent')}>Peer Review</Button>
        </Link>
      </div>
      <Button
        variant={'ghost'}
        className="h-full md:hidden"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen)
        }}
        aria-label="메뉴"
      >
        <MenuIcon />
      </Button>
      <div
        className={cn(
          'cursor-pointer fixed bg-black/90 z-50 w-full mt-[50px] px-[10px] py-[10px] text-[14px] [&>*]:py-[5px] select-none',
          isOpen ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col">
          <Link href={'#about-me'}>
            <Button className={cn('w-full bg-transparent')}>About Me</Button>
          </Link>
          <Link href={'#skills'}>
            <Button className={cn('w-full bg-transparent')}>Skills</Button>
          </Link>
          <Link href={'#career'}>
            <Button className={cn('w-full bg-transparent')}>Career</Button>
          </Link>
          <Link href={'#projects'}>
            <Button className={cn('w-full bg-transparent')}>Projects</Button>
          </Link>
          <Link href={'#peer-review'}>
            <Button className={cn('w-full bg-transparent')}>Peer Review</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Header }
