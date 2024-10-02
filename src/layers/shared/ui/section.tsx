import { FunctionComponent, HTMLAttributes } from 'react'
import { cn } from '@/src/layers/shared/lib/utils'
interface containerProps extends HTMLAttributes<HTMLDivElement> {}

const Section: FunctionComponent<containerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section className={cn(className)} {...props}>
      {children}
    </section>
  )
}

export { Section }
