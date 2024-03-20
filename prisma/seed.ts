import { BookType } from '@/interface'
import { PrismaClient } from '@prisma/client'
import * as booksData from '../src/mock/book.json'
type Books = {
  [key: string]: BookType[]
}
const prisma = new PrismaClient()

const CATEGORY_ARR: string[] = [
  'MIND_BOOKS',
  'MARKETING_BOOKS',
  'DESIGN_BOOKS',
  'ENGINEERING_BOOKS',
  'FRONTEND_BOOKS',
  'UX_BOOKS',
  'DESIGN_THINKING_BOOKS',
  'EMPLOYEE_BOOKS',
  'INNOVATION_BOOKS',
  'SOCIAL_ISSUE_BOOKS',
  'MISSION_VISION_BOOKS',
]

async function seedData() {
  const books: Books = booksData as Books
  for (const CATEGORY of CATEGORY_ARR) {
    const categoryBooks = books[CATEGORY] as BookType[]
    for (const book of categoryBooks) {
      const bookData: BookType = {
        author: book.author,
        availability: book.availability,
        booksGenreId: book.booksGenreId,
        contents: book.contents,
        isbn: book.isbn,
        itemCaption: book.itemCaption,
        itemPrice: book.itemPrice,
        itemUrl: book.itemUrl,
        largeImageUrl: book.largeImageUrl,
        limitedFlag: book.limitedFlag,
        mediumImageUrl: book.mediumImageUrl,
        postageFlag: book.postageFlag,
        publisherName: book.publisherName,
        reviewAverage: book.reviewAverage,
        reviewCount: book.reviewCount,
        salesDate: book.salesDate,
        seriesName: book.seriesName,
        size: book.size,
        smallImageUrl: book.smallImageUrl,
        subTitle: book.subTitle,
        title: book.title,
        category: book.category,
      }
      const res = await prisma.book.create({
        data: bookData,
      })
      console.log(res)
    }
  }
}

async function main() {
  await seedData()
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
