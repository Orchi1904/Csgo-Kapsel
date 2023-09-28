/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['steamcommunity.com', 'steamcdn-a.akamaihd.net'],
    },
}

module.exports = nextConfig
