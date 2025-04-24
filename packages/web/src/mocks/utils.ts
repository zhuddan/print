import { HttpResponse } from 'msw'

export type ResponseResult<T extends object = object> = {
  code: number
  message: string
} & T

export interface ResponseResultData<T extends object> {
  data: T
}

export function createResponseResultData<T extends object>(data: T) {
  return HttpResponse.json<ResponseResult<ResponseResultData<T>>>({
    code: 200,
    message: 'SUCCESS',
    data,
  })
}

export function createResponseResultError({
  code = 500,
  message = 'ERROR',
}: Partial<ResponseResult> = {}) {
  return HttpResponse.json<ResponseResult>({
    code,
    message,
  })
}
