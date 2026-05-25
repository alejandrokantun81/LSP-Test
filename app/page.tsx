'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import {
  TALLER_DATA,
  CUALIDADES,
  NIVELES,
  AT_MAP,
  type TallerData,
  type Nivel,
} from '@/lib/lsp-data';

// ─── HEADER ───────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header
      style={{
        background: 'var(--ink-800)',
        borderBottom: '1px solid var(--ink-700)',
        position: 'sticky',
        top: 0,
        zIndex: 200,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'var(--lego-yellow)',
              boxShadow: 'inset 0 -3px 0 var(--lego-yellow-dark), 0 2px 8px rgba(255,215,0,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                border: '2.5px solid var(--lego-yellow-dark)',
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.0625rem',
                color: 'var(--ink-000)',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              LSP Explorer
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                color: 'var(--ink-400)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              LEGO® Serious Play®
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {['Metodología', 'Catálogo', 'Contacto'].map((item) => (
            <a
              key={item}
              href="#"
              className="nav-link-item"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--ink-200)',
                textDecoration: 'none',
                transition: 'color 100ms',
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#catalogo"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--ink-800)',
              background: 'var(--lego-yellow)',
              padding: '7px 16px',
              borderRadius: 6,
              textDecoration: 'none',
            }}
          >
            Ver Talleres
          </a>
        </nav>
      </div>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

interface HeroProps {
  selectedCualidad: string | null;
  onCualidadChange: (v: string) => void;
}

function Hero({ selectedCualidad, onCualidadChange }: HeroProps) {
  return (
    <section
      id="catalogo"
      style={{
        background:
          'linear-gradient(160deg, var(--ink-900) 0%, var(--ink-800) 55%, #1a1a2e 100%)',
        padding: '72px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative stud rings */}
      {[
        { top: '10%', left: '5%' },
        { top: '25%', left: '15%' },
        { top: '70%', left: '8%' },
        { top: '80%', left: '22%' },
        { top: '15%', left: '85%' },
        { top: '45%', left: '90%' },
        { top: '65%', left: '78%' },
        { top: '35%', left: '95%' },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: '2px solid rgba(255,215,0,0.07)',
            top: pos.top,
            left: pos.left,
            transform: 'translate(-50%,-50%)',
          }}
        />
      ))}

      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,215,0,0.12)',
            border: '1px solid rgba(255,215,0,0.25)',
            borderRadius: 999,
            padding: '5px 14px',
            marginBottom: 24,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--lego-yellow)' }} />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--lego-yellow)',
            }}
          >
            Catálogo de Talleres 2025
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.875rem, 5vw, 3.25rem)',
            letterSpacing: '-0.04em',
            color: 'var(--ink-000)',
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          ¿Cuál es el desafío que{' '}
          <span style={{ color: 'var(--lego-yellow)' }}>tu organización</span>
          {' '}necesita resolver?
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            color: 'var(--ink-200)',
            lineHeight: 1.65,
            maxWidth: 540,
            margin: '0 auto 40px',
          }}
        >
          Selecciona el enfoque que mejor refleja el problema de tu equipo.
          Encontraremos el taller LEGO® Serious Play® diseñado exactamente para ese contexto.
        </p>

        {/* Main Dropdown */}
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <label
            htmlFor="main-selector"
            style={{
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-400)',
              marginBottom: 10,
              textAlign: 'left',
            }}
          >
            Selecciona un enfoque de taller
          </label>
          <div style={{ position: 'relative' }}>
            <select
              id="main-selector"
              value={selectedCualidad ?? ''}
              onChange={(e) => e.target.value && onCualidadChange(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 48px 14px 18px',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 500,
                color: selectedCualidad ? 'var(--ink-800)' : '#9CA3AF',
                background: 'var(--ink-000)',
                border: `2px solid ${selectedCualidad ? 'var(--lego-yellow)' : 'var(--ink-100)'}`,
                borderRadius: 10,
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none',
                outline: 'none',
                transition: 'border-color 150ms, box-shadow 150ms',
                boxShadow: selectedCualidad ? 'var(--shadow-yellow-sm)' : 'var(--shadow-sm)',
              }}
            >
              <option value="" disabled>
                — Elige el desafío organizacional —
              </option>
              {CUALIDADES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <div
              style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: selectedCualidad ? 'var(--lego-yellow-dark)' : '#9CA3AF',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.5 6.75 9 11.25l4.5-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--ink-400)',
              marginTop: 10,
              textAlign: 'center',
            }}
          >
            {selectedCualidad
              ? '✓ Diagnóstico cargado — explora los filtros a continuación'
              : '10 talleres · Niveles Fundacional, Intermedio y Avanzado'}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── INFOGRAFÍA ───────────────────────────────────────────────────────────────

