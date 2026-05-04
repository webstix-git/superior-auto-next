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

      {
        source: '/faq.php',
        destination: '/faq',
        statusCode: 301,   // true = 301, false = 302
      },  

      {
        source: '/services/repair-process',
        destination: '/services',
        statusCode: 301,   // true = 301, false = 302
      },

      {
        source: '/services/going-green',
        destination: '/services',
        statusCode: 301,   // true = 301, false = 302
      },

      {
        source: '/testimonials.php',
        destination: '/testimonials',
        statusCode: 301,   // true = 301, false = 302
      },

      {
        source: '/services/repair-process.php',
        destination: '/services',
        statusCode: 301,   // true = 301, false = 302
      },

      {
        source: '/gallery/2/car-repair',
        destination: '/gallery',
        statusCode: 301,   // true = 301, false = 302
      },

      {
        source: '/gallery/5/van-repair',
        destination: '/gallery',
        statusCode: 301,   // true = 301, false = 302
      },

      {
        source: '/gallery/1/truck-repair',
        destination: '/gallery',
        statusCode: 301,   // true = 301, false = 302
      },

      {
        source: '/privacy.php',
        destination: '/privacy-policy',
        statusCode: 301,   // true = 301, false = 302
      },

      {
        source: '/terms.php',
        destination: '/privacy-policy',
        statusCode: 301,   // true = 301, false = 302
      },

      {
        source: '/free-estimate',
        destination: '/contact',
        statusCode: 301,   // true = 301, false = 302
      },
      
    ]
  },
};

export default nextConfig;
