/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
module.exports = {
  webpack: (config) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: "public/component"
      })

      return config
  },
}