function Infografia({ data }: { data: TallerData }) {
  const temasLeft = data.temas.slice(0, 3);
  const temasRight = data.temas.slice(3);

  return (
    <section
      style={{
        background: '#FAFAF7',
        padding: '64px 24px 56px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Organic blob — mint green, top-left */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          left: -80,
          width: 480,
          height: 480,
          borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
          background: 'rgba(0,166,80,0.09)',
          filter: 'blur(48px)',
          pointerEvents: 'none',
        }}
      />
      {/* Organic blob — amber yellow, bottom-right */}
      <div
        style={{
          position: 'absolute',
          bottom: -80,
          right: -60,
          width: 420,
          height: 420,
          borderRadius: '38% 62% 46% 54% / 60% 44% 56% 40%',
          background: 'rgba(255,215,0,0.13)',
          filter: 'blur(44px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 940, margin: '0 auto', position: 'relative' }}>

        {/* Header — centered label + title + subtitle */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-400)',
              display: 'block',
              marginBottom: 12,
            }}
          >
            Diagnóstico Organizacional
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
              letterSpacing: '-0.025em',
              color: 'var(--ink-800)',
              lineHeight: 1.2,
              marginBottom: 10,
            }}
          >
            {data.nombre}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontStyle: 'italic',
              color: 'var(--ink-400)',
              lineHeight: 1.6,
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            {data.objetivo}
          </p>
        </div>

        {/* Two cards + dotted connector */}
        <div
          className="infografia-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 56px 1fr',
            alignItems: 'start',
          }}
        >
          {/* Left card — Problema */}
          <div
            style={{
              background: '#FFD700',
              borderRadius: 20,
              padding: '28px 26px 28px',
              boxShadow:
                '0 2px 4px rgba(17,17,24,0.06), 0 8px 24px -4px rgba(255,215,0,0.28), 0 24px 48px -12px rgba(17,17,24,0.10)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.8125rem',
                fontStyle: 'normal',
                color: 'var(--ink-800)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Problemas
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '0.9375rem',
                fontStyle: 'normal',
                color: 'var(--ink-800)',
                lineHeight: 1.6,
                marginBottom: 20,
              }}
            >
              {data.problema}
            </p>
            <div
              style={{
                height: 1,
                background: 'rgba(17,17,24,0.12)',
                marginBottom: 18,
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(17,17,24,0.45)',
                marginBottom: 12,
              }}
            >
              Síntomas Clave
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {temasLeft.map((tema) => (
                <li
                  key={tema}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: 'var(--ink-700)',
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(17,17,24,0.25)',
                    textUnderlineOffset: '3px',
                    lineHeight: 1.45,
                  }}
                >
                  {tema}
                </li>
              ))}
            </ul>
          </div>

          {/* Dotted connector line */}
          <div
            className="infografia-connector"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: 28,
              gap: 0,
            }}
          >
            <div
              style={{
                width: 2,
                height: 180,
                backgroundImage:
                  'repeating-linear-gradient(to bottom, #1C1C24 0, #1C1C24 5px, transparent 5px, transparent 11px)',
                opacity: 0.18,
              }}
            />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#1C1C24',
                opacity: 0.18,
                marginTop: 4,
              }}
            />
          </div>

          {/* Right card — Diagnóstico */}
          <div
            style={{
              background: '#111118',
              borderRadius: 20,
              padding: '28px 26px 28px',
              boxShadow:
                '0 2px 4px rgba(0,0,0,0.20), 0 8px 24px -4px rgba(0,0,0,0.28), 0 24px 48px -12px rgba(0,0,0,0.30)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.8125rem',
                fontStyle: 'normal',
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Diagnóstico Potencial
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '0.9375rem',
                fontStyle: 'normal',
                color: '#FFFFFF',
                lineHeight: 1.6,
                marginBottom: 20,
              }}
            >
              {data.diagnostico}
            </p>
            <div
              style={{
                height: 1,
                background: 'rgba(255,255,255,0.15)',
                marginBottom: 18,
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: 12,
              }}
            >
              Efectos Organizacionales
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {temasRight.map((tema) => (
                <li
                  key={tema}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: '#FFFFFF',
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(255,255,255,0.30)',
                    textUnderlineOffset: '3px',
                    lineHeight: 1.45,
                  }}
                >
                  {tema}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom dotted tail — transitions into FilterBar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 0 }}>
          <div
            style={{
              width: 2,
              height: 40,
              backgroundImage:
                'repeating-linear-gradient(to bottom, #1C1C24 0, #1C1C24 5px, transparent 5px, transparent 11px)',
              opacity: 0.12,
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── FILTER DROPDOWN ──────────────────────────────────────────────────────────

function FilterDropdown({
  id,
  label,
  value,
  options,
  disabled,
  placeholder,
  onChange,
  dot,
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  disabled: boolean;
  placeholder: string;
  onChange: (v: string) => void;
  dot?: string;
}) {
  const active = !!value;
  return (
    <div style={{ flex: 1, minWidth: 160 }}>
      <label
        htmlFor={id}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-body)',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: disabled ? 'var(--ink-200)' : 'var(--ink-400)',
          marginBottom: 8,
          transition: 'color 150ms',
        }}
      >
        {dot && (
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: disabled ? 'var(--ink-100)' : dot,
              flexShrink: 0,
            }}
          />
        )}
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(e) => e.target.value && onChange(e.target.value)}
          style={{
            width: '100%',
            padding: '11px 40px 11px 14px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            fontWeight: 500,
            color: disabled ? 'var(--ink-200)' : active ? 'var(--ink-800)' : 'var(--ink-400)',
            background: disabled ? 'var(--ink-050)' : 'var(--ink-000)',
            border: `1.5px solid ${active ? 'var(--lego-yellow)' : 'var(--ink-100)'}`,
            borderRadius: 8,
            cursor: disabled ? 'not-allowed' : 'pointer',
            appearance: 'none',
            WebkitAppearance: 'none',
            outline: 'none',
            transition: 'all 150ms',
            boxShadow: active ? 'var(--shadow-yellow-sm)' : 'none',
            opacity: disabled ? 0.5 : 1,
          }}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <div
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: active ? 'var(--lego-yellow-dark)' : disabled ? 'var(--ink-200)' : 'var(--ink-400)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── FILTER BAR ───────────────────────────────────────────────────────────────

