import AllRankingList from '@/components/books/ranking/AllRankingList'
import { ALL_RANKING_URL } from '@/constants/api'

const RankingAll = async () => {
  const { Items } = await getRankingData(ALL_RANKING_URL)
  return <AllRankingList books={Items} />
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
    return res.json()
  } catch (e) {
    console.log(e)
  }
}
