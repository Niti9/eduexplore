/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/my-Talent',
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
