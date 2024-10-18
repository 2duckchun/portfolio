import { FunctionComponent, HTMLAttributes } from 'react'
import { useTypingEffect } from '../../shared'
interface BgTypingContainerProps extends HTMLAttributes<HTMLDivElement> {}

const BgTypingContainer: FunctionComponent<BgTypingContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <section className="h-[300px] bg-[url('/images/cup-of-coffee.jpg')] bg-cover">
      <div className="flex h-full grow items-center justify-center text-2xl md:text-3xl">
        <TypingAminationArea />
      </div>
    </section>
  )
}

const TypingAminationArea = () => {
  const { word } = useTypingEffect(
    [
      '코드를 깔끔하게 짜는',
      '협업하기 편한',
      '끊임없이 발전하는',
      '조직을 위해 일하는'
    ],
    130,
    20
  )
  return (
    <div className="w-full text-center text-white">
      <p className="h-[40px]">
        <span className="font-semibold  text-blue-100">{word}</span> 개발자
      </p>
      <p>김태수의 포트폴리오입니다.</p>
    </div>
  )
}

export { BgTypingContainer }
