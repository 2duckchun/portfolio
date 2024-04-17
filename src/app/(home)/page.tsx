'use client'

import { Section } from '@/src/layers/shared'
import {
  BgTypingContainer,
  CareerContainer,
  PeerReviewContainer,
  SkillSetContainer,
  AboutMeContainer,
  ProjectRecordContainer,
} from '@/src/layers/widgets'

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
        <CareerContainer />
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
        <PeerReviewContainer />
      </Section>
    </main>
  )
}
