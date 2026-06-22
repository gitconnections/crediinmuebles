'use client';

import { SearchX, FileWarning, Hourglass, Building2, CheckCircle, Users, Wallet } from 'lucide-react';
import Reveal from '@/components/reactbits/Reveal';

const problems = [
  {
    icon: SearchX,
    title: 'Dificultad para encontrar proyectos seguros y confiables',
    description: 'El mercado inmobiliario puede ser complejo, y hallar opciones que cumplan con sus expectativas de seguridad es un reto.',
  },
  {
    icon: FileWarning,
    title: 'Miedo a la falta de transparencia en la documentación',
    description: 'La preocupación por la legalidad y claridad de los documentos es una barrera común para muchos inversores.',
  },
  {
    icon: Hourglass,
    title: 'Incumplimiento de los plazos de entrega',
    description: 'La incertidumbre sobre cuándo se materializará su inversión puede generar estrés y desconfianza.',
  },
  {
    icon: Building2,
    title: 'Preocupación por la calidad de la construcción y el valor a largo plazo',
    description: 'La durabilidad y el potencial de revalorización de la propiedad son cruciales para una inversión exitosa.',
  },
];

const solutions = [
  {
    icon: CheckCircle,
    title: 'Revisión documental minuciosa',
    description: 'Garantizamos la seguridad y confiabilidad de tu inversión con un análisis exhaustivo de cada proyecto.',
  },
  {
    icon: Users,
    title: 'Equipo multidisciplinario',
    description: 'Aseguramos la ejecución y entrega de proyectos de alta calidad con profesionales expertos en cada área.',
  },
  {
    icon: Wallet,
    title: 'Planes de pago personalizados y flexibles',
    description: 'Nos adaptamos a tus necesidades y presupuesto para que invertir sea accesible y conveniente.',
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Problemas */}
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8 font-poppins leading-tight">
            ¿Qué te preocupa al invertir en un proyecto inmobiliario?
          </h2>
          <p className="text-lg md:text-xl text-center text-foreground/70 max-w-3xl mx-auto mb-16">
            La dificultad para encontrar proyectos seguros y confiables, el miedo a la falta de transparencia en la
            documentación y al incumplimiento de los plazos de entrega, y la preocupación por la calidad de la
            construcción y el valor a largo plazo de la inversión. Estos son algunos de los desafíos que enfrentas
            al invertir en un proyecto inmobiliario.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {problems.map((problem, index) => (
            <Reveal delay={0.1 + index * 0.1} key={problem.title}>
              <div className="bg-white p-6 rounded-[10px] shadow-md border border-gray-100 h-full flex flex-col items-center text-center">
                <div className="bg-accent/10 text-accent p-3 rounded-full mb-4">
                  <problem.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {problem.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Soluciones */}
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8 font-poppins leading-tight">
            Nuestra solución para tus necesidades inmobiliarias
          </h2>
          <p className="text-lg md:text-xl text-center text-foreground/70 max-w-3xl mx-auto mb-16">
            En Crediinmuebles, ofrecemos una solución integral para tus necesidades inmobiliarias. Nuestros proyectos
            cuentan con revisión documental minuciosa, equipo multidisciplinario y planes de pago personalizados y flexibles.
            Estamos comprometidos con la calidad y la seguridad de nuestros proyectos, y nos esforzamos por brindarte
            una experiencia de compra satisfactoria y sin sorpresas.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Reveal delay={0.1 + index * 0.1} key={solution.title}>
              <div className="bg-white p-8 rounded-[10px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col items-center text-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full mb-6">
                  <solution.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-poppins">
                  {solution.title}
                </h3>
                <p className="text-foreground/70 text-base leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
