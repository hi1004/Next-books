import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  if (query) {
    const res = await fetch(
      `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${query}&applicationId=${process.env.RAKUTEN_CLIENT_ID}&formatVersion=2`,
      {
        cache: 'no-store',
      },
    )
    const books = await res.json().then((books) => books.Items)
    return NextResponse.json(books, { status: 200 })
  } else {
    return NextResponse.json([], { status: 200 })
  }
}
