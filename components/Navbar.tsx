import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm p-4 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold font-poppins text-white drop-shadow-md">
          Crediinmuebles
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="#features" className="text-white hover:text-[#07cedc] transition-colors duration-300 text-lg">
            Proyectos
          </Link>
          <Link href="#stats" className="text-white hover:text-[#07cedc] transition-colors duration-300 text-lg">
            Nosotros
          </Link>
          <Link
            href="#cta"
            className="px-6 py-3 bg-[#07cedc] text-white font-semibold rounded-[10px] shadow-lg hover:bg-[#0c4c8a] transition-all duration-300 transform hover:-translate-y-1"
          >
            Cotiza tu lote
          </Link>
        </div>
      </div>
    </nav>
  );
}
