import { cn } from '@/src/layers/shared/lib/utils'
import { FunctionComponent, HTMLAttributes } from 'react'
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
