/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "tailwindcss.com",
        },
        {
          protocol: "https",
          hostname: "assets.ctfassets.net",
        },
      ],
    },
  };
  
  export default nextConfig;
  