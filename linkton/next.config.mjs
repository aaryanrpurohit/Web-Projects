/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.icons8.com'], // 👈 this is the domain causing the error
  },
};

export default nextConfig;
