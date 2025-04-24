import Breadcrumbs from '~/components/breadcrumbs'
import Button from '~/components/button'
import PageWrapper from '~/layout/page'
import { useAppStore } from '~/state/app'

export default function Page() {
  return (
    <PageWrapper>
      <Breadcrumbs
        items={[
          { name: 'reference', link: '/reference' },
          { name: 'zustand', link: '/reference/zustand' },
        ]}
      />
      <div className="mt-4 flex items-center">
        <Reduce />
        <Result />
        <Increase />
      </div>
    </PageWrapper>
  )
}

function Result() {
  const count = useAppStore(state => state.count)
  return (
    <div className="mx-5 w-8 text-primary text-center font-bold">
      {count}
    </div>
  )
}

function Increase() {
  const increase = useAppStore(state => state.increase)
  return (
    <Button onClick={increase}>+</Button>
  )
}

function Reduce() {
  const reduce = useAppStore(state => state.reduce)
  return (
    <Button onClick={reduce}>-</Button>
  )
}
