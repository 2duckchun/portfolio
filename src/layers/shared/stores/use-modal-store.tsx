import { create } from 'zustand'

type ModalStore = {
  isOpen: boolean
  toggle: (isOpen: boolean) => void
  open: () => void
  close: () => void
}

type SkillModalStore<T> = Pick<ModalStore, 'toggle' | 'close'> & {
  modalData: {
    isOpen: boolean
    type: T
  }
  open: (type: SkillSet) => void
}

export const useSkillModalStore = create<SkillModalStore<SkillSet>>((set) => ({
  modalData: {
    isOpen: false,
    type: 'nextjs',
  },
  toggle: (isOpen: boolean) =>
    set((state) => ({ modalData: { ...state.modalData, isOpen } })),
  open: (type: SkillSet) => set({ modalData: { isOpen: true, type: type } }),
  close: () =>
    set((state) => ({
      modalData: { ...state.modalData, isOpen: false },
    })),
}))
