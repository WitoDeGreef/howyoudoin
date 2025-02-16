/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    // Add basePath
    basePath: process.env.NODE_ENV === "production" ? "/howyoudoin" : '',
};

module.exports = nextConfig;