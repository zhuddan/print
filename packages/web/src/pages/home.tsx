import { Link } from 'react-router-dom'
import PageWrapper from '../layout/page'

export default function Home() {
  return (
    <PageWrapper className="flex justify-center flex-col items-center">
      <Link to="/reference" className="text-lg font-bold">reference</Link>
    </PageWrapper>
  )
}
