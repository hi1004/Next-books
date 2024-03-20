'use client'
import BookList from '@/components/BookList'
import Text from '@/components/shared/Text'
import axios from 'axios'
import { useQuery } from 'react-query'

export default function HomePage() {
  const fetchCategories = async () => {
    const { data } = await axios(`/api/books`)
    return data.category
  }
  const { data: category, isLoading } = useQuery('category', fetchCategories)
  if (isLoading && !category) {
    return <div>loading...</div>
  }

  return (
    <>
      <Text>text</Text>
      <BookList category={category} />
    </>
  )
}
