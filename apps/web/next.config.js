/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
    serverActions: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'api.mapbox.com'],
  },
}

module.exports = nextConfig
