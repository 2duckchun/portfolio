import { cn } from '@/src/layers/shared/lib/utils'
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/layers/shared'
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
  const titleFontSize = isNested ? 'text-xl' : 'text-3xl'
  const descriptionFontSize = isNested ? 'text-md' : 'text-xl'
  const cardPadding = isNested ? 'p-2 lg:p-5' : 'p-3 lg:p-10'

  return (
    <Card
      className={cn(
        'bg-white max-w-[1280px] min-h-[500px] m-auto rounded-3xl shadow-2xl',
        cardPadding,
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
      <CardContent className=" p-2 md:p-6">{children}</CardContent>
    </Card>
  )
}

export { InnerCard }
