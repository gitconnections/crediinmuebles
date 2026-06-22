export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-poppins font-semibold mb-2">Crediinmuebles</p>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
