import clsx from 'clsx'

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function PageWrapper(props: PageWrapperProps) {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <div
      className={clsx('container size-full mx-auto p-4', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
