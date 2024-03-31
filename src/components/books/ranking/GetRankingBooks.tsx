import getBooks from '@/app/api/getBooks'
import RankingBookList from '@/components/books/ranking/RankingBookList'
import { BOOKS_RANKING_URL } from '@/constants/api'

const GetRankingBooks = async () => {
  const books = await getBooks(BOOKS_RANKING_URL, 10)
  return <RankingBookList books={books} />
}

export default GetRankingBooks
