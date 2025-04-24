import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'

const queryCache = new QueryCache({
  onError(e) {
    // eslint-disable-next-line no-console
    console.log(e)
  },
})
const mutationCache = new MutationCache({
  onError(e) {
    // eslint-disable-next-line no-console
    console.log(e)
  },
})

const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
})
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
