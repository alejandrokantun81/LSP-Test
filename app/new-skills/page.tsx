import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Skills. New Game — Serious Change',
  description: 'Técnicas de Estrategia (ST) y Técnicas Ágiles (AGT) exclusivas de Serious Change para la Alta Dirección.',
};

/* Imagen LEGO Serious Play (Pexels, verificada 200) */
const LEGO_DIVIDER = 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop';

const ST_TECNICAS = [
  {
    code: 'ST 1',
    title: 'Modelado de las 5 Fuerzas de Porter',
    tagline: 'No solo mires tu entorno, constrúyelo.',
    body: 'Estructura tu ecosistema competitivo para predecir vulnerabilidades y blindar tu posición en el mercado.',
  },
  {
    code: 'ST 2',
    title: 'Análisis del Patrón Emergente',
    tagline: 'Descubre la estrategia que realmente está ocurriendo en tu equipo.',
    body: 'Alineamos la identidad de tu organización con sus patrones de comportamiento reales ante la crisis.',
  },
  {
    code: 'ST 3',
    title: 'Curva de Valor Océano Azul',
    tagline: 'Innovación forzada con propósito.',
    body: 'Identifica qué factores de costo eliminar para diseñar una propuesta de valor única, sostenible e imposible de ignorar.',
  },
];

const AGT_TECNICAS = [
  {
    code: 'AGT 4',
    title: 'Scrum Vision Check',
    tagline: 'Adiós a las metas ambiguas.',
    body: 'Vinculamos tu visión compartida directamente con artefactos ágiles concretos como el Sprint Goal, asegurando que cada pieza de LEGO® tenga un impacto en el negocio.',
  },
  {
    code: 'AGT 5',
    title: 'Detección de Sesgos Cognitivos',
    tagline: 'Toma decisiones más inteligentes bajo presión.',
    body: 'Desmantelamos sesgos como el de anclaje o la aversión a la pérdida en pleno &ldquo;Juego de Emergencia&rdquo;, activando tu pensamiento racional cuando más importa.',
  },
  {
    code: 'AGT 6',
    title: 'Prototipado Rápido 3D',
    tagline: 'Falla rápido, aprende más rápido.',
    body: 'Diseña soluciones tangibles y somételas a la complejidad de tu sistema real para validar su integración antes de mover un solo peso de inversión.',
  },
];

