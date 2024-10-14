import { FunctionComponent, PropsWithChildren } from 'react'
import { Header } from '@/src/layers/widgets'
import { Footer } from '@/src/layers/widgets/layout/ui/footer'

interface layoutProps extends PropsWithChildren {}

const layout: FunctionComponent<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default layout
