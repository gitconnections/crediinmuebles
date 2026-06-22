import type { Config } from 'tailwindcss';

/** Brand colors come from CSS variables defined in globals.css (per-landing),
 *  exposed here as semantic classNames: bg-primary, text-foreground, from-secondary, … */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
