/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          pathname: '/fatfellas/fellawebsite/**',
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          pathname: '/fatfellas/fellawebsite/**',
        },
      ],
    },
  };
  
  export default nextConfig;