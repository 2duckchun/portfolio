'use client'

import { FunctionComponent, HTMLAttributes } from 'react'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  useIsMounted,
  useSkillModalStore,
} from '@/src/layers/shared'
interface AboutDetailSkillModalProps extends HTMLAttributes<HTMLDivElement> {}

const AboutDetailSkillModal: FunctionComponent<AboutDetailSkillModalProps> = ({
  className,
}) => {
  const {
    modalData: { isOpen, type },
    toggle,
  } = useSkillModalStore()

  const isMounted = useIsMounted()

  if (!isMounted) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent forceMount>
        <DialogHeader className="items-center justify-center font-black-han-sans text-2xl">
          {type}
        </DialogHeader>
        <DialogDescription>{type}</DialogDescription>
        <DialogFooter>
          <DialogClose className="w-full">
            <Button className="w-full">닫기</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { AboutDetailSkillModal }
