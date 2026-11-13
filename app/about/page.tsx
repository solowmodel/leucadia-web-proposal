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

        <h2>3. Design Tools</h2>
        <p>
          I used Inkscape to turn the image from your website into a vector. Then used Illustrator to edit the path and remove the bottom text from the vector.
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

        <h2>4. Hosting</h2>
        <p>
          I use a service called Netlify to host sites and applications I am developing. It is a great tool to use during the development and even for full launch. You can use custom domains and scale up storage as the site or app grows.
          First I uploaded the site files to a GitHub repository. After that Netlify allows me to connect the repository to the project. This is nice because it will automatically detect any updates to the GitHub and redeploy the site or app.
        </p>
        <figure style={{ margin: '32px 0' }}>
          <img
            src="/06.png"
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
            New GitHub repository.
          </figcaption>
        </figure>
        <figure style={{ margin: '32px 0' }}>
          <img
            src="/07.png"
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
            Netlify building the site!
          </figcaption>
        </figure>

        {/* Centered & Stylized Proposal Button */}
        <div
          style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid #eaeaea',
            textAlign: 'center',
          }}
        >
          <Link
            href="/proposal"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              backgroundColor: '#111',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '9999px',
              fontWeight: '500',
              fontSize: '1rem',
              letterSpacing: '0.01em',
            }}
          >
            View Proposal →
          </Link>
        </div>
      </section>
    </article>
  );
}
