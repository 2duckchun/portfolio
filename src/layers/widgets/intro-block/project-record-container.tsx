import { FunctionComponent, HTMLAttributes } from 'react'
import Image from 'next/image'
import {
  DPLANIT_AI_REPORT_SWIPE_DATA,
  DPLANIT_HOMEPAGE_SWIPE_DATA,
  NOLJANG_ADMIN_SWIPE_DATA,
  NOLJANG_ECOMMERCE_SWIPE_DATA,
  WITH_PLANIT_SWIPE_DATA
} from '@/src/layers/entities'
import { InnerCard } from '@/src/layers/shared'
import { ProjectExplanationHorizontalCard } from '../../components/project-explanation-horizontal-box'
import { ProjectExplanationVerticalCard } from '../../components/project-explanation-vertical-box'

interface ProjectRecordContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const ProjectRecordContainer: FunctionComponent<
  ProjectRecordContainerProps
> = () => {
  return (
    <section
      id="projects"
      className="h-fit w-full bg-gray-300/50 px-3 py-5 lg:p-10"
    >
      <InnerCard
        cardTitle={<h3>Projects</h3>}
        cardDescription="진행했던 프로젝트의 이력입니다."
      >
        <div className="flex flex-col gap-10">
          <ProjectExplanationVerticalCard
            title="놀장 통합 어드민 페이지"
            subTitle="전통시장 이커머스 웹 어드민 페이지"
            completedDevDuration="2개월 (2024.06 ~ 2024.08)"
            isHorizontal
            role="프론트엔드 개발 (기여도 100%)"
            stack={['Next.js', 'Tanstack Table', 'rechart']}
            mainImplementation={mainImplementation.noljangAdmin}
            projectImageList={NOLJANG_ADMIN_SWIPE_DATA}
            retrospective="비즈니스에 두루 이용할 수 있는 어드민 웹을 만들기 위해 계정 접근 권한을 세분화하여 관리할 수 있는 구조를 만들었고,
            웹 이용자(사내 구성원, 점주 등)가 웹을 보다 편리하게 사용할 수 있도록 사용자 편의성에도 초점을 맞추었습니다. 
            어드민 페이지가 상대적으로 프로젝트 사이즈 대비 복잡한 로직이 많이 추가되는 만큼 들인 노력이 많았지만 성장하는 느낌으로 즐겁게 작업하였습니다.
            특히 입사하자마자 여러가지를 기획하며 개발할 권한을 얻었던 것은 매우 좋은 기억으로 남습니다."
          />
          <ProjectExplanationVerticalCard
            title="놀장 웹 이커머스"
            subTitle="전통시장 이커머스 웹 플랫폼 신규 개발"
            completedDevDuration="3개월 (2024.05 ~ 2024.08)"
            isHorizontal
            role="프론트엔드 개발 (기여도 60%)"
            stack={['Next.js']}
            mainImplementation={mainImplementation.noljangEcommerce}
            projectImageList={NOLJANG_ECOMMERCE_SWIPE_DATA}
            retrospective="외주 용역 개발이 끝난 후 코드를 이어받아 작업을 하게 된 케이스입니다. 출시를 할 수 없을 정도로 버그가 많았으나, 
            당시 프론트엔드 책임자로써 모든 부분에 대해 책임을 지고 전면 디버깅 및 재개발을 통해 성공적으로 웹을 런칭했습니다. 
            "
          />
          <ProjectExplanationHorizontalCard
            title="디플래닛 홈페이지"
            subTitle="자사 앱 홈페이지 개발"
            completedDevDuration="1주 (2024.02)"
            role="프론트엔드 개발 (기여도 100%)"
            stack={['Next.js']}
            mainImplementation={mainImplementation.dplanitHompage}
            projectImageList={DPLANIT_HOMEPAGE_SWIPE_DATA}
            retrospective="대외 홍보를 위해
                  홈페이지를 빠르게 개발해야하는 상황에서 빌드했던
                  홈페이지입니다. 당시 기획자분께서 기획 업무가 처음이셨지만 
                  차근차근 소통하며 주어진 업무를 잘 마쳤습니다.
                  또한 검색엔진 노출을 고려해 SEO 점수 100점을
                  달성했습니다."
          />
          <ProjectExplanationHorizontalCard
            title="AI 난임리포트"
            subTitle="자사 앱 서비스 AI 난임리포트 웹뷰 개발"
            completedDevDuration="2개월 (2023.12~2024.01)"
            role="프론트엔드 개발 (기여도 100%)"
            stack={['Next.js', 'Apexchart']}
            mainImplementation={mainImplementation.aiReport}
            projectImageList={DPLANIT_AI_REPORT_SWIPE_DATA}
            retrospective={`기획안이 제대로 나오지 않은 상황에서 개발을 시작한 프로젝트입니다. 
              특히 차트 라이브러리의 특정 부분 하이라이팅 및 차트 스크롤 강제 이동, 복잡한 형태의 모달 등 통일되지 않은 세세한 구현사항이 많아 코드와 디렉터리 구조가 복잡해졌었던 이슈가 있었습니다.
              이를 제어하기 위해 기획안이 안정된 상황이라고 판단되었을 때, 중복 기능을 최대한 응집하고 디렉터리를 정리하는 리팩터링 과정을 함께 병행하며 개발했던 경험이 있습니다.
              `}
          />
          <ProjectExplanationHorizontalCard
            title="디플래닛 어드민 개발"
            subTitle="자사 앱 어드민 페이지 개발"
            completedDevDuration="3주 (2023.11~2023.12)"
            role="프론트엔드 개발 (기여도 100%)"
            stack={['Next.js', 'Tanstack-Query', 'Quill Editor']}
            mainImplementation={mainImplementation.dplanitAdmin}
            projectImage={
              <Image
                src={'/images/project/dplanit-image-logo.svg'}
                width={200}
                height={200}
                alt={'디에이블'}
              />
            }
            retrospective={`로그인 정책 구현에 대해 많은 고민을 했던 프로젝트 였습니다. 사내 마스터, 라이터(포스팅), 인턴 등급으로 UI 접근 권한을 세분화 했습니다.
              또한 실 사용자의 니즈를 파악하기 위해 사내 구성원분과 많은 대화를 했고, 특히 에디터 기능 개발에 많은 공을 들였던 기억이 있습니다.`}
          />
          <ProjectExplanationHorizontalCard
            title="위드플래닛"
            subTitle="난임 환자들의 건강 증진을 목표로 일일 단위 건강 미션을 클리어하고 동료에게 인증할 수 있는 단기 프로젝트 앱"
            completedDevDuration="2개월 (2023.09 ~ 2023.11)"
            role="프론트엔드 개발 (기여도 40%)"
            stack={['Next.js']}
            mainImplementation={mainImplementation.withplanit}
            projectImageList={WITH_PLANIT_SWIPE_DATA}
            retrospective={`입사 후 바로 해당
                  웹 프로젝트를 만드는 업무에 투입되었습니다. 주요 기여
                  사항으로는 회원가입과 계정관리 로직 개발이며, 해당 부분 개발
                  완료 후 완성도가 떨어지는 부분에 한해 자체 Q/A와 디버깅을
                  진행하며 웹의 전체적인 완성도 증가에 기여했습니다.`}
          />
        </div>
      </InnerCard>
    </section>
  )
}

