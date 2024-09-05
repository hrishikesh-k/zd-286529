// @ts-check

/** type {import('next').NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        destination: 'https://zd-286529-2.netlify.app/legacy/products/:path*',
        source: '/products/:path*'
      }
    ]
  }
}

export default config