'use client'
import GlobalStyles from '@/styles/GlobalStyles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

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
      <main>
        <GlobalStyles />
        {children}
      </main>
    </>
  )
}
