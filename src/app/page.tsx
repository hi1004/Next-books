import SearchFilter from '@/app/search/SearchFilter'
import GetMainGenreBooks from '@/components/books/genre/business/GetMainGenreBooks'
import GetGenreRecommendBooks from '@/components/books/genre/recommend/GetGenreRecommendBooks'
import GetRankingBooks from '@/components/books/ranking/GetRankingBooks'
import GetRecommendBooks from '@/components/books/recommend/GetRecommendBooks'
import { Suspense } from 'react'
export default function HomePage() {
  return (
    <>
      <GetMainGenreBooks />
      <Suspense>
        <SearchFilter />
      </Suspense>
      <GetRankingBooks />
      <GetGenreRecommendBooks />
      <GetRecommendBooks />
    </>
  )
}
