import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden rounded-b-[10px]">
      <Image
        src="https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/01-x7nfwr.png"
        alt="Terreno con vista panorámica, listo para inversión inmobiliaria"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c4c8a]/70 to-[#07cedc]/70 z-10"></div>

      <div className="relative z-20 text-center px-4 py-20 max-w-4xl mx-auto">
        <span className="inline-block bg-[#d83a3a] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
          Inmobiliaria
        </span>
        <h1 className="font-poppins text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Con un lote siempre ganas
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Compre un lote o terreno con seguridad y confiabilidad
        </p>
        <Link
          href="#cotiza"
          className="bg-[#07cedc] text-white text-lg md:text-xl font-bold px-10 py-4 rounded-[10px] transition hover:bg-[#0c4c8a] focus:outline-none focus:ring-2 focus:ring-[#07cedc] focus:ring-offset-2"
        >
          Cotiza tu lote
        </Link>
      </div>
    </section>
  );
}
