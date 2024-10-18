import { ReactNode } from 'react'

export const ProjectExplanationDiv = ({
  title,
  description
}: {
  title: string
  description: ReactNode
}) => {
  const parsedDescription = Array.isArray(description)
    ? description.join(' ,')
    : description
  return (
    <div>
      <p>
        <span className="font-bold">{title}</span>
      </p>
      {parsedDescription}
    </div>
  )
}
