import { Link } from 'react-router-dom'

export interface LinkType {
  title: string
  link: string
}

export default function LinkList({
  links,
}: {
  links: LinkType[]
}) {
  return (
    <ul className="pl-4 mt-4">
      {
        links.map((item) => {
          return (
            <li
              key={item.link}
              className="text-lg items-center  list-disc list-item"
            >
              <Link to={item.link} className=" hover:text-primary hover:underline inline-block">
                {item.title}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
