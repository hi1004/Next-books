'use client'
import ListRow from '@/components/shared/ListRow'
import { CategoryType } from '@/interface'
import Image from 'next/image'

const BookList = ({ category }: { category: CategoryType }) => {
  const {
    mindBooks,
    marketingBooks,
    designBooks,
    engineeringBooks,
    frontendBooks,
    uxBooks,
    design_thinking_Books,
    employeeBooks,
    innovationBooks,
    social_issueBooks,
    mission_visionBooks,
  } = category
  return (
    <ul>
      {mindBooks.map((book) => (
        <ListRow
          key={book.id}
          left={
            <Image
              src={book.largeImageUrl}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              alt=""
            />
          }
          contents={<ListRow.Texts title={book.title} />}
        />
      ))}
    </ul>
  )
}

export default BookList
