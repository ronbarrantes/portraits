/** @type {import('next').NextConfig} */
// const dotenv = require('dotenv')

// dotenv.config({
//   path: '.env.development.local',
// })

const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,

  // refer to: https://nextjs.org/docs/app/building-your-application/optimizing/images
  images: {
    // domains: [`${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com`],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `**.s3.amazonaws.com`,
        // pathname: '/**/*',
      },
    ],
  },
}

module.exports = nextConfig
