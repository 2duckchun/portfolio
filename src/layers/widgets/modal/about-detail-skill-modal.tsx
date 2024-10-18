'use client'

import { FunctionComponent, HTMLAttributes } from 'react'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  useIsMounted,
  useSkillModalStore
} from '@/src/layers/shared'
interface AboutDetailSkillModalProps extends HTMLAttributes<HTMLDivElement> {}

const AboutDetailSkillModal: FunctionComponent<
  AboutDetailSkillModalProps
> = () => {
  const {
    modalData: { isOpen, type },
    toggle
  } = useSkillModalStore()

  const isMounted = useIsMounted()

  if (!isMounted) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="w-[500px] max-w-[90%] rounded-lg px-10">
        <DialogHeader className="items-center justify-center font-black-han-sans text-2xl">
          {HeaderMapper(type)}
        </DialogHeader>
        <DialogDescription>{ContentMapper(type)}</DialogDescription>
        <DialogFooter>
          <DialogClose className="w-full">
            <Button className="w-full">닫기</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { AboutDetailSkillModal }

const HeaderMapper = (type: SkillSet) => {
  switch (type) {
    case 'nextjs':
      return 'Next.js'
    case 'docker':
      return 'Docker'
    case 'firebase':
      return 'Firebase'
    case 'html-js-css':
      return 'HTML, JS, CSS'
    case 'react':
      return 'React'
    case 'tailwind':
      return 'Tailwind'
    case 'react-query':
      return 'React-Query'
    case 'zustand':
      return 'zustand'
    case 'github':
      return 'github'
    case 'nestjs':
      return 'Nestjs'
    case 'vue':
      return 'Vue'
    case 'typescript':
      return 'TypeScript'
  }
}

const ContentMapper = (type: SkillSet) => {
  switch (type) {
    case 'docker':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>
            운영체제 node18버전 호환 이슈를 Docker의 도입으로 해결한 경험이 있음
          </li>
          <li>gitlab runner와 연동해 CI/CD를 구축한 경험이 있음</li>
        </ul>
      )
    case 'typescript':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>모든 프로젝트에 타입스크립트 사용 중</li>
          <li>기본적인 타입을 자유롭게 다루며 개발할 수 있음</li>
        </ul>
      )
    case 'github':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>사내 프론트엔드 브랜치 및 버전 관리를 담당함</li>
          <li>팀의 브랜치 전략에 빠르게 적응 가능</li>
          <li>레퍼런스를 활용해 github Actions CI/CD 구축 가능</li>
        </ul>
      )
    case 'firebase':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>레퍼런스를 활용하여 업무에 필요한 기능을 구축할 수 있음</li>
        </ul>
      )
    case 'nestjs':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>간단한 OAuth, CRUD 서버를 구축할 수 있음</li>
          <li>
            Guard, Exception 등의 기능을 활용해 효율적으로 예외처리를 하며
            개발할 수 있음
          </li>
          <li>Swagger를 활용하여 API를 적절히 문서화할 수 있음</li>
        </ul>
      )
    case 'react':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>현재 주력 개발 라이브러리.</li>
          <li>
            함수형 컴포넌트, hooks, custom hooks 등 리액트 함수형 컴포넌트를
            자유롭게 개발에 활용할 수 있음.
          </li>
          <li>
            React 한글 공식문서 오픈소스 번역에 참여한 경험이 있음.
            <ul>
              <li className="pl-2">
                <a
                  className="text-blue-500 underline"
                  href="https://ko.react.dev/reference/react/useEffect"
                  target="_blank"
                >
                  useEffect
                </a>
              </li>
              <li className="pl-2">
                <a
                  className="text-blue-500 underline"
                  href="https://ko.react.dev/reference/react/useReducer"
                  target="_blank"
                >
                  useReducer
                </a>
              </li>
            </ul>
          </li>
        </ul>
      )
    case 'nextjs':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>현재 주력 개발 프레임워크.</li>
          <li>App Router를 주로 사용하고 있음.</li>
          <li>SSR, Server Action 등을 자유롭게 이용할 수 있음.</li>
          <li>
            SSR과 CSR을 효과적으로 분리하는 것에 관심이 많으며, 무분별한 SSR
            적용은 지양하고 있음.
          </li>
        </ul>
      )
    case 'html-js-css':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>기본적인 퍼블리싱, CSS 작업을 무리없이 수행할 수 있음.</li>
          <li>자바스크립트의 기초적 토대를 계속 쌓으려 노력하는 중</li>
          <ul className="mt-1 pl-2 text-sm">
            <li className="border-l-2 border-l-gray-600/50 py-1 pl-2">
              배열 프로토타입 메서드(map, reduce 등)구현에 대한 연구
            </li>
            <li className="border-l-2 border-l-gray-600/50 py-1 pl-2">
              에러 클래스 확장 및 에러를 효율적으로 다루는 것에 대한 연구
            </li>
            <li className="border-l-2 border-l-gray-600/50 py-1 pl-2">
              그 외 mdn 문서를 보며 꾸준히 JS 기초 지식을 습득하는 중
            </li>
          </ul>
        </ul>
      )
    case 'tailwind':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>
            공식문서를 활용하여 필요한 기능들을 자유롭게 프로젝트에 추가할 수
            있음
          </li>
          <li>
            preset 기능을 활용하여 모노레포 환경에서 사내 프로젝트에 공통적으로
            포함되는 스타일 세팅을 분리하여 관리한 경험이 있음
          </li>
        </ul>
      )
    case 'zustand':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>
            top-down 방식의 상태 설계를 하고자 zustand를 도입한 경험이 있음.
          </li>
          <li>공식문서를 참조하여 필요한 기능을 구현할 수 있음.</li>
        </ul>
      )
    case 'react-query':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>
            서버(DB)와 클라이언트 간 데이터를 동기화하기 위해 주도적으로 사내
            프로젝트에 React Query를 도입해 사용함.
          </li>
          <li>
            prefetch 기능을 활용하여 SSR 환경에서 렌더링에 필요한 데이터를 미리
            캐싱하는 등의 전략을 구현한 경험이 있음.
          </li>
          <li>공식문서를 참조하여 필요한 기능을 구현할 수 있음.</li>
        </ul>
      )
    case 'vue':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>Vue2 레거시 프로젝트를 유지보수한 경험이 있음.</li>
        </ul>
      )
    default:
      return <p>개발중입니다.</p>
  }
}
