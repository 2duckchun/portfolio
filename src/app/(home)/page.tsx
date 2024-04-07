import { Section } from '@/src/layers/shared'
import { SkillSetContainer } from '@/src/layers/widgets'
import { AboutMeContainer } from '@/src/layers/widgets'
import { FirstNotebookIntroContainer } from '@/src/layers/widgets'

export default function Home() {
  return (
    <main>
      <Section className="z-20 h-screen bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        {/* 모바일 환경에서 canvas 영역때문에 터치 스크롤 다운이 되지 않는 현상을 CSS로 수정함 */}
        <div className="h-[70%] pt-20 md:h-full md:p-0">
          <FirstNotebookIntroContainer className="z-0 h-full" />
        </div>
      </Section>
      <Section className="h-fit w-full bg-app-primary-002 px-3 py-5 lg:p-10">
        <AboutMeContainer />
      </Section>
      <Section className="h-fit w-full bg-app-primary-003  px-3 py-5 lg:p-10">
        <SkillSetContainer />
      </Section>
      <Section className="h-[500px] w-full bg-app-primary-004">
        Projects
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
