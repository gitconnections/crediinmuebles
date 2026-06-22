import './globals.css';
import type { Metadata } from 'next';
import content from '../content.json';

const d = content.design;
const fonts = [d.headingFont, d.bodyFont]
  .filter((f, i, a) => f && a.indexOf(f) === i)
  .map((f) => `family=${f.replace(/ /g, '+')}:wght@400;500;600;700;800`)
  .join('&');

export const metadata: Metadata = { title: content.title };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {fonts && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?${fonts}&display=swap`} />
          </>
        )}
      </head>
      <body style={{ background: d.background, color: d.foreground, fontFamily: `'${d.bodyFont}', system-ui, sans-serif` }}>
        {children}
      </body>
    </html>
  );
}
