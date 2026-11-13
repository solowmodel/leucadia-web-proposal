import Link from 'next/link';

export default function Proposal() {
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
      <nav
        style={{
          marginBottom: '32px',
          display: 'flex',
          gap: '20px',
          fontSize: '0.95rem',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none', color: '#666' }}>
          ← Home
        </Link>
        <Link href="/about" style={{ textDecoration: 'none', color: '#666' }}>
          ← How I Built This Site
        </Link>
      </nav>

      {/* Proposal Header */}
      <header style={{ marginBottom: '32px' }}>
        <p
          style={{
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#666',
            marginBottom: '8px',
          }}
        >
          Leucadia 101 Main Street Association
        </p>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px', lineHeight: '1.2' }}>
          Web Transition &amp; Digital Design Proposal
        </h1>
        <p style={{ color: '#666', margin: 0 }}>
          Proposed Role: Digital &amp; Web Specialist
        </p>
      </header>

      {/* Proposal Body */}
      <section>
        <h2>1. Overview</h2>
        <p>
          Leucadia 101 Main Street plays a vital role in preserving the character
          and economic vitality of the North Coast Highway 101 corridor. As the
          organization transitions to a new website, there is a great opportunity
          to make its digital presence feel as welcoming, fast, and
          community-driven as the neighborhood itself.
        </p>
        <p>
          As shown in my breakdown of how I built this site, my background bridges
          both visual design and modern web engineering. I am proposing a
          flexible role—serving as{' '}
          <strong>Digital &amp; Web Specialist</strong>—to oversee the
          migration and ongoing management of the new site, while contributing
          custom web design and technical support on a project-by-project basis.
        </p>

        <h2>2. Website Transfer &amp; Ongoing Management</h2>
        <p>
          A smooth transition ensures member businesses, residents, and
          visitors can easily find local directories, upcoming events, and
          community resources without disruption. Bringing the same
          performance-first workflow used on this site, my focus during and
          after launch includes:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>Site Migration &amp; Reliable Deployment:</strong> Assisting
            with the transfer of content, business directories, and event
            listings while using clean version control and modern hosting
            workflows for fast, worry-free updates.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Mobile Speed &amp; SEO Optimization:</strong> Structuring
            pages for fast load times, strong search indexing, and clean mobile
            layouts for locals and visitors exploring the 101 corridor on their
            phones.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Routine Updates &amp; Maintenance:</strong> Keeping seasonal
            event pages, sponsor details, and community announcements accurate
            and up to date.
          </li>
        </ul>

        <h2>3. Project-by-Project Design &amp; Technical Support</h2>
        <p>
          Beyond day-to-day site upkeep, I can step in for dedicated creative and
          technical initiatives that align with the Promotion and Design
          committees:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>Vector &amp; Brand Asset Production:</strong> Converting,
            cleaning up, and adapting logos, maps, and event artwork using tools
            like Illustrator and Inkscape so graphics stay crisp across web and
            print.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Event Landing Pages:</strong> Designing and building
            fast, custom promotional pages for signature events like
            LeucadiART Walk, Summer Fun on the 101, and Taste of Leucadia.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Custom Web Features:</strong> Developing lightweight
            interactive tools, community guides, or sign-up flows tailored to
            specific campaigns.
          </li>
        </ul>

        <h2>4. Working Together</h2>
        <p>
          This hybrid structure keeps core website management reliable and
          consistent while allowing Leucadia 101 to tap into custom design and
          development only when specific events or projects call for it. I
          would love to connect with the team to align on the migration
          timeline and immediate priorities.
        </p>
      </section>
    </article>
  );
}
