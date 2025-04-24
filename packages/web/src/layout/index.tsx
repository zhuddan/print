import { Outlet } from 'react-router-dom'
import NavBar from './nav-bar'

export default function Layout() {
  return (
    <main>
      <NavBar />
      <section
        className="mt-14"
        style={{
          height: 'var(--content-height)',
        }}
      >
        <Outlet />
      </section>
    </main>
  )
}
