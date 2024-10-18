export const ProjectExplanationParagraph = ({
  title,
  description
}: {
  title: string
  description: string | string[]
}) => {
  const parsedDescription = Array.isArray(description)
    ? description.join(' ,')
    : description
  return (
    <p>
      <span className="font-bold">{title}</span> : {parsedDescription}
    </p>
  )
}
