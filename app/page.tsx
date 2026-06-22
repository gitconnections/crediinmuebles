import content from '../content.json';

const d = content.design;

export default function Page() {
  const headingFont = `'${d.headingFont}', system-ui, sans-serif`;
  return (
    <main style={{ maxWidth: 1040, margin: '0 auto', padding: '0 24px' }}>
      {/* Hero */}
      <section style={{ padding: '96px 0 64px', textAlign: 'center' }}>
        {content.hero.eyebrow && (
          <span
            style={{
              display: 'inline-block',
              background: d.accent,
              color: d.background,
              borderRadius: d.radius,
              padding: '6px 14px',
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            {content.hero.eyebrow}
          </span>
        )}
        <h1 style={{ fontFamily: headingFont, fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          {content.hero.headline}
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', opacity: 0.8, maxWidth: 640, margin: '20px auto 0' }}>
          {content.hero.subhead}
        </p>
        {content.hero.ctaLabel && (
          <div style={{ marginTop: 32 }}>
            <a
              href="#contacto"
              style={{ display: 'inline-block', background: d.primary, color: d.background, borderRadius: d.radius, padding: '14px 28px', fontWeight: 600, textDecoration: 'none' }}
            >
              {content.hero.ctaLabel}
            </a>
          </div>
        )}
      </section>

      {/* Images */}
      {content.images.length > 0 && (
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12, padding: '24px 0' }}>
          {content.images.map((src: string, i: number) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: d.radius }} />
          ))}
        </section>
      )}

      {/* Sections */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, padding: '48px 0 96px' }}>
        {content.sections.map((s: { title: string; body: string; bullets: string[] }, i: number) => (
          <div key={i} style={{ border: `1px solid ${d.foreground}1a`, borderRadius: d.radius, padding: 24 }}>
            {s.title && <h3 style={{ fontFamily: headingFont, fontSize: '1.25rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>}
            {s.body && <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>{s.body}</p>}
            {s.bullets?.length > 0 && (
              <ul style={{ marginTop: 12, paddingLeft: 18, opacity: 0.8, fontSize: '0.9rem' }}>
                {s.bullets.map((b, j) => <li key={j} style={{ marginBottom: 4 }}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </section>

      <footer id="contacto" style={{ textAlign: 'center', padding: '32px 0 64px', opacity: 0.6, fontSize: 13 }}>
        {content.title}
      </footer>
    </main>
  );
}
