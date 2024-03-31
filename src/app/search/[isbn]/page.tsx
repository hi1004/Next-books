import Detail from '@/components/books/Detail'
import { notFound } from 'next/navigation'

const BookDetailPage = async ({ params }: { params: { isbn: string } }) => {
  const { isbn } = params
  const BOOK = await getBook(
    `https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json&isbnjan=${isbn}&booksGenreId=000&applicationId=${process.env.RAKUTEN_CLIENT_ID}&formatVersion=2`,
  )
  const DETAIL_BOOK = await getBook(
    `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?applicationId=${process.env.RAKUTEN_CLIENT_ID}&keyword=${BOOK?.title}&formatVersion=2`,
  )

  return <Detail book={BOOK} detailBook={DETAIL_BOOK} />
}

export default BookDetailPage

async function getBook(URL: string) {
  try {
    const res = await fetch(URL)
    if (!res.ok) {
      notFound()
    }
    return res.json().then((data) => data.Items[0])
  } catch (e) {
    throw new Error('Failed to fetch data')
  }
}
