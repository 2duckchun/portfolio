import { FunctionComponent, HTMLAttributes } from 'react'
import { useTypingEffect } from '../../shared'
interface BgTypingContainerProps extends HTMLAttributes<HTMLDivElement> {}

const BgTypingContainer: FunctionComponent<BgTypingContainerProps> = ({
  className,
  ...props
}) => {
  const { word } = useTypingEffect(
    [
      '협업하기 편한',
      '끊임없이 발전하는',
      '조직을 위해 일하는',
      '기술적 호기심이 왕성한',
    ],
    130,
    20,
  )

  return (
    <section className="h-[300px] bg-[url('/images/cup-of-coffee.jpg')] bg-cover">
      <div className="flex h-full grow items-center justify-center text-2xl md:text-3xl">
        <div className="w-full text-center text-white">
          <p className="h-[40px]">
            <span className="font-semibold  text-blue-100">{word}</span> 개발자
          </p>
          <p>김태수의 포트폴리오입니다.</p>
        </div>
      </div>
    </section>
  )
}

export { BgTypingContainer }
