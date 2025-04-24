import { http } from 'msw'
import { API_URLS } from '~/constants/urls'
import { products } from '../data/product'
import { createResponseResultData, createResponseResultError } from '../utils'

export default [
  http.get(API_URLS.PRODUCT_LIST, () => {
    return createResponseResultData(products)
  }),
  http.get(`${API_URLS.PRODUCT_DETAIL}:id`, (req) => {
    const { id } = req.params // 获取动态参数 id
    const product = products.find(e => `${e.id}` === id)
    if (!product) {
      return createResponseResultError({
        message: 'no data',
      })
    }
    return createResponseResultData(product)
  }),
]
