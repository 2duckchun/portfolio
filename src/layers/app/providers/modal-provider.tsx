import { FunctionComponent, HTMLAttributes } from 'react'
import { AboutDetailSkillModal } from '../../widgets'
interface ModalProviderProps extends HTMLAttributes<HTMLDivElement> {}

const ModalProvider: FunctionComponent<ModalProviderProps> = ({ children }) => {
  return (
    <>
      <AboutDetailSkillModal />
    </>
  )
}

export { ModalProvider }
