/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,

  // refer to: https://nextjs.org/docs/app/building-your-application/optimizing/images
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 's3.amazonaws.com',
  //       port: '',
  //       pathname: '/my-bucket/**',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
