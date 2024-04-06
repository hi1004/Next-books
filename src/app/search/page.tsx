import { BookType } from '@/interface'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string }
}) {
  const books: BookType[] = await fetchFilteredBooks(searchParams.query)

  return <div>{books?.map((book) => <p key={book.isbn}>{book.title}</p>)}</div>
}

async function fetchFilteredBooks(query: string) {
  try {
    if (query) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/search?query=${query}`,
      )

      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      const data = await response.json()
      return data
    }
  } catch (error) {
    throw new Error('Failed to fetch books')
  }
}
