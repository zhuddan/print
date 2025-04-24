import type { Product } from './types/product'
import type { ResponseResultData } from '~/mocks/utils'
import { API_URLS } from '~/constants/urls'
import { request } from '~/utils/request'

/**
 * 获取产品列表
 */
export function getProductList() {
  return request<ResponseResultData<Product[]>>(API_URLS.PRODUCT_LIST)
}

/**
 * 获取产品列表
 */
export function getProductDetail(id: number) {
  return request<ResponseResultData<Product>>(API_URLS.PRODUCT_DETAIL + id)
}
