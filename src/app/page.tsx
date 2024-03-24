import BookList from '@/components/BookList'
import BookRankingList from '@/components/BookRankingList'
import Text from '@/components/shared/Text'
export default async function HomePage() {
  const { category } = await getCategoryData()

  return (
    <>
      <Text>text</Text>

      <BookRankingList />

      <BookList category={category} />
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
