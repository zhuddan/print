import Breadcrumbs from '~/components/breadcrumbs'
import ErrorFeedback from '~/components/error-feedback'
import PendingFeedback from '~/components/pending-feedback'
import ProductItem from '~/components/product-item'
import PageWrapper from '~/layout/page'
import { useProductList } from '~/state/queries/product'

export default function Page() {
  const { data, isPending, isError, refetch } = useProductList()
  return (
    <PageWrapper>
      <Breadcrumbs
        items={[
          { name: 'reference', link: '/reference' },
          { name: 'react-query', link: '/reference/react-query' },
          { name: 'list', link: '/reference/react-query/list' },
        ]}
      />
      {
        isPending
          ? (
              <PendingFeedback
                title="Load product list"
                style={{
                  height: 'calc(100% - 2rem - 24px)',
                }}
              />
            )
          : isError
            ? <ErrorFeedback onRetry={refetch} />
            : (
                <ul>
                  {
                    data?.map((item) => {
                      return <ProductItem key={item.id} data={item} />
                    })
                  }
                </ul>
              )
      }

    </PageWrapper>
  )
}
