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

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`)
  if (!res.ok) {
    throw new Error('error')
  }
  return res.json()
}
