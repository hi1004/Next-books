import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  image: string
}

export default function SEO({ title, description, image }: SEOProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="260" />
      <meta property="og:image:height" content="260" />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="ja_JP" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
      <title>{title}</title>
    </Head>
  )
}
