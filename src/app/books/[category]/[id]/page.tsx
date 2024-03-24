const BookPage = async ({
  params,
}: {
  params: { category: string; id: string }
}) => {
  const { category, id } = params
  const book = await getData(category, id)

  // const fetchBook = async () => {
  //   const { data } = await axios(`/api/books?category=${category}&id=${id}`)
  //   return data as BookType
  // }

  // const { data: book, isLoading } = useQuery(['book', id], fetchBook)
  // if (isLoading) {
  //   return <div>loading,,,</div>
  // }

  return <div>{book?.itemCaption}</div>
}

export default BookPage

async function getData(category: string, id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books?category=${category}&id=${id}`,
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  } catch (e) {
    console.log(e)
  }
}
