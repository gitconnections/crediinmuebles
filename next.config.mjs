/** Static export → Cloudflare Pages serves `out/` directly (no adapter). */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  devIndicators: false,
};
export default nextConfig;
