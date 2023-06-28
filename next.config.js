/** @type {import('next').NextConfig} */
const nextConfig = {
	// basePath: '/docs',
	// target: 'serverless',
	compiler: {
		swcMinify: false,
		styledComponents: true,
	},
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['robohash.org'],
		formats: ['image/avif', 'image/webp'],
	},
};

module.exports = nextConfig;
