import { API_CATEGORY_NAMES } from '@/constants/category'
import { BookType } from '@/interface'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
interface BooksByCategory {
  [key: string]: BookType[]
}

async function getBooksByCategory(category: string, c?: string, id?: string) {
  if (c && id) {
    return await prisma.book.findMany({
      orderBy: { id: 'asc' },
      where: {
        id: parseInt(id),
        category,
      },
    })
  } else {
    return await prisma.book.findMany({
      orderBy: { id: 'asc' },
      where: {
        category,
      },
    })
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id') as string
  const categoryParams = searchParams.get('category') as string
  const booksByCategory: BooksByCategory = {}

  for (const category of API_CATEGORY_NAMES) {
    booksByCategory[category + 'Books'] = await getBooksByCategory(
      category,
      categoryParams,
      id,
    )
  }

  let responseData: { category: BooksByCategory } | BookType = {
    category: booksByCategory,
  }

  if (id) {
    for (const category of API_CATEGORY_NAMES) {
      const categoryBooks = booksByCategory[category + 'Books']
      if (categoryBooks.length > 0) {
        responseData = categoryBooks[0]
        break
      }
    }
  }

  return NextResponse.json(responseData, { status: 200 })
}
