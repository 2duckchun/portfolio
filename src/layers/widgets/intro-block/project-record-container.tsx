import { FunctionComponent, HTMLAttributes } from 'react'
import { InnerCard } from '../../shared'
import { PaginationSwiper } from '../../shared/ui/pagination-swiper'
import { DPLANIT_HOMEPAGE_SWIPE_DATA } from '../../entities'
interface ProjectRecordContainerProps extends HTMLAttributes<HTMLDivElement> {}

const ProjectRecordContainer: FunctionComponent<
  ProjectRecordContainerProps
> = ({ className, ...props }) => {
  return (
    <InnerCard
      cardTitle={<h3>Projects</h3>}
      cardDescription="그간 진행했던 프로젝트의 이력입니다."
    >
      <InnerCard
        isNested
        cardTitle={<h4 className="text-xl">디플래닛 홈페이지</h4>}
        cardDescription="자사 앱 홈페이지 개발"
      >
        <div className="grid min-h-[300px] grid-cols-1 gap-3 md:grid-cols-2">
          <div className="size-full rounded-xl ">
            <PaginationSwiper
              className="size-full px-2"
              swipeImageData={DPLANIT_HOMEPAGE_SWIPE_DATA}
            />
          </div>
          <div className="size-full">
            <div>
              <p>디플래닛 홈페이지</p>
              <p>기술 스택 : Next.js(App Router), swiper</p>
              <p>빠른 개발이 필요한 상황에 따라 일주일만에 구현 완료</p>
              <p>반응형 구현(데스크탑, 태블릿, 스마트폰)</p>
              <p>
                앱 다운로드 클릭 시 기기에 따른 대응 (QR, 앱스토어, 플레이스토어
                이동)
              </p>
              <p>
                lighthouse performance 91점, accessibility 95점, SEO 100점 달성
              </p>
              <p>링크</p>
            </div>
          </div>
        </div>
      </InnerCard>
      <InnerCard
        isNested
        cardTitle={<h4 className="text-xl">AI 난임리포트</h4>}
        cardDescription="자사 앱 서비스 AI 난임리포트 웹뷰 개발"
      >
        <div className="flex size-full h-[200px] gap-3">
          <div className="size-full bg-emerald-300">스와이프</div>
          <div className="size-full bg-orange-700">설명</div>
        </div>
      </InnerCard>
      <InnerCard
        isNested
        cardTitle={<h4 className="text-xl">어드민 페이지 개발</h4>}
        cardDescription="자사 앱 서비스 어드민 페이지 개발"
      >
        ProjectRecordContainer
      </InnerCard>
      <InnerCard
        isNested
        cardTitle={<h4 className="text-xl">위드플래닛</h4>}
        cardDescription="난임 환자들의 건강 증진을 목표로 일일 단위 건강 미션을 클리어하고 동료에게 인증할 수 있는 단기 프로젝트 앱"
      >
        ProjectRecordContainer
      </InnerCard>
      <InnerCard
        isNested
        cardTitle={<h4 className="text-xl">AI 난임리포트</h4>}
        cardDescription="ㅇㅇ"
      >
        ProjectRecordContainer
      </InnerCard>
    </InnerCard>
  )
}

export { ProjectRecordContainer }
