import clsx from 'clsx'
import { Fragment, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconoirSlash } from './icons'

interface BreadcrumbsItem {
  name: string
  link: string
}
interface BreadcrumbsProps {
  items: BreadcrumbsItem[]
}
export default function Breadcrumbs(props: BreadcrumbsProps) {
  const { items } = props
  const location = useLocation()
  const pathname = useMemo(() => {
    return location.pathname
  }, [location])
  return (
    <nav className="flex items-center">
      {items.map((item, index) => {
        return (
          <Fragment key={item.name}>
            <Link
              to={item.link}
              className={
                clsx(
                  item.link === pathname ? 'text-primary' : '',
                  'capitalize',
                )
              }
            >
              {item.name}
            </Link>
            {
              index !== items.length - 1 && <IconoirSlash />
            }
          </Fragment>
        )
      })}
    </nav>
  )
}
