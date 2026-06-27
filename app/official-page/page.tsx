import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, AlertTriangle, CheckCircle2, Gauge, ShieldAlert, Smartphone, Wrench } from 'lucide-react';
import Reveal from '@/components/reactbits/Reveal';

export const metadata: Metadata = {
  title: 'Auditoría técnica · crediinmuebles.com',
  description:
    'Informe técnico independiente del sitio web actual de Crediinmuebles: diagnóstico de tecnología, UI/UX, rendimiento móvil y propuesta de modernización con Next.js + React.',
};

/* ─── Datos del informe ─────────────────────────────────────────────── */

const detectedStack = [
  { label: 'CMS', value: 'WordPress', note: 'Sitio generado por PHP en el servidor' },
  { label: 'Tema', value: 'Sydney', note: 'Plantilla genérica gratuita, no a medida' },
  { label: 'Constructor visual', value: 'Elementor', note: 'Genera HTML/CSS pesado y redundante' },
  { label: 'Librería JS', value: 'jQuery + jQuery Migrate', note: 'Tecnología heredada (~2006), ya en desuso' },
  { label: 'Plugins', value: 'USM Icons · Click-to-Chat · Site Kit', note: 'Cada plugin = más peso y riesgo' },
  { label: 'Antigüedad de assets', value: '2020–2021', note: 'Recursos sin actualizar hace años' },
];

const techIssues = [
  {
    title: 'Renderizado en el servidor con PHP en cada visita',
    body: 'Cada página se arma en el servidor consultando la base de datos en cada carga. Sin caché agresiva, esto añade latencia y se cae bajo picos de tráfico — justo cuando una campaña funciona.',
  },
  {
    title: 'jQuery y jQuery Migrate',
    body: 'El sitio depende de jQuery, una librería de 2006 que hoy se considera legado. "jQuery Migrate" existe únicamente para sostener código antiguo. Es peso muerto que el navegador descarga y ejecuta en cada visita.',
  },
  {
    title: 'Elementor: HTML y CSS inflados',
    body: 'Los constructores visuales como Elementor generan capas de <div> anidados y hojas de estilo enormes y duplicadas. El resultado es más bytes, más bloqueo de renderizado y peores métricas de Google.',
  },
  {
    title: 'Enlaces con "index.php/" en la URL',
    body: 'Las direcciones del tipo /index.php/empresa/ revelan que ni siquiera están configurados los enlaces permanentes "amigables". Es una mala práctica de SEO y proyecta una imagen poco profesional.',
  },
];

const uxIssues = [
  {
    icon: Smartphone,
    title: 'Experiencia móvil deficiente',
    body: 'Más del 70% del tráfico inmobiliario en Bolivia es móvil. El sitio actual reutiliza un layout de escritorio comprimido, con menú hamburguesa genérico, tipografías pequeñas y tiempos de carga altos en redes 4G.',
  },
  {
    icon: AlertTriangle,
    title: 'Jerarquía visual y conversión débiles',
    body: 'La información de planes, requisitos y oficinas está dispersa en páginas separadas con plantillas genéricas. No hay un recorrido claro hacia la acción ("Cotiza tu lote") ni señales de confianza bien jerarquizadas.',
  },
  {
    icon: Wrench,
    title: 'Sin formularios ni captura de leads',
    body: 'El contacto depende exclusivamente de enlaces de WhatsApp y teléfonos sueltos. No hay formularios, ni medición de conversiones, ni integración con un CRM para dar seguimiento a interesados.',
  },
];

const wpDisadvantages = [
  { stat: '91%', text: 'de las vulnerabilidades de WordPress en 2025 provienen de plugins y temas de terceros — exactamente las piezas de las que depende el sitio actual.' },
  { stat: '64%', text: 'de los sitios WordPress encuestados reportó al menos una brecha de seguridad. La superficie de ataque crece con cada plugin instalado.' },
  { stat: '43%', text: 'de las vulnerabilidades se pueden explotar sin autenticación: un atacante no necesita credenciales para intentarlo.' },
  { stat: '~3–4 h', text: 'es el ritmo al que se publica una nueva vulnerabilidad explotable de WordPress. Mantenerse seguro exige parches constantes.' },
];

const nextAdvantages = [
  { stat: '~1.2 s', text: 'LCP promedio en sitios Next.js frente a 3.8 s en WordPress: la página se ve y se usa hasta 3× más rápido.' },
  { stat: '3×', text: 'más probabilidad de aprobar los Core Web Vitals de Google en móvil — la métrica que hoy influye directamente en el posicionamiento.' },
  { stat: '20–40%', text: 'de aumento de tráfico orgánico reportado tras migrar de WordPress a Next.js en 90 días, solo por la mejora de velocidad.' },
  { stat: '0', text: 'base de datos y plugins expuestos: el sitio se publica como archivos estáticos, reduciendo casi por completo la superficie de ataque.' },
];

const nextBenefits = [
  'Páginas pre-renderizadas y servidas como estáticos: carga casi instantánea y costos de hosting mínimos.',
  'Imágenes optimizadas automáticamente (formatos modernos, tamaños responsivos) — 30–50% más livianas.',
  'Diseño 100% a medida y mobile-first, no una plantilla genérica adaptada a la fuerza.',
  'Sin plugins de terceros que mantener ni vulnerabilidades heredadas que parchar.',
  'SEO técnico sólido: URLs limpias, metadatos correctos, HTML semántico y velocidad de primer nivel.',
  'Base lista para crecer: formularios, CRM, analítica y catálogo de lotes cuando se necesite.',
];

