export interface Reference {
  to: string
  title: React.ReactNode
}

export default [
  {
    to: '/reference/zustand',
    title: 'zustand',
  },
  {
    to: '/reference/react-query',
    title: 'react-query',
  },
] satisfies Reference[]
