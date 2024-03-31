import getBooks from '@/app/api/getBooks'
import MainGenreBookList from '@/components/books/genre/business/MainGenreBookList'
import { BISUNISS_RANKING_URL } from '@/constants/api'

const GetMainGenreBooks = async () => {
  const books = await getBooks(BISUNISS_RANKING_URL, 5)
  return <MainGenreBookList books={books} />
}

export default GetMainGenreBooks
