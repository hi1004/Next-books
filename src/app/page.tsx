'use client'
import BookList from '@/components/BookList'
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
      <BookList category={category} />
    </>
  )
}

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`)
  if (!res.ok) {
    throw new Error('error')
  }
  return res.json()
}
