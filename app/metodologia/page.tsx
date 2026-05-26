import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metodología — Serious Change',
  description: 'Serious Change: metodología de intervención estratégica evolucionada del modelo LEGO® SERIOUS PLAY®.',
};

/* Imágenes de LEGO Serious Play (Pexels, verificadas 200) */
const LEGO_HERO   = 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop';
const LEGO_MOD1   = 'https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
const LEGO_MOD2   = 'https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
const LEGO_MOD3   = 'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';

const MODULOS = [
  {
    num: '01', side: 'left' as const, color: 'var(--lego-yellow)',
    title: 'Diseño de Innovación Organizacional',
    body: 'Utiliza marcos de alto nivel como las Cinco Fuerzas de Porter y la Curva de Valor (Océano Azul) para estructurar el ecosistema de negocio y prototipar soluciones únicas.',
    img: LEGO_MOD1,
  },
  {
    num: '02', side: 'right' as const, color: 'var(--lego-blue)',
    title: 'Diagnóstico de Upskilling y Reskilling',
    body: 'Analiza el sistema de capacidades de la organización y desmantela sesgos cognitivos (como el de anclaje) para alinear el talento con la estrategia de innovación.',
    img: LEGO_MOD2,
  },
  {
    num: '03', side: 'left' as const, color: 'var(--lego-green)',
    title: 'Estrategia y Resiliencia In-House',
    body: 'Somete el sistema a escenarios de crisis (Juego de Emergencia) para formular Principios Rectores Simples que aseguran decisiones alineadas sin intervención constante de la dirección.',
    img: LEGO_MOD3,
  },
];

const VALORES = [
  {
    label: 'Compromiso 100/100', icon: '◎', color: 'var(--lego-yellow)',
    body: 'Garantiza que el 100% de los líderes aporten su conocimiento latente, eliminando los sesgos jerárquicos y los silos departamentales.',
  },
  {
    label: 'Tangibilización de OKRs', icon: '⬡', color: 'var(--lego-blue)',
    body: 'Los objetivos estratégicos se construyen físicamente, eliminando ambigüedades semánticas y conectando el esfuerzo individual con la meta global.',
  },
  {
    label: 'Rigor Científico', icon: '◈', color: 'var(--lego-green)',
    body: 'Se basa en la conexión neuro-motriz (conocimiento manual) y el estado de Flow para potenciar la imaginación estratégica desafiante.',
  },
];

