export default async function getBooks(
  URL: string,
  totalData = 30,
  lazyTime = 0,
) {
  try {
    await new Promise((resolve, reject) => setTimeout(resolve, lazyTime))
    const res = await fetch(URL, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json().then((data) => data.Items.slice(0, totalData))
  } catch (e) {
    console.log(e)
  }
}
