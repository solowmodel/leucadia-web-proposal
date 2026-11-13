import Link from 'next/link';

export default function About() {
  return (
    <article
      style={{
        maxWidth: '65ch',
        margin: '0 auto',
        padding: '48px 20px',
        lineHeight: '1.7',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Back navigation */}
      <nav style={{ marginBottom: '32px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#666' }}>
          ← Back to Home
        </Link>
      </nav>

      {/* Article Header */}
      <header style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px', lineHeight: '1.2' }}>
          How I Built This Site
        </h1>
        <p style={{ color: '#666', margin: 0 }}>
          A look behind the design and development process.
        </p>
      </header>

      {/* Article Body */}
      <section>
        <h2>1. The Initial Idea</h2>
        <p>
          I built this page to showcase my web, design, and technical background. To kick things off, I set up a new GitHub repository and cloned a landing page template I had previously developed. As the vision for the site took shape, though, I ended up scrapping most of that original framework to build something lighter and better suited to the project.
        </p>

        {/* Example Image with Caption */}
        <figure style={{ margin: '32px 0' }}>
          <img
            src="/01.png"
            alt="Early sketch of the layout"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'block',
            }}
          />
          <figcaption
            style={{
              fontSize: '0.875rem',
              color: '#666',
              marginTop: '8px',
              textAlign: 'center',
            }}
          >
            Cloning and initiating the next js project.
          </figcaption>
        </figure>

        <h2>2. Building with Next.js</h2>
        <p>
     I like working with Next.js because it is fast, flexible, and built with SEO in mind. Page transitions feel instant, and it gives me full control over the layout—whether I am building a locked, minimal landing page or a scrollable article. It also handles performance and search indexing out of the box, so I can focus on the design and writing instead of complex setup.
        </p>
        <figure style={{ margin: '32px 0' }}>
          <img
            src="/02.png"
            alt="Early sketch of the layout"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'block',
            }}
          />
          <figcaption
            style={{
              fontSize: '0.875rem',
              color: '#666',
              marginTop: '8px',
              textAlign: 'center',
            }}
          >
            Next Js Framework.
          </figcaption>
        </figure>

                <h2>3. Design tools</h2>
        <p>
     I used Inkscape to turn the image from your website into a vector. Then used illustrator to edit the path and remove the bottom text from the vector.
        </p>
        <figure style={{ margin: '32px 0' }}>
          <img
            src="/03.png"
            alt="Early sketch of the layout"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'block',
            }}
          />
          <figcaption
            style={{
              fontSize: '0.875rem',
              color: '#666',
              marginTop: '8px',
              textAlign: 'center',
            }}
          >
            Working with vector in Adobe Illustrator.
          </figcaption>
        </figure>

      </section>
    </article>
  );
}
