import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#ffffff]/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-poppins text-[#0f172a]">
          Crediinmuebles
        </Link>
        <Link
          href="#cotiza"
          className="bg-[#07cedc] text-white px-6 py-3 rounded-[10px] font-semibold transition hover:bg-[#0c4c8a] focus:outline-none focus:ring-2 focus:ring-[#07cedc] focus:ring-offset-2"
        >
          Cotiza tu lote
        </Link>
      </div>
    </nav>
  );
}
