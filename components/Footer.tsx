import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#000000] py-12 text-white rounded-b-[10px] -mt-4 relative z-40">
      <div className="container mx-auto px-4 text-center">
        <Link href="/" className="text-3xl font-bold font-poppins mb-4 inline-block">
          Crediinmuebles
        </Link>
        <p className="text-gray-400 text-lg">
          © {new Date().getFullYear()} Crediinmuebles. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
