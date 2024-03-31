import getBooks from '@/app/api/getBooks'
import GenreRecommendList from '@/components/books/genre/recommend/GenreRecommendList'
import { IT_RANKING_URL, MARKETING_RANKING_URL } from '@/constants/api'

const GetGenreRecommendBooks = async () => {
  const IT = await getBooks(IT_RANKING_URL, 30)
  const MARKETING = await getBooks(MARKETING_RANKING_URL, 30)
  return (
    <>
      <GenreRecommendList books={IT} title="IT資格" />
      <GenreRecommendList books={MARKETING} title="MARKETING" />
    </>
  )
}

export default GetGenreRecommendBooks
