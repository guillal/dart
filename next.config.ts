import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.darc.barcelona",
          },
        ],
        destination: "https://darc.barcelona/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
