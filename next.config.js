/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['rickandmortyapi.com'],
    loader: 'customer',
    path: '/'
  }
}

module.exports = nextConfig
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = {
  images: {
      unoptimized: true
  }
}