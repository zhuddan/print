import { Link, useLocation } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

const menu: {
  path: string
  title: string
}[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/reference',
    title: 'Reference',
  },
]
export default function NavBar() {
  const { pathname } = useLocation()
  return (
    <nav
      className="shadow bg-white flex items-center px-4 fixed top-0 left-0 right-0"
      style={{
        height: 'var(--nav-bar-height)',
      }}
    >
      <h1>
        <Link to="/">
          <img src={reactLogo} alt="" />
          <div className="flex-1"></div>
        </Link>
      </h1>
      <div className="flex-1 text-center text-bold">
      </div>
      <ul className="menu flex items-center">
        {
          menu.map(item => (
            <li
              className={`ml-2 ${pathname === item.path ? 'text-primary' : ''}`}
              key={item.path}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
