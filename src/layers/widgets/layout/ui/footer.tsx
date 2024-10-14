import { FunctionComponent, HTMLAttributes } from 'react'
interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: FunctionComponent<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className="flex h-[200px] items-center justify-center bg-black/90 text-white">
      © 2024. KIM TAE SOO. All rights reserved.
    </footer>
  )
}

export { Footer }
