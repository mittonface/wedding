/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  optimization: {
    minify: false,
  },
};

module.exports = nextConfig;
