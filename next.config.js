/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['makeen.ir/'],
  },
  env: {
    domain: "https://salmankhosravi.pythonanywhere.com",
  },
}
module.exports = nextConfig
