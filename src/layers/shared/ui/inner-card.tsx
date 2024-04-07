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
  title: string
  description: string
  children: ReactNode
}

const InnerCard: FunctionComponent<InnerCardProps> = ({
  className,
  title,
  description,
  children,
  ...props
}) => {
  return (
    <Card
      className={cn(
        'bg-white max-w-[1280px] min-h-[500px] m-auto rounded-3xl shadow-2xl p-3 lg:p-10',
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-center font-black-han-sans text-4xl">
          {title}
        </CardTitle>
        <CardDescription className="text-center text-xl">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 md:p-6">{children}</CardContent>
    </Card>
  )
}

export { InnerCard }
