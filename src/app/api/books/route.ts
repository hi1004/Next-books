import { BookType } from '@/interface'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
interface BooksByCategory {
  [key: string]: BookType[]
}

async function getBooksByCategory(category: string) {
  return await prisma.book.findMany({
    orderBy: { id: 'asc' },
    where: {
      category,
    },
  })
}

export async function GET(req: Request) {
  const categories = [
    'mind',
    'marketing',
    'design',
    'engineering',
    'frontend',
    'ux',
    'design_thinking',
    'employee',
    'innovation',
    'social_issue',
    'mission_vision',
  ]

  const booksByCategory: BooksByCategory = {}
  for (const category of categories) {
    booksByCategory[category + 'Books'] = await getBooksByCategory(category)
  }

  return NextResponse.json(
    {
      category: booksByCategory,
    },
    {
      status: 200,
    },
  )
}
