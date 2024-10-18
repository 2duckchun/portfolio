import { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import { SwipeImageData } from '../entities/project/type'
import { cn, InnerCard, PaginationSwiper } from '../shared'
import { ProjectExplanationDiv } from './project-explanation-div'
import { ProjectExplanationParagraph } from './project-explanation-paragraph'

interface ProjectExplanationHorizontalBoxProps
  extends HTMLAttributes<HTMLDivElement> {
  projectImageList?: SwipeImageData
  projectImage?: ReactNode
  isHorizontal?: boolean
  title: string
  subTitle: string
  completedDevDuration: string
  role: string
  stack: string[]
  mainImplementation: ReactNode
  retrospective: string
}

export const ProjectExplanationHorizontalCard: FunctionComponent<
  ProjectExplanationHorizontalBoxProps
> = ({
  className,
  title,
  subTitle,
  projectImageList,
  projectImage,
  isHorizontal,
  completedDevDuration,
  role,
  stack,
  mainImplementation,
  retrospective,
  ...props
}) => {
  return (
    <InnerCard
      className="w-full md:w-[85%]"
      isNested
      cardTitle={<h4 className="text-xl">{title}</h4>}
      cardDescription={subTitle}
    >
      <div
        className={cn(
          'grid grid-cols-1 items-center md:flex md:justify-evenly'
        )}
      >
        <div className="flex justify-center rounded-xl">
          {projectImage ? (
            projectImage
          ) : (
            <PaginationSwiper
              className="h-full max-w-[350px] px-2"
              swipeImageData={projectImageList!}
            />
          )}
        </div>
        <div className="flex h-full flex-col justify-center rounded-br-lg px-3 py-5 md:max-w-[400px]">
          <ProjectExplanationParagraph
            title={'개발 기간'}
            description={completedDevDuration}
          />
          <ProjectExplanationParagraph title={'역할'} description={role} />
          <ProjectExplanationParagraph
            title={'기술 스택'}
            description={stack.join(', ')}
          />
          <ProjectExplanationDiv
            title={'주요 구현'}
            description={mainImplementation}
          />
          <ProjectExplanationParagraph
            title={'회고록'}
            description={retrospective}
          />
        </div>
      </div>
    </InnerCard>
  )
}
