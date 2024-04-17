import { FunctionComponent, HTMLAttributes } from 'react'
import { Alert, AlertDescription, AlertTitle, InnerCard } from '../../shared'
import Image from 'next/image'
interface CareerContainerProps extends HTMLAttributes<HTMLDivElement> {}

const CareerContainer: FunctionComponent<CareerContainerProps> = ({
  className,
  ...props
}) => {
  return (
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
                <span className="font-bold">재직기간</span> : 2023.09 ~ 2024.04
                (8개월)
              </p>
              <p>
                <span className="font-bold">직책</span> : 프론트엔드 개발
              </p>
              <p>
                <span className="font-bold">회사소개</span> : 난임으로 어려움을
                겪는 환자들을 위한 각종 필요한 정보들을 제공하는 플랫폼 서비스
                회사입니다.
              </p>
              <div>
                <span className="font-bold">업무</span>
                <ul className="list-disc pl-10 marker:text-slate-600">
                  <li>회사의 메인 프론트엔드 개발자로 업무를 진행했습니다.</li>
                  <li>
                    프론트엔드에 관련된 모든 설계, 개발, 배포, 유지보수 등을
                    담당했습니다.
                  </li>
                  <li>
                    어드민 프로젝트의 모노레포 도입 및 디렉토리 컨벤션 정립 등
                    유지보수가 편하고 지속가능한 프론트엔드 개발 환경을 구축한
                    경험이 있습니다.
                  </li>
                  <li>
                    엑셀 API 문서를 postman으로 변경하거나, 라이센스 이슈가 있는
                    라이브러리를 찾아 제거하는 등 사내 개발 환경을 적극적으로
                    개선한 경험이 있습니다.
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
                <span className="font-bold">재직기간</span> : 2023.02 ~ 2023.05
                (3개월)
              </p>
              <p>
                <span className="font-bold">직책</span> : 프론트엔드 개발
              </p>
              <p>
                <span className="font-bold">회사소개</span> : 버스 부분에 특화된
                모빌리티 관제 플랫폼 서비스 회사입니다.
              </p>
              <div>
                <span className="font-bold">업무</span>
                <ul className="list-disc pl-10 marker:text-slate-600">
                  <li>
                    프론트엔드 개발자로써 웹 개발 및 유지보수 업무를
                    담당했습니다.
                  </li>
                  <li>
                    Vue2, 네이버 지도 API를 이용하여 전세버스 수요조사를 위한
                    사내 웹 프로젝트를 개발했으며, 네이버 클러스터링 API 코드를
                    직접 수정하여 성능을 최적화한 경험이 있습니다.
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
                <span className="font-bold">재직기간</span> : 2019.12 ~ 2022.04
                (2년 4개월)
              </p>
              <p>
                <span className="font-bold">직책</span> : 사원
              </p>
              <p>
                <span className="font-bold">회사소개</span> : 대한민국의
                사료산업의 발전을 위해 설립된 농림축산식품부 산하 기관입니다.
              </p>
              <div>
                <span className="font-bold">업무</span>
                <ul className="list-disc pl-10 marker:text-slate-600">
                  <li>
                    통계청 소속의 국내 사료 생산 및 원료 사용량을 관리했습니다.
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
  )
}

export { CareerContainer }
