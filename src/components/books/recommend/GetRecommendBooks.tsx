import RecommendBookList from '@/components/books/recommend/RecommendBookList'

const GetRecommendBooks = async () => {
  const category = await getCategoryData()
  return <RecommendBookList category={category} />
}

export default GetRecommendBooks
async function getCategoryData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json().then((data) => data.category)
  } catch (e) {
    console.log(e)
  }
}
