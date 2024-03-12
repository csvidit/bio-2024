/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "viditkhandelwal.nyc3.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
