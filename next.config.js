/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  optimization: {
    minimize: false,
  },
};

module.exports = nextConfig;
