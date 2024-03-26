import AllRankingList from '@/components/books/ranking/AllRankingList'
import { BISUNISS_RANKING_URL } from '@/constants/api'

const RankingAll = async () => {
  const data = await getRankingData(BISUNISS_RANKING_URL)
  return <AllRankingList books={data} />
}

export default RankingAll
async function getRankingData(URL: string) {
  try {
    const res = await fetch(URL, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    const bisunissData = data.Items.slice(0, 10)
    return bisunissData
  } catch (e) {
    console.log(e)
  }
}
