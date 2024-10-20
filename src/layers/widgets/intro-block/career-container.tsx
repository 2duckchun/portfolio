import { FunctionComponent, HTMLAttributes } from 'react'
import Image from 'next/image'
import { Alert, AlertDescription, AlertTitle, InnerCard } from '../../shared'
interface CareerContainerProps extends HTMLAttributes<HTMLDivElement> {}

const CareerContainer: FunctionComponent<CareerContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <section
      id="career"
      className="h-fit w-full bg-gray-300/50 px-3 py-5 lg:p-10"
    >
      <InnerCard cardTitle="Career" cardDescription="">
        <DeveloperCarrer />
        <Separator />
        <OtherCarrer />
      </InnerCard>
    </section>
  )
}

export { CareerContainer }

const Separator = () => {
  return <div className="my-3 h-[10px] rounded-xl bg-gray-200/90" />
}

const DeveloperCarrer = () => {
  return (
    <div className="flex flex-col gap-3">
      <MarketTree />
      <Dable />
    </div>
  )
}

const MarketTree = () => {
  return (
    <Alert className="m-auto flex flex-col py-10 shadow-md md:flex-row">
      <AlertTitle className="flex items-center justify-center py-4 text-xl md:min-w-[400px] md:text-2xl">
        <Image
          width={50}
          height={50}
          alt={'마켓트리'}
          unoptimized
          style={{
            width: '150px'
          }}
          className="block"
          src={'/images/project/marketTree.jpg'}
        />
        마켓트리
      </AlertTitle>
      <AlertDescription className="text-base">
        <div className="flex h-full flex-col justify-center gap-1">
          <CarrerInfomation
            title={'재직기간'}
            infomation={`2024.05 ~ 2024.08 (4개월)`}
          />
          <CarrerInfomation title={'직책'} infomation={`프론트엔드 개발`} />
          <CarrerInfomation
            title={'회사소개'}
            infomation={`전국의 전통시장과 소비자를 이어주는 웹 이커머스 플랫폼 회사`}
          />
          <div>
            <span className="font-bold">업무</span>
            <ul className="list-disc pl-10 marker:text-slate-600">
              <li>프론트엔드 개발 및 유지보수</li>
              <li>
                프론트엔드에 관련된 모든 설계, 개발, 배포, 유지보수 등 담당.
              </li>
              <li>신규 웹 이커머스 신규 페이지 런칭 및 어드민 페이지 개발</li>
              <li>기존 레거시 웹앱(Vue2) 유지보수</li>
            </ul>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  )
}

const Dable = () => {
  return (
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
            <span className="font-bold">재직기간</span> : 2023.09 ~ 2024.04
            (8개월)
          </p>
          <p>
            <span className="font-bold">직책</span> : 프론트엔드 개발
          </p>
          <p>
            <span className="font-bold">회사소개</span> : 난임으로 어려움을 겪는
            환자들을 위한 각종 필요한 정보들을 제공하는 플랫폼 서비스
          </p>
          <div>
            <span className="font-bold">업무</span>
            <ul className="list-disc pl-10 marker:text-slate-600">
              <li>프론트엔드 개발 및 유지보수</li>
              <li>
                프론트엔드에 관련된 모든 설계, 개발, 배포, 유지보수 등 담당
              </li>

              <li>
                사내 개발 환경 적극 개선
                <ul>
                  <li className="border-l-2 pl-2">
                    프론트엔드 모노레포 도입, 디렉터리 컨벤션 정립 등 유지보수가
                    용이한 프론트엔드 설계 구축
                  </li>
                  <li className="border-l-2 pl-2">
                    엑셀로 관리되는 API 문서를 postman로 변경, 이후 swagger 도입
                  </li>
                  <li className="border-l-2 pl-2">
                    라이센스 이슈가 있는 라이브러리 식별 및 제거 후 재개발 등
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  )
}

const CarrerInfomation = ({
  title,
  infomation
}: {
  title: string
  infomation: string
}) => {
  return (
    <p>
      <span className="font-bold">{title}</span> : <span>{infomation}</span>
    </p>
  )
}

const CarrerJobDirection = () => {}

const OtherCarrer = () => {
  return (
    <>
      <h3 className="py-3 text-center text-2xl font-semibold">Other Career</h3>
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
              <span className="font-bold">재직기간</span> : 2019.12 ~ 2022.04
              (2년 4개월)
            </p>
            <p>
              <span className="font-bold">직책</span> : 사원
            </p>
            <p>
              <span className="font-bold">회사소개</span> : 대한민국의
              사료산업의 발전을 위해 설립된 농림축산식품부 산하 기관
            </p>
            <div>
              <span className="font-bold">업무</span>
              <ul className="list-disc pl-10 marker:text-slate-600">
                <li>통계청 소속 국내 사료 생산 및 원료 사용량 관리</li>
                <li>
                  로이터, 블룸버그 등 외신 및 공시자료를 활용하여 국제 곡물 시장
                  및 물류 동향을 분석하고 농림부 및 사료업계에 고지함
                </li>
                <li>
                  사료산업 보호를 위해 사료원료의 할당관세 배정 근거를 조사하고
                  효과를 분석함
                </li>
              </ul>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </>
  )
}
