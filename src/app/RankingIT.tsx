import ITrankingList from '@/components/books/ranking/ITrankingList'
import { IT_RANKING_URL } from '@/constants/api'

const RankingIT = async () => {
  const data = await getRankingData(IT_RANKING_URL)
  return <ITrankingList books={data} />
}

export default RankingIT
async function getRankingData(URL: string) {
  try {
    const res = await fetch(URL, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    const itRankingData = data.Items.slice(0, 20)
    return itRankingData
  } catch (e) {
    console.log(e)
  }
}
