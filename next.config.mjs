/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logoexpress.tubeguruji.com",
      },
    ],
  },
};

export default nextConfig;