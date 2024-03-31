import GetMainGenreBooks from '@/components/books/genre/business/GetMainGenreBooks'
import GetGenreRecommendBooks from '@/components/books/genre/recommend/GetGenreRecommendBooks'
import GetRankingBooks from '@/components/books/ranking/GetRankingBooks'
import GetRecommendBooks from '@/components/books/recommend/GetRecommendBooks'
export default function HomePage() {
  return (
    <>
      <GetMainGenreBooks />
      <GetRankingBooks />
      <GetGenreRecommendBooks />
      <GetRecommendBooks />
    </>
  )
}
