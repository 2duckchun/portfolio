import { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/src/layers/shared'
import { cn } from '@/src/layers/shared/lib/utils'
interface InnerCardProps extends HTMLAttributes<HTMLDivElement> {
  cardTitle: string | ReactNode
  cardDescription: string
  isNested?: boolean
  children: ReactNode
}

const InnerCard: FunctionComponent<InnerCardProps> = ({
  className,
  cardTitle,
  cardDescription,
  isNested = false,
  children,
  ...props
}) => {
  const titleFontSize = isNested ? 'text-xl' : 'text-2xl md:text-3xl'
  const descriptionFontSize = isNested ? 'text-md' : 'text-base md:text-xl'
  const cardPadding = isNested ? 'p-2 lg:p-5' : 'p-2 lg:p-10'
  const cardShadow = isNested ? 'shadow-md' : 'shadow-2xl'

  return (
    <Card
      className={cn(
        'bg-white max-w-[1280px] m-auto rounded-3xl shadow-2xl ',
        cardShadow,
        cardPadding,
        className
      )}
      {...props}
    >
      <CardHeader className={cn(cardPadding)}>
        <CardTitle className={cn('text-center font-sans', titleFontSize)}>
          {cardTitle}
        </CardTitle>
        <CardDescription className={cn('text-center', descriptionFontSize)}>
          {cardDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 lg:p-3">{children}</CardContent>
    </Card>
  )
}

export { InnerCard }
