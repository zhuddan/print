import Breadcrumbs from '~/components/breadcrumbs'
import LinkList from '~/components/link-list'

import PageWrapper from '~/layout/page'

export default function Page() {
  return (
    <PageWrapper>
      <Breadcrumbs
        items={[
          { name: 'reference', link: '/reference' },
          { name: 'react-query', link: '/reference/react-query' },
        ]}
      />
      <LinkList
        links={[
          { title: 'list', link: '/reference/react-query/list' },
          { title: 'detail', link: '/reference/react-query/detail/1001' },
        ]}
      />
    </PageWrapper>
  )
}
