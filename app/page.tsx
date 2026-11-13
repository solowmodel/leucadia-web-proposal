import Link from 'next/link';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        width: '100vw',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Main clickable image */}
      <Link href="/about">
        <img
          src="/main.png"
          alt="Main Content"
          style={{
            width: '200px',
            height: '100px',
            objectFit: 'contain',
            display: 'block',
            cursor: 'pointer',
          }}
        />
      </Link>

      {/* Small text and upward arrow stacked underneath the image */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '12px',
          color: '#666',
          fontSize: '0.875rem',
          lineHeight: '1.2',
          userSelect: 'none',
        }}
      >
        <span style={{ display: 'block', fontSize: '1rem' }}>↑</span>
        <p style={{ margin: '4px 0 0 0' }}>click me</p>
      </div>
    </main>
  );
}
