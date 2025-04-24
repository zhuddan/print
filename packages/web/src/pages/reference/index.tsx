import Breadcrumbs from '~/components/breadcrumbs'
import LinkList from '~/components/link-list'
import PageWrapper from '~/layout/page'

export default function Page() {
  return (
    <PageWrapper>
      <Breadcrumbs
        items={[
          { name: 'reference', link: '/reference' },
        ]}
      />
      <LinkList
        links={[
          { link: '/reference/zustand', title: 'zustand' },
          { link: '/reference/react-query', title: 'react-query' },
        ]}
      />
    </PageWrapper>
  )
}
