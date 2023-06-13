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
};

module.exports = nextConfig;