const sources = [
  { label: 'Patchstack — State of WordPress Security 2025', href: 'https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/' },
  { label: 'Melapress — WordPress Security Survey 2025', href: 'https://melapress.com/wordpress-security-survey-2025/' },
  { label: 'Nandann — Next.js vs WordPress Performance Benchmark 2025', href: 'https://www.nandann.com/nextjs/nextjs-vs-wordpress-performance-benchmark' },
  { label: 'Neodigit — Next.js vs WordPress 2025 (Performance, SEO)', href: 'https://neodigit.fr/en/blog/nextjs-vs-wordpress' },
];

/* ─── Componentes auxiliares ────────────────────────────────────────── */

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

/* ─── Página ────────────────────────────────────────────────────────── */

export default function OfficialPageAudit() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary to-[#081830] text-white">
      <div className="container mx-auto px-6 py-16 sm:py-24 lg:px-12">
        {/* Volver */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        {/* Encabezado */}
        <header className="mt-10 max-w-3xl">
          <span className="inline-block rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary ring-1 ring-primary/40">
            Auditoría técnica · Informe independiente
          </span>
          <h1 className="mt-5 font-poppins text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Análisis del sitio web actual de Crediinmuebles
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Revisamos <span className="font-semibold text-white">crediinmuebles.com</span> con criterio técnico y de
            negocio. El sitio cumple su función básica, pero se apoya en tecnología y un diseño que hoy quedaron
            atrás. A continuación, qué encontramos y por qué una base moderna marca la diferencia en velocidad,
            seguridad y resultados.
          </p>
        </header>

        {/* Resumen del sitio actual */}
        <section className="mt-20">
          <SectionHeading eyebrow="Punto de partida" title="Qué encontramos hoy" />
          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-3xl space-y-4 text-white/80 leading-relaxed">
              <p>
                El sitio está construido sobre <strong className="text-white">WordPress</strong> con el tema gratuito{' '}
                <strong className="text-white">Sydney</strong> y el constructor visual <strong className="text-white">Elementor</strong>.
                Presenta la propuesta de valor (&ldquo;Con un lote siempre ganas&rdquo;, 0% de interés a sola firma),
                cuatro planes de pago, requisitos de compra y cinco oficinas en Cochabamba, La Paz, El Alto y Oruro.
              </p>
              <p>
                El contenido es valioso y vale la pena conservarlo. El problema no es <em>qué</em> dice el sitio, sino{' '}
                <em>cómo</em> está construido: una base tecnológica de 2020–2021 que arrastra peso, lentitud y riesgo
                de seguridad, y un diseño que no está pensado para el visitante que llega desde el celular.
              </p>
            </div>
          </Reveal>

          {/* Stack detectado */}
          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {detectedStack.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/80">{item.label}</p>
                  <p className="mt-1 font-poppins text-lg font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Tecnología anticuada */}
        <section className="mt-24">
          <SectionHeading eyebrow="Diagnóstico técnico" title="Tecnología que quedó atrás" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            {techIssues.map((issue, i) => (
              <Reveal key={issue.title} delay={0.05 * i}>
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <Wrench className="mb-3 text-accent" size={22} />
                  <h3 className="font-poppins text-lg font-bold text-white">{issue.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{issue.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* UI/UX y móvil */}
        <section className="mt-24">
          <SectionHeading eyebrow="Experiencia de usuario" title="UI/UX y experiencia móvil" />
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {uxIssues.map((issue, i) => (
              <Reveal key={issue.title} delay={0.05 * i}>
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <issue.icon className="mb-3 text-primary" size={24} />
                  <h3 className="font-poppins text-lg font-bold text-white">{issue.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{issue.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Desventajas de WordPress */}
        <section className="mt-24">
          <SectionHeading eyebrow="El riesgo de fondo" title="Las desventajas de seguir en WordPress" />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-white/70 leading-relaxed">
              WordPress impulsa una gran parte de la web, y su núcleo es razonablemente seguro. El problema es el
              modelo: un sitio real depende de decenas de plugins y temas de terceros, y ahí se concentra el riesgo.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {wpDisadvantages.map((item, i) => (
              <Reveal key={item.stat} delay={0.05 * i}>
                <div className="flex h-full gap-4 rounded-xl border border-accent/20 bg-accent/[0.07] p-6">
                  <ShieldAlert className="mt-1 shrink-0 text-accent" size={24} />
                  <div>
                    <p className="font-poppins text-3xl font-bold text-accent">{item.stat}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Ventajas de Next.js + React */}
        <section className="mt-24">
          <SectionHeading eyebrow="La propuesta" title="Por qué Next.js + React" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {nextAdvantages.map((item, i) => (
              <Reveal key={item.stat} delay={0.05 * i}>
                <div className="flex h-full gap-4 rounded-xl border border-primary/25 bg-primary/[0.08] p-6">
                  <Gauge className="mt-1 shrink-0 text-primary" size={24} />
                  <div>
                    <p className="font-poppins text-3xl font-bold text-primary">{item.stat}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/80">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
              {nextBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
              <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">
                Este mismo sitio es la prueba
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/75 leading-relaxed">
                La demo que estás viendo está construida con Next.js + React: carga al instante, se ve impecable en el
                celular y no depende de plugins. Es el estándar que proponemos para Crediinmuebles.
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-accent/90"
              >
                Ver la propuesta en acción
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Nota y fuentes */}
        <footer className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/50">
            Informe independiente con fines de demostración, elaborado por Oscar Cortez y FaztDeploy. La detección de
            tecnologías se basa en señales públicas del sitio (cabeceras HTTP, etiquetas del generador y rutas de
            recursos). Las estadísticas de seguridad y rendimiento provienen de las siguientes fuentes:
          </p>
          <ul className="mt-4 space-y-1">
            {sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary/80 underline-offset-2 hover:text-primary hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </main>
  );
}