interface FilterBarProps {
  selectedNivel: Nivel | null;
  onNivelChange: (v: Nivel) => void;
  selectedDuracion: string | null;
  onDuracionChange: (v: string) => void;
  selectedTaller: string | null;
  onTallerChange: (v: string) => void;
  availableDuraciones: string[];
  availableTalleres: TallerData[];
}

function FilterBar({
  selectedNivel,
  onNivelChange,
  selectedDuracion,
  onDuracionChange,
  selectedTaller,
  onTallerChange,
  availableDuraciones,
  availableTalleres,
}: FilterBarProps) {
  const step = !selectedNivel ? 1 : !selectedDuracion ? 2 : !selectedTaller ? 3 : 4;

  return (
    <section
      style={{
        background: 'var(--ink-000)',
        borderBottom: '1px solid var(--ink-100)',
        padding: '36px 24px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 28,
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 3, height: 20, borderRadius: 2, background: 'var(--lego-red)' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink-400)',
              }}
            >
              Filtro de Talleres
            </span>
          </div>

          {/* Step dots */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {[1, 2, 3].map((s) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    background: step > s ? 'var(--lego-yellow)' : step === s ? 'var(--ink-800)' : 'var(--ink-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 200ms',
                    flexShrink: 0,
                  }}
                >
                  {step > s ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6l2.5 2.5 4.5-5" stroke="var(--ink-800)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: step === s ? 'var(--ink-000)' : 'var(--ink-400)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {s}
                    </span>
                  )}
                </div>
                {s < 3 && (
                  <div
                    style={{
                      width: 24,
                      height: 1,
                      background: step > s ? 'var(--lego-yellow)' : 'var(--ink-100)',
                      transition: 'background 200ms',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dropdowns row */}
        <div
          className="filter-row"
          style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap' }}
        >
          <FilterDropdown
            id="f-nivel"
            label="Nivel"
            value={selectedNivel ?? ''}
            options={NIVELES}
            disabled={false}
            placeholder="— Selecciona Nivel —"
            onChange={(v) => onNivelChange(v as Nivel)}
            dot="var(--lego-green)"
          />

          {/* Arrow */}
          <div style={{ paddingBottom: 14, flexShrink: 0, color: 'var(--ink-100)' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <FilterDropdown
            id="f-duracion"
            label="Duración"
            value={selectedDuracion ?? ''}
            options={availableDuraciones}
            disabled={!selectedNivel}
            placeholder="— Selecciona Duración —"
            onChange={onDuracionChange}
            dot="var(--lego-blue)"
          />

          {/* Arrow */}
          <div style={{ paddingBottom: 14, flexShrink: 0, color: 'var(--ink-100)' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <FilterDropdown
            id="f-taller"
            label="Taller"
            value={selectedTaller ?? ''}
            options={availableTalleres.map((t) => t.nombreCompleto)}
            disabled={!selectedDuracion}
            placeholder="— Selecciona Taller —"
            onChange={onTallerChange}
            dot="var(--lego-red)"
          />
        </div>

        {step < 4 && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--ink-200)', marginTop: 14 }}>
            {step === 1 && '← Comienza seleccionando el nivel de profundidad'}
            {step === 2 && '← Ahora selecciona la duración disponible para el equipo'}
            {step === 3 && '← Elige el taller específico para ver el detalle completo'}
          </p>
        )}
      </div>
    </section>
  );
}

// ─── WORKSHOP CARD ─────────────────────────────────────────────────────────────

const NIVEL_COLORS: Record<Nivel, { bg: string; text: string; border: string }> = {
  Fundacional: { bg: '#D1FAE5', text: '#065F46', border: '#A7F3D0' },
  Intermedio: { bg: '#DBEAFE', text: '#1E40AF', border: '#BFDBFE' },
  Avanzado: { bg: '#FEE2E2', text: '#991B1B', border: '#FECACA' },
};

function WorkshopCard({ taller, dim = false }: { taller: TallerData; dim?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const nivel = NIVEL_COLORS[taller.nivel];

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--ink-000)',
        border: `1px solid ${hovered ? 'var(--ink-200)' : 'var(--ink-100)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 250ms, transform 250ms var(--ease-spring), border-color 150ms',
        display: 'flex',
        flexDirection: 'column',
        opacity: dim ? 0.7 : 1,
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={taller.image}
          alt={taller.imageAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 400ms var(--ease-out)',
            display: 'block',
          }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(17,17,24,0.75) 0%, rgba(17,17,24,0.1) 50%, transparent 100%)',
          }}
        />
        {/* Nivel badge */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            background: nivel.bg,
            border: `1px solid ${nivel.border}`,
            color: nivel.text,
            borderRadius: 999,
            padding: '3px 10px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          {taller.nivel}
        </div>
        {/* Number */}
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            left: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          Taller {String(taller.id).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Metadata */}
        <div style={{ display: 'flex', gap: 14, marginBottom: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--ink-400)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, background: 'var(--lego-yellow-light)', borderRadius: 4, fontSize: '0.75rem' }}>🕐</span>
            {taller.duracion}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--ink-400)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, background: 'var(--lego-yellow-light)', borderRadius: 4, fontSize: '0.75rem' }}>🧱</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              {taller.tecnicas.join(' · ')}
            </span>
          </div>
        </div>

        {/* AT chips */}
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 14 }}>
          {taller.tecnicas.map((at) => (
            <span
              key={at}
              title={AT_MAP[at]}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.5625rem',
                fontWeight: 500,
                background: 'var(--ink-050)',
                border: '1px solid var(--ink-100)',
                borderRadius: 4,
                padding: '2px 6px',
                color: 'var(--ink-600)',
                whiteSpace: 'nowrap',
              }}
            >
              {at}: {AT_MAP[at]}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.1875rem',
            letterSpacing: '-0.015em',
            color: 'var(--ink-800)',
            lineHeight: 1.3,
            marginBottom: 12,
            textAlign: 'left',
          }}
        >
          {taller.nombre}
        </h3>

        {/* Objetivo */}
        <div style={{ marginBottom: 12 }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-200)',
              marginBottom: 5,
            }}
          >
            Objetivo
          </span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--ink-800)', lineHeight: 1.6, textAlign: 'left' }}>
            {taller.objetivo}
          </p>
        </div>

        {/* Descripción */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--ink-400)',
            lineHeight: 1.65,
            marginBottom: 18,
            textAlign: 'left',
            flex: 1,
          }}
        >
          {taller.descripcion}
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--ink-100)', marginBottom: 14 }} />

        {/* Temas */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {taller.temas.map((tema) => (
            <li
              key={tema}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--ink-600)',
                lineHeight: 1.45,
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  border: '2px solid var(--lego-red)',
                  flexShrink: 0,
                  marginTop: 3,
                }}
              />
              {tema}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// ─── WORKSHOP GRID ─────────────────────────────────────────────────────────────

function WorkshopGrid({ taller }: { taller: TallerData }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(timer);
  }, [taller.id]);

  const related = TALLER_DATA.filter(
    (t) => t.nivel === taller.nivel && t.id !== taller.id
  ).slice(0, 2);

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--ink-050)', padding: '48px 24px 80px' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 32,
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <div style={{ width: 3, height: 20, borderRadius: 2, background: 'var(--lego-yellow)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-400)',
                }}
              >
                Taller Seleccionado
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.5rem',
                letterSpacing: '-0.02em',
                color: 'var(--ink-800)',
              }}
            >
              {taller.nombre}
            </h2>
          </div>
          <div
            style={{
              background: 'var(--lego-yellow-light)',
              border: '1px solid var(--lego-yellow)',
              borderRadius: 8,
              padding: '6px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              color: '#8A6D00',
            }}
          >
            {taller.nivel} · {taller.duracion}
          </div>
        </div>

        {/* 3-column grid */}
        <div
          className="workshop-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {/* Primary card */}
          <WorkshopCard taller={taller} />

          {/* Related cards */}
          {related.map((r) => (
            <div key={r.id} style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: -8,
                  left: 12,
                  zIndex: 1,
                  background: 'var(--ink-700)',
                  color: 'var(--ink-200)',
                  borderRadius: 999,
                  padding: '2px 10px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                También en {taller.nivel}
              </div>
              <WorkshopCard taller={r} dim />
            </div>
          ))}
        </div>

        {related.length > 0 && (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--ink-200)',
              marginTop: 20,
              textAlign: 'center',
            }}
          >
            Talleres relacionados del nivel{' '}
            <strong style={{ color: 'var(--ink-400)' }}>{taller.nivel}</strong> mostrados como referencia
          </p>
        )}
      </div>
    </section>
  );
}

// ─── EMPTY PREVIEW ─────────────────────────────────────────────────────────────

function EmptyPreview({ onSelect }: { onSelect: (v: string) => void }) {
  return (
    <section style={{ padding: '64px 24px', background: 'var(--ink-000)', textAlign: 'center' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--ink-050)',
            border: '2px solid var(--ink-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '1.75rem',
          }}
        >
          🧱
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: 'var(--ink-400)',
            marginBottom: 8,
          }}
        >
          Selecciona un enfoque para comenzar
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--ink-200)', lineHeight: 1.6 }}>
          Elige un desafío organizacional arriba. Verás el diagnóstico teórico y podrás
          filtrar el taller exacto para tu equipo.
        </p>

        {/* Preview grid */}
        <div
          className="workshop-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 40 }}
        >
          {TALLER_DATA.slice(0, 3).map((t) => (
            <button
              key={t.id}
              onClick={() => onSelect(t.nombre)}
              style={{
                background: 'var(--ink-000)',
                border: '1px solid var(--ink-100)',
                borderRadius: 12,
                overflow: 'hidden',
                cursor: 'pointer',
                textAlign: 'left',
                padding: 0,
                transition: 'box-shadow 200ms, transform 200ms, border-color 150ms',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = 'var(--shadow-yellow-sm)';
                el.style.transform = 'translateY(-2px)';
                el.style.borderColor = 'var(--lego-yellow)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'var(--ink-100)';
              }}
            >
              <div style={{ height: 90, overflow: 'hidden' }}>
                <img src={t.image} alt={t.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-800)', lineHeight: 1.3 }}>
                  {t.nombre}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: 'var(--ink-400)', marginTop: 3 }}>
                  {t.nivel} · {t.duracion}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: 'var(--ink-900)', borderTop: '1px solid var(--ink-800)', padding: '40px 24px', marginTop: 'auto' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--lego-yellow)', flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--ink-000)' }}>
              LSP Explorer
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--ink-400)' }}>
              Metodología LEGO® Serious Play® para organizaciones
            </div>
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-600)' }}>
          LEGO® is a trademark of the LEGO Group · Not affiliated with The LEGO Group
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ROOT ─────────────────────────────────────────────────────────────────

export default function LSPPage() {
  // ── Level-1: selected cualidad ───────────────────────────────────────────
  const [selectedCualidad, setSelectedCualidad] = useState<string | null>(null);

  // ── Level-2: chained filters ──────────────────────────────────────────────
  const [selectedNivel, setSelectedNivel] = useState<Nivel | null>(null);
  const [selectedDuracion, setSelectedDuracion] = useState<string | null>(null);
  const [selectedTallerFilter, setSelectedTallerFilter] = useState<string | null>(null);

  // ── Derived ───────────────────────────────────────────────────────────────
  const selectedCualidadData = useMemo(
    () => TALLER_DATA.find((t) => t.nombre === selectedCualidad) ?? null,
    [selectedCualidad]
  );

  const availableDuraciones = useMemo(
    () =>
      selectedNivel
        ? [...new Set(TALLER_DATA.filter((t) => t.nivel === selectedNivel).map((t) => t.duracion))]
        : [],
    [selectedNivel]
  );

  const availableTalleres = useMemo(
    () =>
      TALLER_DATA.filter(
        (t) =>
          (!selectedNivel || t.nivel === selectedNivel) &&
          (!selectedDuracion || t.duracion === selectedDuracion)
      ),
    [selectedNivel, selectedDuracion]
  );

  const selectedTallerData = useMemo(
    () => TALLER_DATA.find((t) => t.nombreCompleto === selectedTallerFilter) ?? null,
    [selectedTallerFilter]
  );

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleCualidadChange = (value: string) => {
    setSelectedCualidad(value);
    setSelectedNivel(null);
    setSelectedDuracion(null);
    setSelectedTallerFilter(null);
  };

  const handleNivelChange = (nivel: Nivel) => {
    setSelectedNivel(nivel);
    setSelectedDuracion(null);
    setSelectedTallerFilter(null);
  };

  const handleDuracionChange = (duracion: string) => {
    setSelectedDuracion(duracion);
    setSelectedTallerFilter(null);
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        select:focus-visible { outline: 2px solid var(--lego-yellow); outline-offset: 2px; }
        button:focus-visible { outline: 2px solid var(--lego-yellow); outline-offset: 2px; border-radius: 8px; }
        a:focus-visible { outline: 2px solid var(--lego-yellow); outline-offset: 2px; border-radius: 2px; }
        .nav-link-item:hover { color: var(--ink-000) !important; }

        @media (max-width: 768px) {
          .infografia-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .infografia-connector {
            display: none !important;
          }
          .filter-row {
            flex-direction: column !important;
          }
          .filter-row > div[style*="paddingBottom"] {
            display: none !important;
          }
          .workshop-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1100px) {
          .workshop-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

      <Header />

      <main style={{ flex: 1 }}>
        {/* ── Step 1: Main dropdown ── */}
        <Hero
          selectedCualidad={selectedCualidad}
          onCualidadChange={handleCualidadChange}
        />

        {/* ── Step 2: Infografía + Filtros (conditional) ── */}
        {selectedCualidad && selectedCualidadData && (
          <>
            <Infografia data={selectedCualidadData} />
            <FilterBar
              selectedNivel={selectedNivel}
              onNivelChange={handleNivelChange}
              selectedDuracion={selectedDuracion}
              onDuracionChange={handleDuracionChange}
              selectedTaller={selectedTallerFilter}
              onTallerChange={setSelectedTallerFilter}
              availableDuraciones={availableDuraciones}
              availableTalleres={availableTalleres}
            />
          </>
        )}

        {/* ── Step 3: Workshop grid (conditional) ── */}
        {selectedTallerData && <WorkshopGrid taller={selectedTallerData} />}

        {/* ── Empty state ── */}
        {!selectedCualidad && (
          <EmptyPreview onSelect={handleCualidadChange} />
        )}
      </main>

      <Footer />
    </>
  );
}
