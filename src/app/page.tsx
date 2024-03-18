import BookList from '@/app/BookList'
import Text from '@/components/shared/Text'

export default async function Home() {
  const { category } = await getData()
  return (
    <div>
      <div className="text-xl text-red-300">test4</div>
      <div className="text-2xl text-teal-200">test</div>

      <Text
        typography="t2"
        display="block"
        textAlign="center"
        fontWeight="bolder"
      ></Text>
      <BookList category={category} />
    </div>
  )
}

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`)
  if (!res.ok) {
    throw new Error('error')
  }
  return res.json()
}
