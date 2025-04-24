import type { Product } from '~/api/types/product'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'

export default function ProductItem({
  data,
}: {
  data: Product
}) {
  const navigate = useNavigate()
  function handleClick() {
    navigate(`/reference/react-query/${data.id}`)
  }
  return (
    <li
      key={data.id}
      onClick={handleClick}
      className="grid gap-x-2 m-4 shadow rounded-sm overflow-hidden"
      style={{
        gridTemplateColumns: '5rem 1fr auto',
      }}
    >
      <LazyLoadImage
        className="size-20 rounded row-span-2 object-cover"
        src={data.cover}
      />
      <h2 className="col-start-2 font-bold  ">{data.title}</h2>
      <p className="col-start-2 text-sm line-clamp-2 h-10">{data.subtitle}</p>
    </li>
  )
}
