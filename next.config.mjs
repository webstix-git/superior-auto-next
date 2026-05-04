/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
   async redirects() {
    return [
      // Basic 301 redirect
      {
        source: '/about/staff.php',
        destination: '/about',
        statusCode: 301,   // true = 301, false = 302
      },


    ]
  },
};

export default nextConfig;
