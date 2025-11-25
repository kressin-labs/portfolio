/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  reactCompiler: false, 
  
  experimental: {
    serverSourceMaps: false,
    
  },
};

module.exports = nextConfig;
