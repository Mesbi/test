/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ['res.cloudinary.com'], // Adicionado o domínio aqui
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: 'duoqbhryx/image/upload/**',
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