const mainImplementation = {
  noljangAdmin: (
    <ul className="list-disc pl-5">
      <li>
        <b>접근 권한 세분화 구현</b> <br />
        (운영, 점포, 지자체 등 유동적인 접근 제어가 가능하도록 구조 설계)
      </li>
      <li>
        <b>상품 등록 및 삭제, 데이터 테이블 등 기본적인 운영 기능 구현</b>
      </li>
      <ul className="list-outside list-disc pl-4 marker:text-slate-600">
        <li>
          <b>사용자 편의를 위한 기능 기획 및 구현</b>
          <ul className="list-item list-outside pl-2 marker:text-slate-600">
            <li className="border-l-2 pl-2">
              상품 등록 시 엑셀 업로드 기능 및 공통 양식 다운로드 기능
            </li>
            <li className="border-l-2 pl-2">
              이미지 업로드 시 미리보기 기능 추가
            </li>
            <li className="border-l-2 pl-2">
              좌측 네비게이션 바 축소/확대 기능 등
            </li>
          </ul>
        </li>
        <li>
          <b>데이터 테이블 기능 기획 및 세분화</b>
          <ul className="list-item list-outside pl-2 marker:text-slate-600">
            <li className="border-l-2 pl-2">
              데이터 테이블에 다양한 Sorting(최솟값, 최댓값, 검색 등) 기능 구현
            </li>
            <li className="border-l-2 pl-2">
              선택한 row를 엑셀로 추출할 수 있는 기능 구현
            </li>
          </ul>
        </li>
      </ul>
    </ul>
  ),

  noljangEcommerce: (
    <ul className="list-disc pl-5">
      <li>외주 개발이 끝난 후 소스 코드를 인계받아 작업</li>
      <li>나이스 PASS 인증 (FE, BE) 신규 구현</li>
      <li>소셜 SDK(솔라피 알림톡, 카카오톡 상담 및 공유 등) 연동</li>
      <li>
        <b>Q/A 리딩 및 상당수의 디버깅 및 리팩터링 진행</b>
      </li>
      <ul className="list-outside list-disc pl-4 marker:text-slate-600">
        <li>
          효과적인 Q/A를 위한 시스템 구성
          <ul className="list-item list-outside pl-2 marker:text-slate-600">
            <li className="border-l-2 pl-2">
              Q/A를 위한 사내 시스템(공유 스프레드시트) 개발
            </li>
            <li className="border-l-2 pl-2">
              진행사항과 개인의견 등을 문서로 공유하며 Q/A 우선 순위 평가
            </li>
          </ul>
        </li>
        <li>
          계정 보안 취약점 발견 후 사후처리
          <ul className="list-item list-outside pl-2 marker:text-slate-600">
            <li className="border-l-2 pl-2">
              계정 생성 시 프론트엔드에서 위험한 형태로 패스워드를 암호화하여
              서버에 전송하는 로직을 발견하여, 서버에서 처리할 수 있도록 협조
              요청 후 수정
            </li>
          </ul>
        </li>
        <li>오류가 많은 상태 관리에 한해 Context API 도입으로 관심사 분리</li>
        <li>
          기타 리팩터링, 디버깅 및 사용자 편의 기능 추가
          <ul className="list-item list-outside pl-2 marker:text-slate-600">
            <li className="border-l-2 pl-2">
              결제, 장바구니, 옵션선택, 상품목록, 검색, 정렬, 페이지네이션 등
              모든 부분에 에러가 나는 것을 디버깅함
            </li>
            <li className="border-l-2 pl-2">
              모달 메세지를 통해 사용자와 최소한의 의사소통 구현
            </li>
          </ul>
        </li>
      </ul>
    </ul>
  ),

  dplanitHompage: (
    <ul className="list-disc pl-5">
      <li>데스크탑, 태블릿, 스마트폰 반응형 구현</li>
      <li>
        성능 최적화 (Lighthouse)
        <ul className="list-inside list-disc pl-2 marker:text-slate-600">
          <li>Performance: 91점</li>
          <li>Accessibility: 95점</li>
          <li>SEO: 100점</li>
        </ul>
      </li>
    </ul>
  ),

  aiReport: (
    <ul className="list-disc pl-7">
      <li>플러터 내 웹뷰 페이지 개발</li>
      <li>
        앱과 웹뷰의 token 전달 구조 설계
        <ul className="list-disc pl-5 marker:text-slate-600">
          <li>
            <b>플러터</b> : 웹뷰 초기화 시 쿠키에 token 등록
          </li>
          <li>
            <b>Next.js</b> : 웹뷰 최초 진입시 쿠키에 등록된 token을 클라이언트
            사이드의 TokenProvider에 주입
          </li>
          <li>SSR에서는 쿠키로, CSR에서는 Provider로 token 사용</li>
        </ul>
      </li>
    </ul>
  ),

  dplanitAdmin: (
    <ul className="list-disc pl-7">
      <li>어드민 로그인 로직 개발</li>
      <li>텍스트 에디터 개발</li>
      <li>기타 어드민에 필요한 요소 개발</li>
    </ul>
  ),

  withplanit: (
    <ul className="list-disc pl-7">
      <li>회원가입 로직 개발</li>
      <li>계정관리 로직 개발</li>
      <li>유지보수</li>
    </ul>
  )
}
