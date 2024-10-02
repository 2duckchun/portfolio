import { FunctionComponent, HTMLAttributes } from 'react'
import { Alert, AlertDescription, AlertTitle, InnerCard } from '../../shared'
interface PeerReviewProps extends HTMLAttributes<HTMLDivElement> {}

const PeerReviewContainer: FunctionComponent<PeerReviewProps> = ({
  className
}) => {
  return (
    <section
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
              있었으며, 좋은 의사소통이 무엇인지 알게 되었습니다. 항상 좋은 설계
              좋은 코드가 무엇인지 연구하신 덕분에 아키텍처 설계에 좋은 영향을
              받았습니다. 항상 제일 먼저 출근 하시고, 성격 또한 유머러스하셔서
              함께 업무할 때 너무 재미있게 작업할 수 있었습니다!! 더 좋은 곳에서
              꼭 다시 만나서 일하고 싶습니다!! 🙏
            </AlertDescription>
          </Alert>
          <Alert className="shadow-md">
            <AlertTitle>주형인(앱 개발자)</AlertTitle>
            <AlertDescription>
              끊임없이 공부하고 습득하여 새로운 기술의 도입을 재밌게 즐기며
              주도했다. 새로운 기술을 통해 구조를 개선하고 문제를 해결하며
              즐거워 하는 모습을 자주 봤다. 다른 팀과의 소통에서 부드럽지만
              확고한 모습을 보여주었다. 다양한 지식을 바탕으로 근거있는 의견을
              제시하고 상대방의 의견도 존중하는 높은 수준의 대화스킬을 갖고있다.
              팀의 대화를 물흐르듯 부드럽게 이끌고 회의 내용을 정리하는 능력도
              수준급이다. 본연의 업무인 개발을 제일 즐기고 사랑하는것을 느낄수
              있을 정도로 즐겁게 공부하고 개발을 한다. 맡은 업무의 성과를
              올리기위해 누가 시키지 않아도 연구하고 노력한다. 8개월 이상
              함께하며 믿고 맡길수있는 든든한 동료 개발자이자, 공부를 이끌어
              주는 선생님이 되어주었다.
            </AlertDescription>
          </Alert>
          <Alert className="shadow-md">
            <AlertTitle>김현수(백엔드 개발자)</AlertTitle>
            <AlertDescription>
              태수님은 업무를 세심히 분석하고 문서화하며 진행합니다. 덕분에
              태수님과 함께 업무를 진행할 때 효율적으로 작업할 수 있었습니다.
              또한 태수님은 프론트엔드 개발자임에도 불구하고 프론트엔드 외에도
              백엔드와 퍼블리싱 등 다양한 분야에 관심을 갖고 익히려고 합니다.
              이러한 태수님의 모습은 동료들에게 긍정적인 영향을 줍니다. 태수님은
              함께 일하고 싶은 열정 넘치는 개발자이며, 함께 일할 때 성장을 위한
              좋은 자극을 받게 됩니다.
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
    </section>
  )
}

export { PeerReviewContainer }
