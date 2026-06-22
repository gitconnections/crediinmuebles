/** Static export → Cloudflare Pages serves `out/` directly (no adapter). TS/ESLint
 *  errors don't block the build, so AI-generated components still deploy. */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  devIndicators: false,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
