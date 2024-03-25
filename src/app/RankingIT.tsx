import ITrankingList from '@/components/books/ranking/ITrankingList'
import { IT_RANKING_URL } from '@/constants/api'

const RankingIT = async () => {
  const { Items } = await getRankingData(IT_RANKING_URL)
  return <ITrankingList books={Items} />
}

export default RankingIT
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
