import Image from 'next/image';

export default function Footer() {
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/white_logo_seriouschange.png"
            alt="Serious Change"
            height={28}
            width={64}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
          />
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--ink-600)' }}>
          LEGO® is a trademark of the LEGO Group · Not affiliated with The LEGO Group
        </div>
      </div>
    </footer>
  );
}
