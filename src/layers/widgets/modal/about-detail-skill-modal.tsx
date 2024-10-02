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
            Centos7에서 node 18버전이 호환되지 않아 Next 프로젝트가 배포되지
            않은 이슈를 Docker의 도입으로 해결한 경험이 있음.
          </li>
          <li>이미지, 컨테이너 등 기본적인 기능을 자유롭게 이용할 수 있음.</li>
          <li>
            필요성이 있다면 쿠버네티스 등 도커를 활용할 수 있는 기술을 습득할
            예정
          </li>
        </ul>
      )
    case 'typescript':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>대부분의 프로젝트에 타입스크립트 사용 중</li>
          <li>
            기본적인 타입 및 제네릭, 조건부타입, keyof, typeof 등 필요한 문법을
            프로젝트에 맞게 도입할 수 있음
          </li>
        </ul>
      )
    case 'github':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>사내 프론트엔드 브랜치 및 버전 관리를 담당함.</li>
          <li>팀의 브랜치 전략에 빠르게 적응 가능.</li>
          <li>레퍼런스를 활용해 github Actions CI/CD 구축 가능</li>
        </ul>
      )
    case 'firebase':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>
            개인 프로젝트 제작 때 firebase의 NoSQL + 실시간 데이터베이스를
            사용해본 경험이 있음.
          </li>
          <li>기본적인 CRUD 구현은 자유롭게 가능</li>
          <li>레퍼런스를 활용하여 업무에 필요한 기능을 구축할 수 있음.</li>
        </ul>
      )
    case 'nestjs':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>간단한 OAuth, CRUD 서버를 구축할 수 있음.</li>
          <li>
            사내 백엔드 개발자가 작성한 Nestjs 코드를 함께 리뷰하며 협업한
            경험이 있음.
          </li>
          <li>Nestjs의 파이프라인에 대해 이해하고 있음.</li>
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
          <li>React 한글 공식문서 오픈소스 번역에 참여한 경험이 있음.</li>
        </ul>
      )
    case 'nextjs':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>현재 주력 개발 프레임워크.</li>
          <li>App Router를 자유롭게 활용할 수 있음.</li>
          <li>
            hydrate, RSC Payload 등 리액트 서버컴포넌트의 구성요소를 이해하고
            있으며, 이를 통해 개발 구상 단계에서 SSR, CSR를 구분지어 사고할 수
            있음.
          </li>
          <li>
            유지보수가 용이한 레이아웃 및 디렉토리 구조를 구현하기 위해
            고민하며, 이에 대한 본인의 생각을 블로그에 포스팅하고 있음.
          </li>
        </ul>
      )
    case 'html-js-css':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>시맨틱 태그 등을 마크업에 자유롭게 활용할 수 있음.</li>
          <li>
            CSS를 구조적으로 설계하며, 디자인에 맞는 스타일을 웹에 추가할 수
            있음.
          </li>
          <li>
            배열 프로토타입 메서드 구현, 소스코드 평가 순서 등 자바스크립트의
            동작원리를 연구하며 자바스크립트의 탄탄한 기초를 쌓았음.
          </li>
        </ul>
      )
    case 'tailwind':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>
            공식문서를 활용하여 필요한 기능들을 자유롭게 프로젝트에 추가할 수
            있음. (theme, extends, plugin 등)
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
            사내 프론트엔드 전역 상태 관리 툴로써 zustand를 주도적으로 도입함.
          </li>
          <li>공식문서를 참조하여 필요한 기능을 구현할 수 있음.</li>
        </ul>
      )
    case 'react-query':
      return (
        <ul className="list-disc pl-5 text-base text-black">
          <li>
            사내 프론트엔드 서버 상태 관리 툴로써 React-Query를 주도적으로
            도입함.
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
          <li>
            Vue2로 개발된 회사의 레거시 프로젝트를 유지보수했던 경험이 있음.
          </li>
          <li>Vue3로 개발된 회사의 최신 프로젝트 개발에 기여한 경험이 있음.</li>
        </ul>
      )
    default:
      return <p>개발중입니다.</p>
  }
}
