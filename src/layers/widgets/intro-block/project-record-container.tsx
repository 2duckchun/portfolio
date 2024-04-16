import { FunctionComponent, HTMLAttributes } from 'react'
import { InnerCard } from '../../shared'
import { PaginationSwiper } from '../../shared/ui/pagination-swiper'
import {
  DPLANIT_AI_REPORT_SWIPE_DATA,
  DPLANIT_HOMEPAGE_SWIPE_DATA,
  WITH_PLANIT_SWIPE_DATA,
} from '../../entities'
import Image from 'next/image'
interface ProjectRecordContainerProps extends HTMLAttributes<HTMLDivElement> {}

const ProjectRecordContainer: FunctionComponent<
  ProjectRecordContainerProps
> = ({ className, ...props }) => {
  return (
    <InnerCard
      cardTitle={<h3>Projects</h3>}
      cardDescription="진행했던 프로젝트의 이력입니다."
    >
      <div className="flex flex-col gap-10">
        <InnerCard
          className="w-full md:w-[85%]"
          isNested
          cardTitle={<h4 className="text-xl">디플래닛 홈페이지</h4>}
          cardDescription="자사 앱 홈페이지 개발"
        >
          <div className="grid grid-cols-1 items-center md:flex md:justify-evenly">
            <div className="flex justify-center rounded-xl">
              <PaginationSwiper
                className="h-full max-w-[350px] px-2"
                swipeImageData={DPLANIT_HOMEPAGE_SWIPE_DATA}
              />
            </div>
            <div className="flex h-full flex-col justify-center gap-1 md:max-w-[400px]">
              <p>
                <span className="font-bold">개발 기간</span> : 1주 (2024.02)
              </p>
              <p>
                <span className="font-bold">역할</span> : 프론트엔드 전담
              </p>
              <p>
                <span className="font-bold">기술 스택</span> : Next.js(App
                Router), swiper
              </p>
              <p>
                <span className="font-bold">주요 구현</span>
              </p>
              <ul className="list-disc pl-7">
                <li>데스크탑, 태블릿, 스마트폰 반응형 구현</li>
                <li>
                  성능 최적화 (Lighthouse)
                  <ul className="list-inside list-disc pl-4 marker:text-slate-600">
                    <li>Performance: 91점</li>
                    <li>Accessibility: 95점</li>
                    <li>SEO: 100점</li>
                  </ul>
                </li>
              </ul>
              <p>
                <span className="font-bold">회고록</span> : 대외 홍보를 위해
                홈페이지를 빠르게 개발해야하는 상황에서 빌드했던 홈페이지입니다.
                당시 기획자분께서 기획 업무가 처음이시고 개발 지식도 없으셨지만
                차근차근 소통하며 주어진 업무를 잘 마쳤습니다. 또한 검색엔진
                노출을 고려해 SEO 점수 100점을 달성했습니다.
              </p>
            </div>
          </div>
        </InnerCard>
        <InnerCard
          className="w-full md:w-[85%]"
          isNested
          cardTitle={<h4 className="text-xl">AI 난임리포트</h4>}
          cardDescription="자사 앱 서비스 AI 난임리포트 웹뷰 개발"
        >
          <div className="grid grid-cols-1 items-center md:flex md:justify-evenly">
            <div className="flex justify-center rounded-xl">
              <PaginationSwiper
                className="h-full max-w-[350px] px-2"
                swipeImageData={DPLANIT_AI_REPORT_SWIPE_DATA}
              />
            </div>
            <div className="flex h-full flex-col justify-center gap-1 md:max-w-[400px]">
              <p>
                <span className="font-bold">개발 기간</span> : 2개월
                (2023.12~2024.01)
              </p>
              <p>
                <span className="font-bold">역할</span> : 프론트엔드 전담
              </p>
              <p>
                <span className="font-bold">기술 스택</span> : Next.js(App
                Router), React-Router, Apexchart
              </p>
              <p>
                <span className="font-bold">주요 구현</span>
              </p>
              <ul className="list-disc pl-7">
                <li>플러터 개발자와 협업하여 작업 진행</li>
                <li>
                  서버와 클라이언트 상태의 동기화를 위해 React-Query 라이브러리
                  채택
                </li>
                <li>
                  프로젝트의 점증적 기능 구현을 고려한 프론트엔드 디렉토리 구조
                  설계 적용
                </li>
                <li>
                  앱과 웹뷰 환경의 계정 연동을 위한 token 전달 구조 설계 주도
                  <ul className="list-disc pl-5 marker:text-slate-600">
                    <li>Flutter : 웹뷰 생성시 쿠키에 토큰 생성</li>
                    <li>
                      Next.js : 유저 최초 진입 시 서버사이드에서 쿠키 내 토큰을
                      받아 클라이언트의 세션 프로바이더에 주입
                    </li>
                    <li>
                      SSR에서는 쿠키로, CSR에서는 세션프로바이더를 통해 토큰에
                      접근 가능
                    </li>
                  </ul>
                </li>
              </ul>

              <p>
                <span className="font-bold">회고록</span> : 차트의 특정 부분
                하이라이팅 및 차트 스크롤 강제 이동, 기획상 통일되지 않은 설문
                관련 컴포넌트, 모든 페이지마다 있는 모달 등 세세하게 구현할
                것들이 많았지만 중복되는 기능을 최대한 응집하고, 복잡해지는
                구조는 개발 도중에 리팩터링하면서 복잡도 이슈를 처리했습니다.
                <br />
                <span className="font-semibold">
                  저는 이 프로젝트를 만든 경험을 통해 개발자로써 한 걸음 더
                  성장했습니다.
                </span>{' '}
                앱과 웹의 계정 연동 로직을 고민하고 해결한 경험, 개발이 진전됨에
                따라 증가하는 디렉토리의 복잡도를 해소하며 프로젝트를 진행한
                경험 등을 통해 규모가 큰 어플리케이션을 작업하는 것에 자신감을
                얻게 되었습니다.
              </p>
            </div>
          </div>
        </InnerCard>
        <InnerCard
          className="w-full md:w-[85%]"
          isNested
          cardTitle={<h4 className="text-xl">디플래닛 어드민 개발</h4>}
          cardDescription="자사 앱의 어드민 페이지 개발"
        >
          <div className="grid grid-cols-1 items-center md:flex md:justify-evenly">
            <div className="flex justify-center rounded-xl">
              <Image
                src={'/images/project/dplanit-image-logo.svg'}
                width={200}
                height={200}
                alt={'디에이블'}
              />
            </div>
            <div className="flex h-full flex-col justify-center gap-1 md:max-w-[400px]">
              <p>
                <span className="font-bold">개발 기간</span> : 3주
                (2023.11~2023.12)
              </p>
              <p>
                <span className="font-bold">역할</span> : 프론트엔드 전담
              </p>
              <p>
                <span className="font-bold">기술 스택</span> : Next.js(App
                Router), Next-auth, Quill Editor
              </p>
              <p>
                <span className="font-bold">주요 구현</span>
              </p>
              <ul className="list-disc pl-7">
                <li>어드민 로그인 로직 개발</li>
                <li>텍스트 에디터 개발</li>
                <li>기타 어드민에 필요한 요소 개발</li>
              </ul>
              <p>
                <span className="font-bold">회고록</span> : 로그인 정책을 어떻게
                해야할지에 대해 많은 고민을 했던 프로젝트였습니다. 어드민
                페이지는 보안이 중요하다는 것을 감안하여, 토큰에 자체적으로 제한
                시간을 부여하여 매 요청간 토큰의 유효성 검증을 진행했습니다.
                또한 어드민 페이지를 개발할때는 실 사용자와 충분한 대화를
                나눠가며 구현해야 한다는 것을 몸소 깨닫게 되었습니다.
              </p>
            </div>
          </div>
        </InnerCard>
        <InnerCard
          className="w-full md:w-[85%]"
          isNested
          cardTitle={<h4 className="text-xl">위드플래닛</h4>}
          cardDescription="난임 환자들의 건강 증진을 목표로 일일 단위 건강 미션을 클리어하고 동료에게 인증할 수 있는 단기 프로젝트 앱"
        >
          <div className="grid grid-cols-1 items-center gap-3 md:flex md:justify-evenly">
            <div className="flex justify-center rounded-xl">
              <PaginationSwiper
                className="h-full max-w-[350px] px-2"
                swipeImageData={WITH_PLANIT_SWIPE_DATA}
              />
            </div>
            <div className="flex h-full flex-col justify-center gap-1 md:max-w-[400px]">
              <p>
                <span className="font-bold">개발 기간</span> : 2개월 (2023.09 ~
                2023.11)
              </p>
              <p>
                <span className="font-bold">역할</span> : 프론트엔드 (개발 중
                합류)
              </p>
              <p>
                <span className="font-bold">기술 스택</span> : Next.js
              </p>
              <p>
                <span className="font-bold">주요 구현</span>
              </p>
              <ul className="list-disc pl-7">
                <li>회원가입 로직 개발</li>
                <li>계정관리 로직 개발</li>
                <li>유지보수</li>
              </ul>
              <p>
                <span className="font-bold">회고록</span> : 입사 후 바로 해당 웹
                프로젝트를 만드는 업무에 투입되었습니다. 주요 기여 사항으로는
                회원가입과 계정관리 로직 개발이며, 해당 부분 개발 완료 후
                완성도가 떨어지는 부분에 한해 자체 Q/A와 디버깅을 진행하며 웹의
                전체적인 완성도 증가에 기여했습니다.
              </p>
            </div>
          </div>
        </InnerCard>
        <InnerCard
          className="w-full md:w-[85%]"
          isNested
          cardTitle={<h4 className="text-xl">전세버스 수요조사 웹 프로젝트</h4>}
          cardDescription="전세버스 경로에 대한 의사결정을 돕는 버스 수요조사 웹 개발"
        >
          <div className="grid grid-cols-1 items-center md:flex md:justify-evenly">
            <div className="flex justify-center rounded-xl">
              <Image
                src={'/images/project/wizdome.webp'}
                width={200}
                height={100}
                alt={'위즈돔'}
              />
            </div>
            <div className="flex h-full flex-col justify-center gap-1 md:max-w-[400px]">
              <p>
                <span className="font-bold">개발 기간</span> : 3주
                (2023.03~2023.04)
              </p>
              <p>
                <span className="font-bold">역할</span> : 프론트엔드 개발
              </p>
              <p>
                <span className="font-bold">기술 스택</span> : Vue, Naver Map
                API
              </p>
              <p>
                <span className="font-bold">주요 구현</span>
              </p>
              <ul className="list-disc pl-7">
                <li>
                  전세버스 수요 고객을 대상으로 설문을 받은 버스 탑승 좌표
                  수천개를 네이버 API 지도에 마커로 렌더링
                </li>
                <li>가시성 확보를 위한 마커 클러스터링 기능 추가</li>
                <li>마커 크기 및 컬러 변경 기능 추가</li>
              </ul>
              <p>
                <span className="font-bold">회고록</span> : 클러스터링 마커의
                컬러와 사이즈를 실시간으로 변경할 수 있는 기능을 도입하는
                과정에서 웹이 버벅거리는 현상이 있었습니다. 이를 개선하기 위해
                네이버 클러스터링 API를 직접 뜯어보았고, 실시간 마커 스타일 변경
                기능이 클러스터링 API 명세에 없는 기능이었다는 것을 알게
                되었습니다.
                <br />
                다행히 네이버 클러스터링 API가 오픈소스로 공개된 기능이었으므로,
                직접 코드를 해석하여 기존 클러스터링 코드 함수를 변경하는 과정을
                통해 원하는 기능을 구현할 수 있었고, O(n^3)로 동작하던 시간
                복잡도를 O(n^2)로 고칠 수 있었습니다.
              </p>
            </div>
          </div>
        </InnerCard>
      </div>
    </InnerCard>
  )
}

export { ProjectRecordContainer }
