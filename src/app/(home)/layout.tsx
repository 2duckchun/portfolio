import { FunctionComponent, PropsWithChildren } from 'react'
import { Header } from '@/src/layers/widgets'

interface layoutProps extends PropsWithChildren {}

const layout: FunctionComponent<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer className="flex h-[200px] items-center justify-center bg-black/90 text-white">
        © 2024. KIM TAE SOO. All rights reserved.
      </footer>
    </>
  )
}

export default layout
