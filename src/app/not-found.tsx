import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>we could not find the page you were looking for.</p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  )
}

export default NotFound
