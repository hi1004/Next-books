'use client'
import GlobalStyles from '@/styles/GlobalStyles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import tw from 'twin.macro'

const queryClient = new QueryClient()
export function NextProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
export const NextLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header></header>
      <main className="">
        <GlobalStyles />
        <Container>{children}</Container>
      </main>
    </>
  )
}
const Container = tw.div`px-14pxr container h-full mx-auto max-w-5xl bg-gray-50`
