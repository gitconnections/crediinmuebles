import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section id="cotiza" className="py-20 md:py-28 bg-gradient-to-r from-[#07cedc] to-[#0c4c8a] text-white rounded-t-[10px]">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-8 leading-tight">
          ¿Estás listo para invertir con confianza?
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          En Crediinmuebles, nos comprometemos con la calidad y la seguridad de nuestros proyectos. ¡Contáctanos hoy mismo para obtener más información y cotizar tu lote!
        </p>
        <Link
          href="#"
          className="bg-white text-[#0c4c8a] text-lg md:text-xl font-bold px-10 py-4 rounded-[10px] transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Cotiza tu lote
        </Link>
      </div>
    </section>
  );
}
