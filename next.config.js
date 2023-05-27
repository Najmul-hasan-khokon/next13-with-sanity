/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ["cdn.sanity.io"],
      // we can add the domain name like this also
      // remotePatterns: [
      //    {
      //      protocol: 'https',
      //      hostname: 'cdn.sanity.io',
      //      port: '',
      //    },
      //  ],
   },
};

module.exports = nextConfig;
