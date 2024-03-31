'use client'
import Header from '@/components/Header'
import GlobalStyles from '@/styles/GlobalStyles'
import { RecoilRoot } from 'recoil'
import tw from 'twin.macro'

export function NextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>
}
export const NextLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <GlobalStyles />
        <Container>{children}</Container>
      </main>
    </>
  )
}
const Container = tw.div`container h-full mx-auto mt-60pxr max-w-5xl bg-slate-50`
