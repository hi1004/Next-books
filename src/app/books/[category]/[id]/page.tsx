import DetailBooks from '@/components/books/DetailBooks'
import { notFound } from 'next/navigation'

const BookPage = async ({
  params,
}: {
  params: { category: string; id: string }
}) => {
  const { category, id } = params
  const book = await getData(category, id)
  return <DetailBooks book={book} />
}

export default BookPage

async function getData(category: string, id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books?category=${category}&id=${id}`,
    )

    if (!res.ok) {
      notFound()
    }
    return res.json()
  } catch (e) {
    console.log(e)
  }
}
