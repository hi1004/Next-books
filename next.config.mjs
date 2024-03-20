/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['thumbnail.image.rakuten.co.jp'],
  },
}

export default nextConfig
