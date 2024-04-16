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

import { InnerCard } from '@/src/layers/shared'
import { Alert, AlertDescription, AlertTitle } from '@/src/layers/shared'
interface AboutMeContainerProps extends HTMLAttributes<HTMLDivElement> {}

const AboutMeContainer: FunctionComponent<AboutMeContainerProps> = ({
  className,
}) => {
  return (
    <InnerCard
      cardTitle={<h3>About Me</h3>}
      cardDescription="조직을 위해 일하고 끊임없이 발전하는 개발자"
    >
      <IntroduceMySelf />
      <PortraitAndHistory />
    </InnerCard>
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
        <p>
          안녕하세요. 탄탄한 기본기를 바탕으로 필요한 것들을 빠르게 배워 현실에
          적용하는 개발자 김태수입니다.
        </p>

        <br />
        <p>저는 제가 속한 조직을 발전시키기 위해 노력합니다.</p>
        <p>
          개발 이전 직장에서도 업무 간결화를 위한 엑셀 파일을 개발하여 팀에
          공유하여 조직의 발전에 도움이 된 경험이 있으며, 개발자로 전향한 후에도
          업무 상 모두가 불편하거나 합리적이지 못한 부분을 발견했을 때
          팀원분들과 충분히 논의하며 개선 방법을 건의하며 조직의 문화에
          이바지합니다. 또한 동료들과 개발에 대해 토론하며 지식을 공유하는
          활동을 즐깁니다. 해결이 필요한 문제나 알아낸 지식들을 동료들에게
          공유해야할 필요성이 있을 때 그들을 기꺼이 화이트보드 앞으로 모셔올 수
          있는 적극성도 가지고 있습니다. 이러한 커뮤니케이션을 원활하게
          이끌어가기 위해 팀원들과 늘 좋은 관계를 유지합니다.
        </p>
        <br />
        <p>
          저는 자바스크립트를 활용한 개발에 자신이 있습니다. 높은 자바스크립트
          이해도를 바탕으로 기존의 코드 및 새로운 라이브러리를 빠르게 습득하여
          업무에 활용할 수 있습니다.
        </p>
        <p>
          하지만 언어에 귀속되지 않고자 노력합니다. 필요한 것을 빠르게 배워
          적용하는 카멜레온 같은 개발자가 되어 팀에 전방위적인 도움이 되는 것이
          제 목표입니다. 이를 위해 제 워라밸은 탄탄한 CS 지식을 쌓는 것에 맞춰져
          있습니다.
        </p>
        <br />
        <p>
          저는 늘 그랬던 것처럼, 조직을 위해 일하며, 끊임없이 발전할 것입니다.
        </p>
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
