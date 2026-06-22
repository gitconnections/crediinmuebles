import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Crediinmuebles - Con un lote siempre ganas',
  description: 'Compre un lote o terreno con seguridad y confiabilidad. Invierta con confianza en proyectos inmobiliarios.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className={`font-inter antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
