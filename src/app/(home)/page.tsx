'use client'

import {
  BgTypingContainer,
  CareerContainer,
  PeerReviewContainer,
  SkillSetContainer,
  AboutMeContainer,
  ProjectRecordContainer
} from '@/src/layers/widgets'

export default function Home() {
  return (
    <main>
      <BgTypingContainer />
      <AboutMeContainer />
      <SkillSetContainer />
      <CareerContainer />
      <ProjectRecordContainer />
      <PeerReviewContainer />
    </main>
  )
}
