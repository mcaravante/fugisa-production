/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fugisa.com.ar',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimizaciones para Vercel
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
