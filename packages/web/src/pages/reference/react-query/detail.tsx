import { useMemo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '~/components/breadcrumbs'
import ErrorFeedback from '~/components/error-feedback'
import PendingFeedback from '~/components/pending-feedback'
import PageWrapper from '~/layout/page'
import { useProductDetail } from '~/state/queries/product'

export default function Page() {
  const params = useParams()
  const id = useMemo(() => {
    const id = Number(params.id)
    return Number.isNaN(id) ? undefined : id
  }, [params])

  const { data, isPending, isError, refetch, error } = useProductDetail(id)
  return (
    <PageWrapper>
      <Breadcrumbs
        items={[
          { name: 'reference', link: '/reference' },
          { name: 'react-query', link: '/reference/react-query' },
          { name: 'detail', link: '/reference/react-query/detail' },
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
            ? <ErrorFeedback onRetry={refetch} error={error} />
            : (
                <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] mt-2 gap-4">
                  <LazyLoadImage
                    className="size-full sm:size-80 rounded row-span-2 object-cover"
                    src={data.cover}
                  />
                  <div>
                    <h2 className="col-start-2 font-bold ">{data.title}</h2>
                    <p className="col-start-2 text-sm line-clamp-2 h-10 ">{data.subtitle}</p>
                  </div>
                </div>
              )
      }

    </PageWrapper>
  )
}
