export default function Stats() {
  const statsData = [
    {
      value: '+4',
      label: 'años de experiencia en el mercado inmobiliario',
    },
    {
      value: '+15.427',
      label: 'contactos mensuales a nivel nacional',
    },
    {
      value: '+1.746',
      label: 'metros cuadrados de infraestructura construida',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#07cedc] to-[#0c4c8a] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-12 leading-tight">
          Nuestra experiencia y presencia en el mercado
        </h2>
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 opacity-90">
          Más de 4 años de experiencia en el mercado inmobiliario, facilitando el acceso a la compra de terrenos y proyectos inmobiliarios. Más de 15.427 contactos mensuales a nivel nacional, demostrando nuestra presencia y alcance en el mercado. Más de 1.746 metros cuadrados de infraestructura construida, reflejando nuestra capacidad para ejecutar proyectos de alta calidad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="">
              <p className="font-poppins text-5xl md:text-6xl font-bold mb-3 tracking-tight">
                {stat.value}
              </p>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
