/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
            "loader": 'default', // Prevents Vercel's optimization
            "unoptimized": true, 
        }
};

export default nextConfig;
  