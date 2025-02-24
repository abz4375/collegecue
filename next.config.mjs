/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  //concurrentFeatures: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
     unoptimized: true, 
  },
};

export default nextConfig;
