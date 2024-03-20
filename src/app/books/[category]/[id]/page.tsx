'use client'
import { BookType } from '@/interface'
import axios from 'axios'
import { useQuery } from 'react-query'

const BookPage = ({ params }: { params: { category: string; id: string } }) => {
  const { category, id } = params

  const fetchBook = async () => {
    const { data } = await axios(`/api/books?category=${category}&id=${id}`)
    return data as BookType
  }

  const { data: book, isLoading } = useQuery(['book', id], fetchBook)
  if (isLoading) {
    return <div>loading,,,</div>
  }

  return <div>{book?.itemCaption}</div>
}

export default BookPage
