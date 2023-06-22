/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port:"",
        pathname:"/duoqbhryx/**",
      },
    ],
    minimumCacheTTL:1500000,
  },
  compiler: {
    relay: {
      // This should match relay.config.js
      src: './',
      artifactDirectory: './__generated__',
      language: 'javascript',
      eagerEsModules: false,
    },
  },
};


module.exports = nextConfig
