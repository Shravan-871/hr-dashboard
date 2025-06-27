/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://randomuser.me/api/portraits/men/**', 'https://randomuser.me/api/portraits/women/**')],
    },
};

export default nextConfig;
  