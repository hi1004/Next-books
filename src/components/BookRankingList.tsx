import RankingBookSwiper from '@/components/RankingBookSwiper'
import { RANKING_URL } from '@/constants/api'
import { RankingBookType } from '@/interface'

const BookRankingList = async () => {
  const { Items: books } = await getRankingData()
  return (
    <section>
      <RankingBookSwiper />
      {books.map((book: RankingBookType) => (
        <div key={book.itemCode}>{book.itemName}</div>
      ))}
    </section>
  )
}

export default BookRankingList

async function getRankingData() {
  try {
    const res = await fetch(RANKING_URL, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  } catch (e) {
    console.log(e)
  }
}
