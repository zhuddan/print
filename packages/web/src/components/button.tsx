import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    type = 'button',
    ...reset
  } = props

  return (
    <button
      className={clsx(`shadow rounded bg-primary px-4 py-2 text-white`, className)}
      type={type}
      {...reset}
    >
      {children}
    </button>
  )
}
