import type { NextConfig } from "next";

const remotePatterns: URL[] = [new URL("http://127.0.0.1:1337/uploads/**")];

if (process.env.NEXT_PUBLIC_STRAPI_API_URL) {
  remotePatterns.push(
    new URL(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/uploads/**`),
  );
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
};

export default nextConfig;
