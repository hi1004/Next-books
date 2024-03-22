import BookList from '@/components/BookList'
import Text from '@/components/shared/Text'

export default async function HomePage() {
  const { category } = await getData()

  return (
    <>
      <Text>text</Text>
      <BookList category={category} />
    </>
  )
}

async function getData() {
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
