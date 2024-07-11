/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/mytalent',
            permanent: true,
            
          
          },
        ];
      },


    // async rewrites() {
    //   return [
    //     {
    //       source: '/',
    //       destination: '/mytalent',
    //     },
    //   ];
    // },
};

export default nextConfig;
