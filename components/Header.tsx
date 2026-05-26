import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Inicio',      href: '/landing' },
  { label: 'Metodología', href: '/metodologia' },
  { label: 'Catálogo',    href: '/' },
  { label: 'New Skills',  href: '/new-skills' },
];

export default function Header() {
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/white_logo_seriouschange.png"
            alt="Serious Change"
            height={36}
            width={80}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
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
              {item.label}
            </Link>
          ))}
          <Link
            href="/#catalogo"
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
          </Link>
        </nav>
      </div>
    </header>
  );
}
