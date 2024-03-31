import { notFound } from 'next/navigation'

const BookPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const book = await getData(id)

  return <div>{book?.itemCaption}</div>
}

export default BookPage

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books?id=${id}`,
    )

    if (!res.ok) {
      notFound()
    }
    return res.json()
  } catch (e) {
    console.log(e)
  }
}
