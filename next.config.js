/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  
  swcMinify: true,
    experimental: {
    appDir: true,
  },
  images: {
    domains: ['static.tvmaze.com'],
  },
}

module.exports = nextConfig
