'use client'

import { Section, useTypingEffect } from '@/src/layers/shared'
import { SkillSetContainer } from '@/src/layers/widgets'
import { AboutMeContainer } from '@/src/layers/widgets'
import { ProjectRecordContainer } from '@/src/layers/widgets/intro-block/project-record-container'

export default function Home() {
  const { word } = useTypingEffect(
    [
      '협업하기 편한',
      '끊임없이 공부하는',
      '조직을 위해 일하는',
      '기술적 호기심이 왕성한',
      '멋쟁이 프론트엔드',
    ],
    130,
    20,
  )

  return (
    <main>
      <Section className="z-20 h-screen bg-black/80 bg-gradient-to-t">
        {/* 모바일 환경에서 canvas 영역때문에 터치 스크롤 다운이 되지 않는 현상을 CSS로 수정함 */}
        <div className="flex h-full grow items-center justify-center text-3xl">
          <div className="w-full text-center text-white">
            <p>안녕하세요!</p>
            <p className="h-[40px]">
              <span className="text-4xl text-blue-300">{word}</span> 개발자
            </p>
            <p>김태수의 포트폴리오입니다.</p>
          </div>
        </div>
      </Section>
      <Section className="h-fit w-full bg-gray-400/50 px-3 py-5 lg:p-10">
        <AboutMeContainer />
      </Section>
      <Section className="h-fit w-full bg-gray-300/50 px-3 py-5 lg:p-10">
        <SkillSetContainer />
      </Section>
      <Section className="h-fit w-full bg-gray-200/50 px-3 py-5 lg:p-10">
        <ProjectRecordContainer />
      </Section>
      <Section className="h-[500px] w-full bg-app-primary-003">
        Improvement
      </Section>
      <Section className="h-[500px] w-full bg-app-primary-002">
        Peer Review
      </Section>
    </main>
  )
}
