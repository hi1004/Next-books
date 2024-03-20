'use client'
import BooksSwiper from '@/components/BooksSwiper'
import { BookType } from '@/interface'

const BookRankingList = ({ books }: { books: BookType[] }) => {
  return (
    <section>
      <BooksSwiper books={books} />
    </section>
  )
}

export default BookRankingList
