/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ["image/avif", "image/webp"],
		domains: ["localhost", "github-finder-typescript-next.vercel.app"]
	}
};

module.exports = nextConfig;
