'use client'

import { FunctionComponent, HTMLAttributes } from 'react'
import { InnerCard } from '../../shared/ui/inner-card'
import Image from 'next/image'
import { Button, Card, useSkillModalStore } from '../../shared'
interface SkillSetContainerProps extends HTMLAttributes<HTMLDivElement> {}

type mockData = {
  imageSrc: string
  imageAlt: string
  skillKey: SkillSet
}[]

const mockData: mockData = [
  {
    imageSrc: '/images/skill/html-js-css.png',
    imageAlt: 'html-js-css',
    skillKey: 'html-js-css',
  },
  {
    imageSrc: '/images/skill/nextjs.png',
    imageAlt: '넥스트js',
    skillKey: 'nextjs',
  },
  {
    imageSrc: '/images/skill/react.png',
    imageAlt: '리액트',
    skillKey: 'react',
  },
  {
    imageSrc: '/images/skill/vue.svg',
    imageAlt: '뷰',
    skillKey: 'vue',
  },
  {
    imageSrc: '/images/skill/tailwind.png',
    imageAlt: '테일윈드',
    skillKey: 'tailwind',
  },
  {
    imageSrc: '/images/skill/react-query.svg',
    imageAlt: '리액트 쿼리',
    skillKey: 'react-query',
  },
  {
    imageSrc: '/images/skill/zustand.png',
    imageAlt: '주스탠드',
    skillKey: 'zustand',
  },
  {
    imageSrc: '/images/skill/nestjs.svg',
    imageAlt: 'Nextjs',
    skillKey: 'nestjs',
  },
  {
    imageSrc: '/images/skill/github.svg',
    imageAlt: 'github',
    skillKey: 'github',
  },
  {
    imageSrc: '/images/skill/docker.svg',
    imageAlt: 'docker',
    skillKey: 'docker',
  },
]

const SkillSetContainer: FunctionComponent<SkillSetContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <InnerCard cardTitle={<h3>Skills</h3>} cardDescription="">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {mockData.map((el) => {
          return (
            <SkillSetImageCard
              type={el.skillKey}
              key={el.imageAlt}
              imageSrc={el.imageSrc}
              imageAlt={el.imageAlt}
            />
          )
        })}
      </div>
    </InnerCard>
  )
}

export { SkillSetContainer }

interface SkillSetImageCardProps {
  imageSrc: string
  imageAlt: string
  type: SkillSet
  // TODO: 모달기능 추가 예정
}

const SkillSetImageCard = ({
  imageAlt,
  imageSrc,
  type,
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
            height: 'auto',
          }}
        />
        <span className="sr-only">{imageAlt}</span>
      </Button>
    </Card>
  )
}
