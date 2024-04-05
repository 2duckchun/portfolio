import { Section } from '@/src/layers/shared'
import { AboutMeContainer } from '@/src/layers/widgets/intro-block/about-me-container'
import { FirstNotebookIntroContainer } from '@/src/layers/widgets/intro-block/first-notebook-intro-container'

export default function Home() {
  return (
    <main>
      <Section className="z-20 h-screen bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        {/* Canvas z-index 조절 */}
        <FirstNotebookIntroContainer className="z-0 h-full" />
      </Section>
      <Section className="h-fit w-full bg-app-primary-002 px-3 py-5 lg:p-10">
        <AboutMeContainer />
      </Section>
      <Section className="h-[500px] w-full bg-app-primary-003">
        Skill Set
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