export default function NewSkillsPage() {
  return (
    <>
      <style>{`
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .skills-card { transition: transform 150ms cubic-bezier(0.34,1.56,0.64,1); }
        .skills-card:hover { transform: translateY(-3px); }
        .ns-header { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 32px; }

        select:focus-visible { outline: 2px solid var(--lego-yellow); outline-offset: 2px; }
        button:focus-visible  { outline: 2px solid var(--lego-yellow); outline-offset: 2px; border-radius: 8px; }

        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .ns-header   { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      <main style={{ flex: 1, background: 'var(--ink-900)' }}>

        {/* ── Hero ── */}
        <section
          style={{
            padding: '96px 24px 72px',
            background: 'linear-gradient(160deg, #0a0a14 0%, var(--ink-900) 50%, #0d1528 100%)',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--ink-700)',
          }}
        >
          {/* Scan lines */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)',
              pointerEvents: 'none',
            }}
          />
          {/* Grid accent */}
          <div
            style={{
              position: 'absolute', top: 24, right: 24, width: 120, height: 120,
              backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,215,0,0.12) 0px, rgba(255,215,0,0.12) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(0deg, rgba(255,215,0,0.12) 0px, rgba(255,215,0,0.12) 1px, transparent 1px, transparent 20px)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
            <div className="ns-header">
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700,
                    letterSpacing: '0.2em', color: 'var(--lego-yellow)', marginBottom: 12,
                    textTransform: 'uppercase',
                  }}
                >
                  ▶ UNLOCK NEW SKILLS
                </p>
                <h1
                  style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.04em',
                    color: 'var(--ink-000)', lineHeight: 0.95, marginBottom: 0,
                  }}
                >
                  New Skills.{' '}
                  <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--lego-yellow)' }}>
                    New Game
                  </span>
                </h1>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-200)', lineHeight: 1.65, maxWidth: 400 }}>
                Las nuevas técnicas de Serious Change no son solo herramientas — son el sistema operativo de la resiliencia organizacional.
                Prepárate para llevar tu liderazgo a una dimensión donde la estrategia se construye con las manos y se valida con rigor científico.
              </p>
            </div>
          </div>
        </section>

        {/* ── ST: Técnicas de Estrategia ── */}
        <section style={{ padding: '64px 24px 48px', background: 'var(--ink-900)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.6875rem',
                  letterSpacing: '0.15em', color: 'var(--lego-blue)',
                  background: 'rgba(0,108,183,0.12)', border: '1px solid rgba(0,108,183,0.25)',
                  padding: '5px 12px', borderRadius: 4, textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}
              >ST — Strategy Techniques</div>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,108,183,0.2)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-600)' }}>3 técnicas</span>
            </div>
            <div className="skills-grid">
              {ST_TECNICAS.map((t) => (
                <div
                  key={t.code}
                  className="skills-card"
                  style={{ background: 'var(--ink-800)', borderRadius: 10, borderTop: '3px solid var(--lego-blue)', padding: '28px 24px' }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700,
                        color: 'var(--lego-blue)', background: 'rgba(0,108,183,0.1)',
                        padding: '3px 8px', borderRadius: 3, letterSpacing: '0.05em',
                      }}
                    >{t.code}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--ink-000)', marginBottom: 8, letterSpacing: '-0.02em', lineHeight: 1.25 }}>{t.title}</h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--lego-blue)', marginBottom: 12, lineHeight: 1.4 }}>
                    &ldquo;{t.tagline}&rdquo;
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--ink-200)', lineHeight: 1.65 }}>{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Imagen LEGO divisor ── */}
        <div style={{ padding: '0 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', position: 'relative', height: 260, border: '1px solid var(--ink-700)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LEGO_DIVIDER}
                alt="LEGO Serious Play — bricks coloridos"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(90deg, rgba(10,10,20,0.85) 0%, rgba(10,10,20,0.2) 50%, rgba(10,10,20,0.85) 100%)',
                }}
              />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: 'var(--ink-000)',
                    textAlign: 'center', maxWidth: 600, lineHeight: 1.4, padding: '0 24px',
                  }}
                >
                  ¿Por qué conformarse con planos en papel cuando puedes{' '}
                  <span style={{ color: 'var(--lego-yellow)' }}>prototipar el éxito en 3D?</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── AGT: Técnicas Ágiles ── */}
        <section style={{ padding: '48px 24px 80px', background: 'var(--ink-900)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.6875rem',
                  letterSpacing: '0.15em', color: 'var(--lego-green)',
                  background: 'rgba(0,166,80,0.1)', border: '1px solid rgba(0,166,80,0.25)',
                  padding: '5px 12px', borderRadius: 4, textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}
              >AGT — Agile Techniques</div>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,166,80,0.2)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-600)' }}>3 técnicas</span>
            </div>
            <div className="skills-grid">
              {AGT_TECNICAS.map((t) => (
                <div
                  key={t.code}
                  className="skills-card"
                  style={{ background: 'var(--ink-800)', borderRadius: 10, borderTop: '3px solid var(--lego-green)', padding: '28px 24px' }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700,
                        color: 'var(--lego-green)', background: 'rgba(0,166,80,0.08)',
                        padding: '3px 8px', borderRadius: 3, letterSpacing: '0.05em',
                      }}
                    >{t.code}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.0625rem', color: 'var(--ink-000)', marginBottom: 8, letterSpacing: '-0.02em', lineHeight: 1.25 }}>{t.title}</h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.875rem', color: 'var(--lego-green)', marginBottom: 12, lineHeight: 1.4 }}>
                    &ldquo;{t.tagline}&rdquo;
                  </p>
                  <p
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--ink-200)', lineHeight: 1.65 }}
                    dangerouslySetInnerHTML={{ __html: t.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
