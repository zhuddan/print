import type { ResponseResult } from '~/mocks/utils'

export function request<T extends object>(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(input, init).then(res => res.json()) as Promise<ResponseResult<T>>
}
