import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serious Change — LEGO® Serious Play® para Alta Dirección',
  description: 'Transforma los desafíos de tu organización en modelos físicos, decisiones compartidas y resultados medibles. La metodología que construye resiliencia pieza por pieza.',
};

const STATS = [
  { value: '10', label: 'Talleres especializados' },
  { value: '3',  label: 'Niveles de profundidad' },
  { value: '6',  label: 'Técnicas exclusivas ST + AGT' },
];

const PROPS = [
  {
    icon: '⬡',
    title: 'Diagnóstico Físico',
    desc: 'Construye el problema con LEGO®, hazlo visible y compartido. Lo que no se puede ver, no se puede resolver.',
  },
  {
    icon: '◈',
    title: 'Decisión Colectiva',
    desc: '100% de participación. Cero sesgos de jerarquía. Cada voz construye literalmente la solución.',
  },
  {
    icon: '◆',
    title: 'Transferencia Real',
    desc: 'Cada modelo se cierra con KPIs reales. Niveles 3 y 4 de Kirkpatrick: cambio de conducta e impacto en negocio.',
  },
];

export default function LandingPage() {
  return (
    <>
      <style>{`
        .landing-hero-text { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .landing-hero-text.delay-1 { animation-delay: 0.1s; }
        .landing-hero-text.delay-2 { animation-delay: 0.22s; }
        .landing-hero-text.delay-3 { animation-delay: 0.34s; }
        .landing-hero-text.delay-4 { animation-delay: 0.46s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--lego-yellow); color: #111118;
          font-family: var(--font-body); font-size: 0.9375rem; font-weight: 700;
          padding: 14px 28px; border-radius: 8px; text-decoration: none;
          transition: transform 120ms, box-shadow 120ms;
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,215,0,0.35); }

        .cta-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          color: #fff; font-family: var(--font-body); font-size: 0.9375rem; font-weight: 500;
          padding: 13px 28px; border-radius: 8px; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.35);
          transition: border-color 120ms, background 120ms;
        }
        .cta-secondary:hover { border-color: #fff; background: rgba(255,255,255,0.08); }

        .stat-item { flex: 1; text-align: center; padding: 32px 24px; }
        .stat-divider { width: 1px; background: var(--ink-700); align-self: stretch; margin: 24px 0; }

        .prop-card {
          flex: 1; padding: 32px 28px;
          background: var(--ink-800); border-radius: 10;
          border-top: 3px solid rgba(255,215,0,0.3);
          transition: border-color 200ms;
        }
        .prop-card:hover { border-color: var(--lego-yellow); }

        @media (max-width: 768px) {
          .hero-content { max-width: 100% !important; }
          .stats-row { flex-direction: column !important; }
          .stat-divider { width: auto !important; height: 1px !important; margin: 0 24px !important; align-self: auto !important; }
          .props-row { flex-direction: column !important; }
        }
      `}</style>

      <main style={{ flex: 1, background: 'var(--ink-900)' }}>

        {/* ── HERO ── */}
        <section
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background image */}
          <Image
            src="/hero-landing.png"
            alt="Ejecutiva caminando segura mientras LEGO bricks caen como lluvia"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />

          {/* Scan-line texture */}
          <div
            style={{
              position: 'absolute', inset: 0, zIndex: 1,
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.015) 3px, rgba(0,0,0,0.015) 4px)',
              pointerEvents: 'none',
            }}
          />

          {/* Base dark overlay */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'rgba(0,0,0,0.52)' }} />

          {/* Directional gradient — darker left for text */}
          <div
            style={{
              position: 'absolute', inset: 0, zIndex: 3,
              background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.05) 100%)',
            }}
          />

          {/* Bottom fade */}
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, zIndex: 4,
              background: 'linear-gradient(to top, var(--ink-900) 0%, transparent 100%)',
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative', zIndex: 5,
              maxWidth: 1100, margin: '0 auto', padding: '0 24px',
              width: '100%', paddingTop: 80, paddingBottom: 80,
            }}
          >
            <div className="hero-content" style={{ maxWidth: 560 }}>

              {/* Eyebrow */}
              <div
                className="landing-hero-text delay-1"
                style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}
              >
                <div style={{ width: 3, height: 48, borderRadius: 2, background: 'var(--lego-yellow)', flexShrink: 0 }} />
                <p
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 700,
                    letterSpacing: '0.2em', color: 'var(--lego-yellow)',
                    textTransform: 'uppercase', margin: 0,
                  }}
                >
                  Serious Change · LEGO® Serious Play®
                </p>
              </div>

              {/* Headline */}
              <h1
                className="landing-hero-text delay-2"
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                  letterSpacing: '-0.04em', lineHeight: 1.0,
                  color: '#ffffff', marginBottom: 24,
                }}
              >
                Es hora de{' '}
                <span style={{ color: 'var(--lego-yellow)' }}>dominar</span>
                <br />
                el{' '}
                <span
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px var(--lego-yellow)',
                  }}
                >
                  Juego.
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className="landing-hero-text delay-3"
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '1.0625rem',
                  color: 'rgba(255,255,255,0.8)', lineHeight: 1.65,
                  marginBottom: 40, maxWidth: 460,
                }}
              >
                Transforma los desafíos de tu organización en modelos físicos,
                decisiones compartidas y resultados medibles.
                La metodología que construye resiliencia pieza por pieza.
              </p>

              {/* CTAs */}
              <div
                className="landing-hero-text delay-4"
                style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
              >
                <Link href="/" className="cta-primary">
                  Ver Catálogo de Talleres
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/metodologia" className="cta-secondary">
                  Conoce la Metodología
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section style={{ background: 'var(--ink-900)', borderBottom: '1px solid var(--ink-800)' }}>
          <div
            style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}
          >
            <div className="stats-row" style={{ display: 'flex', alignItems: 'stretch' }}>
              {STATS.map((s, i) => (
                <>
                  <div key={s.value} className="stat-item">
                    <div
                      style={{
                        fontFamily: 'var(--font-display)', fontWeight: 800,
                        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.04em',
                        color: 'var(--lego-yellow)', lineHeight: 1, marginBottom: 8,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                        color: 'var(--ink-400)', fontWeight: 500,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && <div key={`div-${i}`} className="stat-divider" />}
                </>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROPUESTA DE VALOR ── */}
        <section style={{ padding: '80px 24px 96px', background: 'var(--ink-900)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>

            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.6875rem',
                  letterSpacing: '0.15em', color: 'var(--lego-yellow)',
                  background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.2)',
                  padding: '5px 12px', borderRadius: 4, textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}
              >
                Por qué LEGO® Serious Play®
              </div>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,215,0,0.12)' }} />
            </div>

            {/* Cards */}
            <div className="props-row" style={{ display: 'flex', gap: 24, marginBottom: 64 }}>
              {PROPS.map((p) => (
                <div key={p.title} className="prop-card" style={{ borderRadius: 10 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: '1.25rem',
                      color: 'var(--lego-yellow)', marginBottom: 16, lineHeight: 1,
                    }}
                  >
                    {p.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem',
                      color: 'var(--ink-000)', marginBottom: 10, letterSpacing: '-0.02em',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                      color: 'var(--ink-300)', lineHeight: 1.65, margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.9375rem',
                  color: 'var(--ink-400)', marginBottom: 20,
                }}
              >
                10 talleres diseñados para equipos ejecutivos — encuentra el tuyo.
              </p>
              <Link href="/" className="cta-primary" style={{ display: 'inline-flex' }}>
                Selecciona tu taller
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
