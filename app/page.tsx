import Link from 'next/link';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        width: '100vw',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
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
    </main>
  );
}
