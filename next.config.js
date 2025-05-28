/** @type {import('next').NextConfig} */
const nextConfig = {
    // enable static export for deployment
    output: 'export',

    // add trailing slashes to URLs
    trailingSlash: true,

    // disable image optimization for static export
    images: {
        unoptimized: true,
    },
    
    // base configuration for static export
    reactStrictMode: true,

    // Optional: add custom webpack config if needed
    webpack: (config, { isServer }) => {
        // Example: Add custom plugins or loaders here
        if (!isServer) {
            // Client-side specific configurations
        }
        return config;
    },
}


module.exports = nextConfig;