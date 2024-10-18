'use client'

import { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import Image from 'next/image'
import { SkillDataList } from '../../entities'
import { Button, Card, useSkillModalStore } from '../../shared'
import { InnerCard } from '../../shared/ui/inner-card'
interface SkillSetContainerProps extends HTMLAttributes<HTMLDivElement> {}

const SkillSetContainer: FunctionComponent<SkillSetContainerProps> = () => {
  return (
    <section
      id="skills"
      className="h-fit w-full bg-gray-200/50 px-3 py-5 lg:p-10"
    >
      <InnerCard
        cardTitle={<h3>Skills</h3>}
        cardDescription="자바스크립트 생태계를 두루 다룰 수 있습니다."
      >
        <SkillSetGridContainer>
          {SkillDataList.map((el) => {
            return (
              <SkillSetImageCard
                type={el.skillKey}
                key={el.skillKey}
                imageSrc={el.imageSrc}
                imageAlt={el.imageAlt}
              />
            )
          })}
        </SkillSetGridContainer>
      </InnerCard>
    </section>
  )
}

// Tailwind 스타일이 너무 길어져 별도 컴포넌트로 분리함.
const SkillSetGridContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-2 gap-3 rounded  p-5 shadow-md lg:grid-cols-5">
      {children}
    </div>
  )
}

export { SkillSetContainer }

interface SkillSetImageCardProps {
  imageSrc: string
  imageAlt: string
  type: SkillSet
}

const SkillSetImageCard = ({
  imageAlt,
  imageSrc,
  type
}: SkillSetImageCardProps) => {
  const { open } = useSkillModalStore()

  return (
    <Card
      onClick={() => open(type)}
      className="flex min-h-[150px] w-full cursor-pointer items-center justify-center p-2 shadow-md transition hover:scale-125"
    >
      <Button className="size-fit" variant={'tag'}>
        <Image
          unoptimized
          alt={imageAlt}
          src={imageSrc}
          width={0}
          height={0}
          style={{
            width: '100%',
            maxHeight: '150px',
            height: 'auto'
          }}
        />
        <span className="sr-only">{imageAlt}</span>
      </Button>
    </Card>
  )
}
