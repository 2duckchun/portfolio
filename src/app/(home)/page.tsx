'use client'

import {
  Alert,
  AlertDescription,
  AlertTitle,
  InnerCard,
  Section,
} from '@/src/layers/shared'
import { BgTypingContainer, SkillSetContainer } from '@/src/layers/widgets'
import { AboutMeContainer } from '@/src/layers/widgets'
import { ProjectRecordContainer } from '@/src/layers/widgets/intro-block/project-record-container'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Section className="h-[300px] bg-[url('/images/cup-of-coffee.jpg')] bg-cover">
        <BgTypingContainer />
      </Section>
      <Section
        id="about-me"
        className="h-fit w-full bg-gray-200/20 px-3 py-5 lg:pb-10 lg:pt-20"
      >
        <AboutMeContainer />
      </Section>
      <Section
        id="skills"
        className="h-fit w-full bg-gray-200/50 px-3 py-5 lg:p-10"
      >
        <SkillSetContainer />
      </Section>
      <Section
        id="career"
        className="h-fit w-full bg-gray-300/50 px-3 py-5 lg:p-10"
      >
        <InnerCard cardTitle="Career" cardDescription="">
          <div className="flex flex-col gap-3">
            <Alert className="m-auto flex flex-col py-10 shadow-md md:flex-row">
              <AlertTitle className="flex items-center justify-center py-4 text-xl md:min-w-[400px] md:text-2xl">
                <Image
                  width={50}
                  height={50}
                  alt={'디에이블'}
                  className="pr-3"
                  src={'/images/project/dplanit-image-logo.svg'}
                />
                디에이블
              </AlertTitle>
              <AlertDescription className="text-base">
                <div className="flex h-full flex-col justify-center gap-1">
                  <p>
                    <span className="font-bold">재직기간</span> : 2023.09 ~
                    2024.04 (8개월)
                  </p>
                  <p>
                    <span className="font-bold">직책</span> : 프론트엔드 개발
                  </p>
                  <p>
                    <span className="font-bold">회사소개</span> : 난임으로
                    어려움을 겪는 환자들을 위한 각종 필요한 정보들을 제공하는
                    플랫폼 서비스 회사입니다.
                  </p>
                  <div>
                    <span className="font-bold">업무</span>
                    <ul className="list-disc pl-10 marker:text-slate-600">
                      <li>
                        회사의 메인 프론트엔드 개발자로 업무를 진행했습니다.
                      </li>
                      <li>
                        프론트엔드에 관련된 모든 설계, 개발, 배포, 유지보수 등을
                        담당했습니다.
                      </li>
                      <li>
                        어드민 프로젝트의 모노레포 도입 및 디렉토리 컨벤션 정립
                        등 유지보수가 편하고 지속가능한 프론트엔드 개발 환경을
                        구축한 경험이 있습니다.
                      </li>
                      <li>
                        엑셀 API 문서를 postman으로 변경하거나, 라이센스 이슈가
                        있는 라이브러리를 찾아 제거하는 등 사내 개발 환경을
                        적극적으로 개선한 경험이 있습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
            <Alert className="m-auto flex flex-col py-10 shadow-md md:flex-row ">
              <AlertTitle className="flex items-center justify-center py-4 text-xl md:min-w-[400px] md:text-2xl">
                <Image
                  width={100}
                  height={50}
                  alt={'위즈돔'}
                  className="pr-3 "
                  src={'/images/project/wizdome.webp'}
                />
                위즈돔
              </AlertTitle>
              <AlertDescription className="text-base">
                <div className="flex h-full flex-col justify-center gap-1">
                  <p>
                    <span className="font-bold">재직기간</span> : 2023.02 ~
                    2023.05 (3개월)
                  </p>
                  <p>
                    <span className="font-bold">직책</span> : 프론트엔드 개발
                  </p>
                  <p>
                    <span className="font-bold">회사소개</span> : 버스 부분에
                    특화된 모빌리티 관제 플랫폼 서비스 회사입니다.
                  </p>
                  <div>
                    <span className="font-bold">업무</span>
                    <ul className="list-disc pl-10 marker:text-slate-600">
                      <li>
                        프론트엔드 개발자로써 웹 개발 및 유지보수 업무를
                        담당했습니다.
                      </li>
                      <li>
                        Vue2, 네이버 지도 API를 이용하여 전세버스 수요조사를
                        위한 사내 웹 프로젝트를 개발했으며, 네이버 클러스터링
                        API 코드를 직접 수정하여 성능을 최적화한 경험이
                        있습니다.
                      </li>
                      <li>
                        사내 레거시 코드의 유지보수를 위해 Vue2, React Class
                        Component를 사용했습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
            <div className="my-5 h-[10px] rounded-xl bg-gray-200/90"></div>
            <Alert className="m-auto flex flex-col py-10 shadow-md md:flex-row ">
              <AlertTitle className="flex items-center justify-center py-4 text-xl md:min-w-[400px] md:text-2xl">
                <Image
                  width={50}
                  height={50}
                  alt={'한국사료협회'}
                  className="pr-3 "
                  src={'/images/project/kfa.jpg'}
                />
                한국사료협회
              </AlertTitle>
              <AlertDescription className="text-base">
                <div className="flex h-full flex-col justify-center gap-1">
                  <p>
                    <span className="font-bold">재직기간</span> : 2019.12 ~
                    2022.04 (2년 4개월)
                  </p>
                  <p>
                    <span className="font-bold">직책</span> : 사원
                  </p>
                  <p>
                    <span className="font-bold">회사소개</span> : 대한민국의
                    사료산업의 발전을 위해 설립된 농림축산식품부 산하
                    기관입니다.
                  </p>
                  <div>
                    <span className="font-bold">업무</span>
                    <ul className="list-disc pl-10 marker:text-slate-600">
                      <li>
                        통계청 소속의 국내 사료 생산 및 원료 사용량을
                        관리했습니다.
                      </li>
                      <li>
                        로이터, 블룸버그 등 외신과 공시자료를 활용하여 국제 곡물
                        시장 및 물류 동향을 분석하고 농림부 및 사료업계에
                        고지했습니다.
                      </li>
                      <li>
                        사료산업 보호를 위해 사료원료의 할당관세 배정 근거를
                        조사하고 효과를 분석했습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </InnerCard>
      </Section>
      <Section
        id="projects"
        className="h-fit w-full bg-gray-300/50 px-3 py-5 lg:p-10"
      >
        <ProjectRecordContainer />
      </Section>
      <Section
        id="peer-review"
        className="h-fit w-full bg-gray-200/50 px-3 py-5 lg:p-10"
      >
        <InnerCard
          cardTitle="Peer Review"
          cardDescription="함께 일했던 동료들이 전달해준 추천사입니다."
        >
          <div className="flex flex-col gap-5">
            <Alert className="shadow-md">
              <AlertTitle>김시훈(백엔드 개발자)</AlertTitle>
              <AlertDescription>
                항상 더 나은 환경을 만들기 위해 노력하는 모습이 동료들에게
                긍정적인 영향을 주었습니다. 항상 배우는 자세로 업무에 임하시고,
                다방면으로 넓고 깊은 지식으로 의사소통이 원활하게 이루어질 수
                있었으며, 좋은 의사소통이 무엇인지 알게 되었습니다. 항상 좋은
                설계 좋은 코드가 무엇인지 연구하신 덕분에 아키텍처 설계에 좋은
                영향을 받았습니다. 항상 제일 먼저 출근 하시고, 성격 또한
                유머러스하셔서 함께 업무할 때 너무 재미있게 작업할 수
                있었습니다!! 더 좋은 곳에서 꼭 다시 만나서 일하고 싶습니다!! 🙏
              </AlertDescription>
            </Alert>
            <Alert className="shadow-md">
              <AlertTitle>주형인(앱 개발자)</AlertTitle>
              <AlertDescription>
                끊임없이 공부하고 습득하여 새로운 기술의 도입을 재밌게 즐기며
                주도했다. 새로운 기술을 통해 구조를 개선하고 문제를 해결하며
                즐거워 하는 모습을 자주 봤다. 다른 팀과의 소통에서 부드럽지만
                확고한 모습을 보여주었다. 다양한 지식을 바탕으로 근거있는 의견을
                제시하고 상대방의 의견도 존중하는 높은 수준의 대화스킬을
                갖고있다. 팀의 대화를 물흐르듯 부드럽게 이끌고 회의 내용을
                정리하는 능력도 수준급이다. 본연의 업무인 개발을 제일 즐기고
                사랑하는것을 느낄수 있을 정도로 즐겁게 공부하고 개발을 한다.
                맡은 업무의 성과를 올리기위해 누가 시키지 않아도 연구하고
                노력한다. 8개월 이상 함께하며 믿고 맡길수있는 든든한 동료
                개발자이자, 공부를 이끌어 주는 선생님이 되어주었다.
              </AlertDescription>
            </Alert>
            <Alert className="shadow-md">
              <AlertTitle>김현수(백엔드 개발자)</AlertTitle>
              <AlertDescription>
                태수님은 업무를 세심히 분석하고 문서화하며 진행합니다. 덕분에
                태수님과 함께 업무를 진행할 때 효율적으로 작업할 수 있었습니다.
                또한 태수님은 프론트엔드 개발자임에도 불구하고 프론트엔드 외에도
                백엔드와 퍼블리싱 등 다양한 분야에 관심을 갖고 익히려고 합니다.
                이러한 태수님의 모습은 동료들에게 긍정적인 영향을 줍니다.
                태수님은 함께 일하고 싶은 열정 넘치는 개발자이며, 함께 일할 때
                성장을 위한 좋은 자극을 받게 됩니다.
              </AlertDescription>
            </Alert>
            <Alert className="shadow-md">
              <AlertTitle>김민승(프론트엔드 개발자)</AlertTitle>
              <AlertDescription>
                태수님은 개발에 있어서 결코 가볍게 접근하지 않습니다. 원리와
                구조를 철저히 분석하며, 이 과정에서 보여주는 열정과 흥미는 주변
                동료들에게도 큰 영향을 미칩니다. 태수님이 일하는 태도는 함께
                일하고 공부하는 모든 사람들에게 더욱 열심히 공부하고 성장하고자
                하는 욕구를 자극합니다.
              </AlertDescription>
            </Alert>
          </div>
        </InnerCard>
      </Section>
    </main>
  )
}
