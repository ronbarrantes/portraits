/** @type {import('next').NextConfig} */
// const dotenv = require('dotenv')

// dotenv.config({
//   path: '.env.development.local',
// })

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `**.s3.amazonaws.com`,
      },
    ],
  },
}

module.exports = nextConfig
