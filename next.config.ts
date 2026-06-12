import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 enforces this allowlist in prod — the home hero requests q90.
    qualities: [75, 90],
  },
};

export default nextConfig;