export default function MetodologiaPage() {
  return (
    <>
      <style>{`
        .metod-hero-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .bimodal-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .metod-step       { display: grid; grid-template-columns: 1fr 64px 1fr; align-items: center; padding: 40px 0; }
        .valor-grid       { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

        @media (max-width: 768px) {
          .metod-hero-grid  { grid-template-columns: 1fr !important; gap: 32px !important; }
          .bimodal-grid     { grid-template-columns: 1fr !important; }
          .metod-step       { grid-template-columns: 1fr !important; }
          .metod-step-num   { display: none !important; }
          .valor-grid       { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ flex: 1, background: 'var(--ink-900)' }}>

        {/* ── Hero ── */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--ink-900) 0%, var(--ink-800) 100%)',
            padding: '96px 24px 80px',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid var(--ink-700)',
          }}
        >
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,215,0,0.015) 60px, rgba(255,215,0,0.015) 61px)',
              pointerEvents: 'none',
            }}
          />
          <div className="metod-hero-grid" style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.2)',
                  borderRadius: 999, padding: '4px 12px', marginBottom: 20,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--lego-yellow)', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--lego-yellow)' }}>
                  Marco de Intervención Estratégica
                </span>
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.04em',
                  color: 'var(--ink-000)', lineHeight: 1.05, marginBottom: 16,
                }}
              >
                Metodología
              </h1>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--lego-yellow)', marginBottom: 24, lineHeight: 1.3 }}>
                Llegó el momento de dominar el juego.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--ink-200)', lineHeight: 1.7, maxWidth: 480 }}>
                En un entorno de incertidumbre radical, las organizaciones no pueden permitirse avanzar a una sola velocidad.{' '}
                <strong style={{ color: 'var(--ink-000)' }}>Serious Change</strong> es una metodología de intervención estratégica,
                evolucionada del modelo LEGO® SERIOUS PLAY®, diseñada específicamente para que la Alta Dirección y los Mandos Medios
                gestionen la complejidad del negocio con rigor sistémico y resultados medibles.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,215,0,0.15)', boxShadow: '0 32px 64px rgba(0,0,0,0.5)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LEGO_HERO}
                  alt="LEGO Serious Play — bricks coloridos"
                  style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute', bottom: -20, right: -20, width: 80, height: 80,
                  backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.4) 1px, transparent 1px)',
                  backgroundSize: '12px 12px',
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Bimodal ── */}
        <section style={{ padding: '64px 24px', background: 'var(--ink-800)', borderBottom: '1px solid var(--ink-700)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-400)', marginBottom: 8 }}>
              Programa Bimodal
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--ink-000)',
                marginBottom: 32, letterSpacing: '-0.025em',
              }}
            >
              Estrategia a dos velocidades
            </h2>
            <div className="bimodal-grid">
              {/* Modo 1 */}
              <div
                style={{
                  background: 'var(--ink-900)', borderRadius: 12,
                  borderLeft: '4px solid var(--lego-yellow)',
                  padding: '32px 28px', position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-600)', letterSpacing: '0.05em' }}>MODO 01</div>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(255,215,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="7" height="7" rx="1" fill="var(--lego-yellow)" />
                    <rect x="11" y="2" width="7" height="7" rx="1" fill="rgba(255,215,0,0.3)" />
                    <rect x="2" y="11" width="7" height="7" rx="1" fill="rgba(255,215,0,0.3)" />
                    <rect x="11" y="11" width="7" height="7" rx="1" fill="rgba(255,215,0,0.3)" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--ink-000)', marginBottom: 8, letterSpacing: '-0.02em' }}>
                  Núcleo Operativo
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-200)', lineHeight: 1.65, marginBottom: 16 }}>
                  Eficiencia, predictibilidad y robustez de los sistemas críticos. A través de una{' '}
                  <em style={{ color: 'var(--ink-000)' }}>&ldquo;Auditoría Cognitiva de Sistemas&rdquo;</em>, se identifican cuellos de botella
                  y redundancias en los procesos heredados.
                </p>
                <div style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--lego-yellow)', background: 'rgba(255,215,0,0.08)', padding: '4px 10px', borderRadius: 4 }}>
                  Auditoría Cognitiva
                </div>
              </div>

              {/* Modo 2 */}
              <div
                style={{
                  background: 'var(--ink-900)', borderRadius: 12,
                  borderLeft: '4px solid var(--lego-blue)',
                  padding: '32px 28px', position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-600)', letterSpacing: '0.05em' }}>MODO 02</div>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(0,108,183,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" fill="none" stroke="var(--lego-blue)" strokeWidth="1.5" />
                    <circle cx="10" cy="10" r="3" fill="var(--lego-blue)" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--ink-000)', marginBottom: 8, letterSpacing: '-0.02em' }}>
                  Ágil y Exploratorio
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-200)', lineHeight: 1.65, marginBottom: 16 }}>
                  <em style={{ color: 'var(--ink-000)' }}>&ldquo;Impresora 3D de pensamientos&rdquo;</em> para prototipar innovaciones y navegar
                  mercados volátiles. Permite probar hipótesis estratégicas en un entorno seguro antes de la inversión real.
                </p>
                <div style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--lego-blue)', background: 'rgba(0,108,183,0.1)', padding: '4px 10px', borderRadius: 4 }}>
                  Prototipado Estratégico
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Arquitectura 3 Módulos ── */}
        <section style={{ padding: '80px 24px', background: 'var(--ink-900)', borderBottom: '1px solid var(--ink-700)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-400)', marginBottom: 8 }}>
                Proceso Secuencial
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', color: 'var(--ink-000)', letterSpacing: '-0.025em',
                }}
              >
                Arquitectura de la Metodología
              </h2>
            </div>

            {MODULOS.map((step, i) => (
              <div
                key={i}
                className="metod-step"
                style={{ borderBottom: i < 2 ? '1px solid var(--ink-700)' : 'none' }}
              >
                {step.side === 'left' ? (
                  <>
                    <div style={{ paddingRight: 40 }}>
                      <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={step.img} alt={step.title} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                      </div>
                    </div>
                    <div
                      className="metod-step-num"
                      style={{
                        width: 64, height: 64, borderRadius: '50%', background: step.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1rem', color: 'var(--ink-900)',
                        flexShrink: 0, margin: '0 auto',
                      }}
                    >{step.num}</div>
                    <div style={{ paddingLeft: 40 }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--ink-000)', marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-200)', lineHeight: 1.65 }}>{step.body}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ paddingRight: 40, textAlign: 'right' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--ink-000)', marginBottom: 12, letterSpacing: '-0.02em' }}>{step.title}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-200)', lineHeight: 1.65 }}>{step.body}</p>
                    </div>
                    <div
                      className="metod-step-num"
                      style={{
                        width: 64, height: 64, borderRadius: '50%', background: step.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1rem', color: 'var(--ink-900)',
                        flexShrink: 0, margin: '0 auto',
                      }}
                    >{step.num}</div>
                    <div style={{ paddingLeft: 40 }}>
                      <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={step.img} alt={step.title} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Valor Agregado ── */}
        <section style={{ padding: '72px 24px', background: 'var(--ink-800)', borderBottom: '1px solid var(--ink-700)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', color: 'var(--ink-000)', letterSpacing: '-0.025em', marginBottom: 8,
                }}
              >
                De la Replicación a la Transferencia
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--ink-400)' }}>Nivel 4 de Kirkpatrick</p>
            </div>
            <div className="valor-grid">
              {VALORES.map((item) => (
                <div
                  key={item.label}
                  style={{ background: 'var(--ink-900)', borderRadius: 12, padding: '28px 24px', border: '1px solid var(--ink-700)' }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: item.color, marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--ink-000)', marginBottom: 10, letterSpacing: '-0.015em' }}>{item.label}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--ink-200)', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cita final ── */}
        <section style={{ padding: '72px 24px', background: 'linear-gradient(135deg, var(--ink-900) 0%, #0d0d1a 100%)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
            <div
              style={{
                position: 'absolute', top: -24, left: 0,
                fontFamily: 'Georgia, serif', fontSize: '7rem', color: 'rgba(255,215,0,0.1)',
                lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
              }}
            >&ldquo;</div>
            <blockquote style={{ borderLeft: '3px solid var(--lego-yellow)', paddingLeft: 28, position: 'relative' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--ink-100)', lineHeight: 1.7,
                }}
              >
                Serious Change no es solo un taller; es un sistema de gobernanza que dota a la organización de la capacidad
                de correr una maratón y un esprint simultáneamente, asegurando su relevancia competitiva en un cambio perpetuo.
              </p>
            </blockquote>
          </div>
        </section>

      </main>
    </>
  );
}
