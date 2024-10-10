/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com'
      },
      {
        protocol: 'https',
        hostname: 'vod-secure.twitch.tv'
      },
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net'
      }
    ]
  }
}

module.exports = nextConfig
