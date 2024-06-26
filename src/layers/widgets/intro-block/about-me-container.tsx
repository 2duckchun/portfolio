import { FunctionComponent, HTMLAttributes } from 'react'
import Image from 'next/image'
import { InnerCard } from '@/src/layers/shared'
import { Alert, AlertDescription, AlertTitle } from '@/src/layers/shared'
import Link from 'next/link'
import {
  Cake,
  Contact,
  Github,
  Home,
  Mail,
  PanelsTopLeft,
  School,
  Terminal,
  ChevronRight,
} from 'lucide-react'

interface AboutMeContainerProps extends HTMLAttributes<HTMLDivElement> {}

const AboutMeContainer: FunctionComponent<AboutMeContainerProps> = () => {
  return (
    <section
      id="about-me"
      className="h-fit w-full bg-gray-200/50 px-3 py-5 lg:p-10"
    >
      <InnerCard
        cardTitle={<h3>About Me</h3>}
        cardDescription="조직을 위해 일하고 끊임없이 발전하는 개발자"
      >
        <IntroduceMySelf />
        <PortraitAndHistory />
      </InnerCard>
    </section>
  )
}

export { AboutMeContainer }

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
            height: '100%',
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

const PortraitAndHistory = () => {
  return (
    <div className="py-10">
      <div className="flex h-full flex-col justify-center gap-10 lg:flex-row">
        <div className="grid size-full  grid-cols-1 content-center justify-items-stretch gap-3 md:grid-cols-2">
          <Alert className="shadow-md">
            <Github className="size-4" />
            <AlertTitle>Github (링크)</AlertTitle>
            <AlertDescription className="text-base">
              <Link href="https://github.com/2duckchun" target="_blank">
                https://github.com/2duckchun
              </Link>
            </AlertDescription>
          </Alert>
          <Alert className="shadow-md">
            <PanelsTopLeft className="size-4" />
            <AlertTitle>블로그 (링크)</AlertTitle>
            <AlertDescription className="text-base">
              <Link href="https://2duckchun.tistory.com" target="_blank">
                https://2duckchun.tistory.com
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
