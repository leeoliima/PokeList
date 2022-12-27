/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This is the property you need to add
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {      
    domains: ["cdn.traction.one"],
  },
  
};

module.exports = nextConfig;
