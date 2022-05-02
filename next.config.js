/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : [ "image.tmdb.org" ] // allow the project to use images from an external source
  }
}

module.exports = nextConfig
