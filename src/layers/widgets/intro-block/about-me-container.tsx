import { cn } from '@/src/layers/shared/lib/utils'
import { FunctionComponent, HTMLAttributes } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/layers/shared'
import Image from 'next/image'
import { Separator } from '@/src/layers/shared'
import { Alert, AlertDescription, AlertTitle } from '@/src/layers/shared'

import {
  Cake,
  Contact,
  Github,
  Home,
  Mail,
  PanelsTopLeft,
  School,
} from 'lucide-react'
import Link from 'next/link'
interface AboutMeContainerProps extends HTMLAttributes<HTMLDivElement> {}

const AboutMeContainer: FunctionComponent<AboutMeContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <Card
      className={cn(
        className,
        'bg-white max-w-[1280px] min-h-[500px] m-auto rounded-3xl shadow-2xl p-3 lg:p-10',
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-center font-black-han-sans text-4xl">
          About Me
        </CardTitle>
        <CardDescription className="text-center text-xl">
          안녕하세요. 프론트엔드 개발자 김태수입니다.
        </CardDescription>
      </CardHeader>
      <Separator className="m-auto mb-5 w-1/5 rounded-3xl p-1" />
      <CardContent className="mb-3 text-center text-xl">
        <ul className="m-auto w-fit list-disc text-left ">
          <li>
            협업과 유지보수가 쉬운 작업 환경을 구축하는 것에 관심이 많습니다.
            <ul className="list-inside list-disc border-black marker:text-gray-300">
              <li className="text-lg">
                <Github className="mr-2 inline-block" />
                (링크) 모노레포 가이드 작성
              </li>
              <li className="text-lg">
                <Github className="mr-2 inline-block" />
                (링크) 아키텍처 이모저모 1, 2
              </li>
            </ul>
          </li>
          <li>지식 공유 및 토의 활동에 관심이 많습니다.</li>
          <li>
            개발자 전직 이전에 다양한 직군과 의사소통하며 문제를 해결한 경험이
            있습니다.
          </li>
          <li>Next.js를 자유롭게 다룰 수 있습니다.</li>
        </ul>
      </CardContent>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export { AboutMeContainer }
