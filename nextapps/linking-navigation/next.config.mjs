/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/foo',
                destination: '/about',
                permanent: true
            }
        ]
    }

};

export default nextConfig;
