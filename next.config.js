/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      'images.unsplash.com',
      'links.papareact.com',
      'cdn.sanity.io',
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig
