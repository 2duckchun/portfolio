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
      <BgTypingContainer />
      <AboutMeContainer />
      <SkillSetContainer />
      <CareerContainer />
      <ProjectRecordContainer />
      <PeerReviewContainer />
    </main>
  )
}
