import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Crediinmuebles - Con un lote siempre ganas',
  description: 'Compre un lote o terreno con seguridad y confiabilidad',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-body antialiased text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
