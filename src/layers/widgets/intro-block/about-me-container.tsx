import { FunctionComponent, HTMLAttributes } from 'react'
import {
  Cake,
  Contact,
  Github,
  Home,
  Mail,
  PanelsTopLeft,
  School,
  Terminal,
  ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { InnerCard } from '@/src/layers/shared'
import { Alert, AlertDescription, AlertTitle } from '@/src/layers/shared'

interface AboutMeContainerProps extends HTMLAttributes<HTMLDivElement> {}

const AboutMeContainer: FunctionComponent<AboutMeContainerProps> = () => {
  return (
    <section
      id="about-me"
      className="h-fit w-full bg-gray-200/50 px-3 py-5 lg:p-10"
    >
      <InnerCard
        cardTitle={<h3>About Me</h3>}
        cardDescription="안녕하세요. 개발자 김태수입니다."
      >
        <div className="m-auto max-w-[85%]">
          <p className="py-2">
            <b>저는 1년 간 현업에서 소중한 경험을 했습니다.</b> 특히
            스타트업에서 홀로 프론트엔드 개발자로의 역할을 수행하며 프로젝트
            설계부터 배포까지 전 과정을 아우를 수 있는 역량을 키웠습니다.
            Next.js를 이용해 프로젝트를 빌드 할 때, SSR과 CSR 도입의 장단점을
            분석하며 프로젝트를 빌드하였고, 효율적인 전역 상태관리를 고민하며
            Context API 또는 필요한 상태 라이브러리를 도입하였습니다. 이를 통해
            유지보수와 기능 추가가 쉬운 웹 기반 프로젝트를 빌드하는 것에 큰
            관심을 가지고 공부하게 되었습니다.
          </p>
          <p className="py-2">
            <b>저는 동료가 쉽게 읽을 수 있는 코드를 작성합니다.</b> 당장의
            구현에만 몰두하면 이후의 작업 속도는 더욱 더뎌진다는 사실을 독서와
            실제 개발 경험을 통해 깨닫게 되었습니다. 코드의 품질을 사수하는 것도
            개발자의 덕목이라 생각하며, 개발 도중 스스로도 이해할 수 없거나
            기능이 몰려있는 컴포넌트가 있다면 과감히 리팩터링을 진행합니다.
            최근에는 리팩터링, 클린 아키텍처 등의 도서를 읽고, 동료들과 토의를
            하며 제 생각을 정립해 나가고 있습니다.
          </p>

          <p>
            <b>저는 최고의 동료입니다.</b> 동료의 업무 현황 및 업무 부하 상태를
            사전에 캐치하려 노력하며, 이를 통해 팀을 백업할 수 있는 일을
            끊임없이 찾아냅니다. 또한 개발 중 알아낸 지식이나 코드 구현 방법에
            대해 동료들과 함께 토론하며 회사의 코드를 함께 개선해 나갑니다.
            이러한 노력을 바탕으로 함께 일한 동료로부터 최고의 동료 리뷰를
            받았으며 이는{' '}
            <a href="#peer-review" className="text-blue-500">
              해당 포트폴리오 하단
            </a>
            에 기재되어 있습니다.
          </p>

          <p className="py-2">
            즉시 전력으로도 보탬이 되고, 높은 성장력으로 미래에도 도움이 되는
            동료 개발자로써 함께 하겠습니다. 감사합니다.
          </p>
        </div>
        <MyPhoto />
        <History />
        {/* <IntroduceMySelf /> */}
      </InnerCard>
    </section>
  )
}

export { AboutMeContainer }

const MyPhoto = () => {
  return (
    <div className="m-auto mt-[50px] size-[250px]">
      <Image
        unoptimized
        alt="상반신"
        width={0}
        height={0}
        src={'/images/my-head-2.jpg'}
        style={{
          width: '100%',
          height: '100%'
        }}
        className="rounded-full object-cover shadow-lg"
      />
    </div>
  )
}

const IntroduceMySelf = () => {
  return (
    <div className="flex flex-col justify-center gap-10 lg:flex-row">
      <div className="m-auto size-[250px]">
        <Image
          unoptimized
          alt="상반신"
          width={0}
          height={0}
          src={'/images/my-head-2.jpg'}
          style={{
            width: '100%',
            height: '100%'
          }}
          className="rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="w-full text-left text-base md:text-lg lg:w-3/4">
        <div className="flex flex-col gap-4">
          <div className="rounded-md bg-[#181818] p-3 text-base text-[#cccccc]">
            <h2 className="pb-2 font-bold">
              <Terminal className="inline-block size-5" />
              조직을_위해_일하는_개발자
            </h2>
            <div className="pl-3">
              <p>
                업무 상 모두가 불편하거나 합리적이지 못한 부분이 있다면
                팀원분들과 충분히 논의하며 문제점을 개선합니다.
              </p>
              <ul className="py-2 pl-3">
                <li>
                  <ChevronRight className="inline-block size-5" />
                  린트, 스타일, 주요 라이브러리가 같은 웹 프로젝트에{' '}
                  <span className="text-[#0096FF]">모노레포</span>를 도입하여
                  프로젝트 셋팅 시간 감소
                </li>
                <li>
                  <ChevronRight className="inline-block size-5" />
                  <span className="text-[#44d384]">엑셀</span> 기반의 API 문서를{' '}
                  <span className="text-[#FF6C36]">Postman</span>으로 이관하여
                  팀 내 개발 환경 개선
                </li>
                <li>
                  <ChevronRight className="inline-block size-5" />
                  이미지를 DB에 <span className="text-[#439A00]">base64</span>로
                  저장하는 로직 수정을 건의하여 스토리지 업로드 후{' '}
                  <span className="text-[#5CD9D4]">URL</span>을 저장하는
                  방식으로 해결
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-md bg-[#181818] p-3 text-base text-[#cccccc]">
            <h2 className="pb-2 font-bold">
              <Terminal className="inline-block size-5" />
              적극적으로_소통하는_개발자
            </h2>
            <div className="pl-3">
              <p>
                동료들과 개발에 대해 토론하며 지식을 공유하는 활동을 즐깁니다.
                해결이 필요한 문제나 알아낸 지식들을 동료들에게 공유해야할
                필요성이 있을 때 그들을 기꺼이 화이트보드 앞으로 모셔올 수 있는
                적극성도 가지고 있습니다. <br />
                커뮤니케이션을 원활하게 이끌어가기 위해 팀원들과 늘 좋은 관계를
                유지합니다.
              </p>
              <ul className="py-2 pl-3">
                <li>
                  <ChevronRight className="inline-block size-5" />
                  동료가 개발에 관해 고민을 토로하면 분야를 가리지 않고{' '}
                  <span className="text-blue-300">문제를 함께 해결함</span>
                </li>
                <li>
                  <ChevronRight className="inline-block size-5" />
                  여유가 있는 상황에서는 알게된 코드를 동료들에게 공유하거나
                  동료가 작성한 코드에 관심을 가짐
                </li>
                <li>
                  <ChevronRight className="inline-block size-5" />
                  작성한 코드의 의도를 설명하면서 상대를 설득하거나 내 코드의
                  문제를 식별함
                </li>
                <li>
                  <ChevronRight className="inline-block size-5" />
                  일련의 과정을 통해 함께 일한 동료들에게 긍정적인{' '}
                  <span className="text-orange-400">Peer Review</span>를 받음
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const History = () => {
  return (
    <div className="py-10">
      <div className="flex h-full flex-col justify-center gap-10 lg:flex-row">
        <div className="grid size-full  grid-cols-1 content-center justify-items-stretch gap-3 md:grid-cols-2">
          <Alert className="shadow-md">
            <Github className="size-4" />
            <AlertTitle>Github (링크)</AlertTitle>
            <AlertDescription className="text-base">
              <Link
                href="https://github.com/2duckchun"
                className="text-sm"
                target="_blank"
              >
                https://github.com/2duckchun
              </Link>
            </AlertDescription>
          </Alert>
          <Alert className="shadow-md">
            <PanelsTopLeft className="size-4" />
            <AlertTitle>블로그 (링크)</AlertTitle>
            <AlertDescription className="text-base">
              <Link
                href="https://2duckchun.tistory.com"
                target="_blank"
                className="block py-1 text-sm text-label"
              >
                <span className="text-label">(구)</span>{' '}
                https://2duckchun.tistory.com
              </Link>
              <Link
                href="https://blog.2duckchun.com/"
                target="_blank"
                className="block text-sm"
              >
                <span className="text-main">(신)</span>{' '}
                https://blog.2duckchun.com/
              </Link>
            </AlertDescription>
          </Alert>
          <Alert className="shadow-md">
            <School className="size-4" />
            <AlertTitle>교육</AlertTitle>
            <AlertDescription>
              강원대학교 (동물생명공학과 졸업)
            </AlertDescription>
            <AlertDescription>
              한국방송통신대학교 (컴퓨터과학과 재학)
            </AlertDescription>
          </Alert>
          <Alert className="shadow-md">
            <Mail className="size-4" />
            <Home className="size-4" />
            <AlertTitle>이메일</AlertTitle>
            <AlertDescription>kkts9308@gmail.com</AlertDescription>
          </Alert>
          <Alert className="shadow-md">
            <Contact className="size-4" />
            <AlertTitle>이름</AlertTitle>
            <AlertDescription>김태수</AlertDescription>
          </Alert>
          <Alert className="shadow-md">
            <Cake className="size-4" />
            <AlertTitle>생년월일</AlertTitle>
            <AlertDescription>1993-08-29</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
