import clsx from 'clsx'
import Button from './button'
import { MaterialSymbolsLightErrorOutline } from './icons'

interface ErrorFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  onRetry?: () => void
  error?: Error
}

export default function ErrorFeedback(props: ErrorFeedbackProps) {
  const {
    className,
    style,
    children,
    onRetry,
    error,
    ...rest
  } = props

  function handleClick() {
    onRetry?.()
  }
  return (
    <div
      className={clsx('size-full flex items-center justify-center flex-col', className)}
      style={
        style
      }
      {
        ...rest
      }
    >
      <MaterialSymbolsLightErrorOutline color="#087ea4" fontSize={60} />
      {
        children || (
          <>
            <p className=" font-bold text-primary">{error?.message}</p>
            <Button onClick={handleClick} className="mt-4">重试</Button>
          </>
        )
      }
    </div>
  )
}
