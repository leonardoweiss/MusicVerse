/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        domains: ['e-cdns-images.dzcdn.net']
    },
    publicRuntimeConfig: {
        FONT_AWESOME: '/_next/static/fontawesome'
      }
};
  

export default nextConfig;
