import Image from 'next/image';

export default function Showcase() {
  const images = [
    {
      src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/02-x23b7m.webp',
      alt: 'Vista aérea de un desarrollo inmobiliario en construcción',
      span: 'lg:col-span-2 lg:row-span-2',
    },
    {
      src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/03-1skdjic.webp',
      alt: 'Terrenos con vista al mar, ideal para inversión',
      span: 'lg:col-span-1 lg:row-span-1',
    },
    {
      src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/04-1dwj1vo.webp',
      alt: 'Maqueta de un proyecto residencial moderno',
      span: 'lg:col-span-1 lg:row-span-1',
    },
    {
      src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/05-m2bc7y.webp',
      alt: 'Trabajadores de la construcción en un sitio de proyecto',
      span: 'lg:col-span-1 lg:row-span-1',
    },
    {
      src: 'https://cdn.faztdeploy.com/faztdeploy/landing/bdf59287-14f1-436b-a65d-09a941293a03/images/06-1dwsjq3.png',
      alt: 'Plano arquitectónico de un lote o terreno',
      span: 'lg:col-span-1 lg:row-span-1',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center text-[#0f172a] mb-16 leading-tight">
          Invierte con confianza en terrenos y proyectos inmobiliarios
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          En Crediinmuebles, nos comprometemos con la calidad y la seguridad de nuestros proyectos. Nuestros proyectos son diseñados para satisfacer tus necesidades y superar tus expectativas. Con un lote siempre ganas: seguridad, confiabilidad y respaldo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[10px] shadow-lg group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
