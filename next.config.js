/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/neeloommen.github.io",
  assetPrefix: "./neeloommen.github.io"
}

module.exports = nextConfig

