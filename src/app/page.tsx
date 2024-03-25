import RankingIT from '@/components/RankingIT'
import RecommendBookList from '@/components/RecommendBookList'
export default async function HomePage() {
  const { category } = await getCategoryData()

  return (
    <>
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
