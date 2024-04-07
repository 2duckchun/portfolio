import { FunctionComponent, HTMLAttributes } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Cake,
  Contact,
  Github,
  Home,
  Mail,
  PanelsTopLeft,
  School,
} from 'lucide-react'
import { SiTistory } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { GiArchiveResearch } from 'react-icons/gi'
import { FaReact } from 'react-icons/fa'
import { InnerCard } from './inner-card'
import { Alert, AlertDescription, AlertTitle } from '@/src/layers/shared'
interface AboutMeContainerProps extends HTMLAttributes<HTMLDivElement> {}

const AboutMeContainer: FunctionComponent<AboutMeContainerProps> = ({
  className,
}) => {
  return (
    <InnerCard
      title="About me"
      description="안녕하세요. 프론트엔드 개발자 김태수입니다."
    >
      <IntroduceMySelf />
      <PortraitAndHistory />
    </InnerCard>
  )
}

export { AboutMeContainer }

const IntroduceMySelf = () => {
  return (
    <div className="mb-3 text-center text-xl">
      <ul className="m-auto w-fit list-disc text-left ">
        <li>
          탄탄한 자바스크립트 기초를 바탕으로 로직의 동작원리를 빠르게
          캐치합니다.
        </li>
        <li>
          협업과 유지보수가 쉬운 작업 환경을 구축하는 것에 관심이 많습니다.
          <ul className="list-inside list-disc border-black marker:text-gray-300">
            <li className="text-lg hover:text-black/50">
              <FaGithub className="mr-2 inline-block" />
              <Link href="https://github.com/2duckchun/nextjs-monorepo-guide">
                (링크) 모노레포 가이드 작성
              </Link>
            </li>
            <li className="text-lg hover:text-black/50">
              <SiTistory className="mr-2 inline-block" />
              <Link href="https://2duckchun.tistory.com/540">
                (링크) 집합적 사고로 레이아웃 설계하기 등
              </Link>
            </li>
            <li className="text-lg hover:text-black/50">
              <SiTistory className="mr-2 inline-block" />
              <Link href="https://2duckchun.tistory.com/516">
                (링크) 프론트엔드 설계 아이데이션
              </Link>
            </li>
          </ul>
        </li>
        <li>
          지식 공유 및 토의 활동에 관심이 많습니다.
          <ul className="list-inside list-disc border-black marker:text-gray-300">
            <li className="text-lg hover:text-black/50">
              <FaReact className="mr-2 inline-block" />
              <Link href="https://ko.react.dev/reference/react/useEffect">
                (링크) React 공식문서 useEffect 번역
              </Link>
            </li>
            <li className="text-lg hover:text-black/50">
              <FaReact className="mr-2 inline-block" />
              <Link href="https://ko.react.dev/reference/react/useReducer">
                (링크) React 공식문서 useReducer 번역
              </Link>
            </li>
            <li className="text-lg">
              <GiArchiveResearch className="mr-2 inline-block" />
              (현) 한국방송통신대학교 컴퓨터과학과 스터디 운영
            </li>
          </ul>
        </li>
        <li>문제해결을 위한 의사소통에 강점이 있습니다.</li>
      </ul>
    </div>
  )
}

const PortraitAndHistory = () => {
  return (
    <div>
      <div className="flex h-full flex-col justify-center gap-10 lg:flex-row">
        <div className="relative m-auto h-[200px] w-[250px]">
          <Image
            alt="상반신"
            fill
            src={'/images/my-head-2.jpg'}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="grid size-full  grid-cols-1 content-center justify-items-stretch gap-3 md:grid-cols-2">
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
            <Github className="size-4" />
            <AlertTitle>Github</AlertTitle>
            <AlertDescription>
              <Link href="https://github.com/2duckchun">주소(클릭)</Link>
            </AlertDescription>
          </Alert>
          <Alert className="shadow-md">
            <PanelsTopLeft className="size-4" />
            <AlertTitle>블로그</AlertTitle>
            <AlertDescription>
              <Link href="https://2duckchun.tistory.com/">주소(클릭)</Link>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
