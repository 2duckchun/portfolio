import { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import { InnerCard } from '../../shared/ui/inner-card'
import Image from 'next/image'
import { Card } from '../../shared'
interface SkillSetContainerProps extends HTMLAttributes<HTMLDivElement> {}

const mockData = [
  {
    imageSrc: '/images/skill/nextjs.png',
    imageAlt: '넥스트js',
  },
  {
    imageSrc: '/images/skill/react.png',
    imageAlt: '리액트',
  },
  {
    imageSrc: '/images/skill/html-js-css.png',
    imageAlt: 'html, js, css',
  },
  {
    imageSrc: '/images/skill/docker.svg',
    imageAlt: '도커',
  },
  {
    imageSrc: '/images/skill/firebase.svg',
    imageAlt: '파이어베이스',
  },
  {
    imageSrc: '/images/skill/zustand.png',
    imageAlt: '주스탠드',
  },
  {
    imageSrc: '/images/skill/tailwind.png',
    imageAlt: '테일윈드',
  },
  {
    imageSrc: '/images/skill/react-query.svg',
    imageAlt: '리액트쿼리',
  },
  {
    imageSrc: '/images/skill/sql.png',
    imageAlt: '리액트쿼리',
  },
  {
    imageSrc: '/images/skill/github.svg',
    imageAlt: '리액트쿼리',
  },
]

const SkillSetContainer: FunctionComponent<SkillSetContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <InnerCard title="Skills" description="">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-wrap md:gap-5">
        {mockData.map((el, idx) => {
          return (
            <SkillSetImageCard
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
  // TODO: 모달기능 추가 예정
}

const SkillSetImageCard = ({ imageAlt, imageSrc }: SkillSetImageCardProps) => {
  return (
    <Card className="flex max-h-[100px] max-w-[150px] cursor-pointer items-center justify-center p-2 shadow-md transition hover:scale-125 md:max-h-[200px] md:max-w-[300px] md:p-8">
      <Image
        unoptimized
        alt={imageAlt}
        src={imageSrc}
        width={0}
        height={0}
        style={{
          maxWidth: '100px',
          width: '100%',
          maxHeight: '100px',
          height: 'auto',
        }}
      />
    </Card>
  )
}
