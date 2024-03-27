import RankingAll from '@/app/RankingAll'
import RankingIT from '@/app/RankingIT'
import RecommendBookList from '@/components/books/recommend/RecommendBookList'
import { Suspense } from 'react'
export default async function HomePage() {
  const { category } = await getCategoryData()

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <RankingAll />
      </Suspense>
      <RankingIT />
      <RecommendBookList category={category} />
    </>
  )
}

async function getCategoryData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  } catch (e) {
    console.log(e)
  }
}
