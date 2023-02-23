/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
const path = require('path')
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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}