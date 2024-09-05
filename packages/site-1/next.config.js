// @ts-check

/** type {import('next').NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        destination: '/products/:path*',
        source: 'https://zd-286529-2.netlify.app/legacy/products/:path*'
      }
    ]
  }
}

export default config