/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Gamla galleri-adressen lever kvar i delade länkar och Googles index
      { source: "/galleri", destination: "/shop", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "loremflickr.com" },
    ],
  },
};

export default nextConfig;
