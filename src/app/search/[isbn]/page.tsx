import DetailBooks from '@/components/books/DetailBooks'
import { notFound } from 'next/navigation'

const BookDetailPage = async ({ params }: { params: { isbn: string } }) => {
  const { isbn } = params
  const BOOK = await getBook(
    `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&isbn=${isbn}&applicationId=${process.env.RAKUTEN_CLIENT_ID}&formatVersion=2`,
  )
  const DETAIL_BOOK = await getBook(
    `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?applicationId=${process.env.RAKUTEN_CLIENT_ID}&keyword=${isbn}&formatVersion=2`,
  )
  const GENRE_NAME = await getGenre(
    `https://app.rakuten.co.jp/services/api/BooksGenre/Search/20121128?format=json&booksGenreId=${BOOK?.booksGenreId.split('/').pop()}&applicationId=${process.env.RAKUTEN_CLIENT_ID}`,
  )

  return (
    <DetailBooks book={BOOK} detailBook={DETAIL_BOOK} genreName={GENRE_NAME} />
  )
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

async function getGenre(URL: string) {
  try {
    const res = await fetch(URL)
    if (!res.ok) {
      notFound()
    }
    return res.json().then((data) => data.current.booksGenreName)
  } catch (e) {
    throw new Error('Failed to fetch data')
  }
}
