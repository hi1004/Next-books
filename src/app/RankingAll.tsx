import AllRankingList from '@/components/books/ranking/AllRankingList'
import { ALL_RANKING_URL } from '@/constants/api'

const RankingAll = async () => {
  const data = await getRankingData(ALL_RANKING_URL)
  return <AllRankingList books={data} />
}

export default RankingAll
async function getRankingData(URL: string) {
  try {
    const res = await fetch(URL, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data.Items
  } catch (e) {
    console.log(e)
  }
}
