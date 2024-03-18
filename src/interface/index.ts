export interface BookType {
  id: number
  author: string
  availability: string
  booksGenreId: string
  contents?: string | null
  isbn: string
  itemCaption: string
  itemPrice: number
  itemUrl: string
  largeImageUrl: string
  limitedFlag: number
  mediumImageUrl: string
  postageFlag: number
  publisherName: string
  reviewAverage: string
  reviewCount: number
  salesDate: string
  seriesName?: string | null
  size: string
  smallImageUrl: string
  subTitle?: string | null
  title: string
  category?: string | null
}

export interface CategoryType {
  mindBooks: BookType[]
  marketingBooks: BookType[]
  designBooks: BookType[]
  engineeringBooks: BookType[]
  frontendBooks: BookType[]
  uxBooks: BookType[]
  design_thinking_Books: BookType[]
  employeeBooks: BookType[]
  innovationBooks: BookType[]
  social_issueBooks: BookType[]
  mission_visionBooks: BookType[]
}
