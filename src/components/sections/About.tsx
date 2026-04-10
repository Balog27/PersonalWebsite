import SectionReveal from '@/components/SectionReveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.inner}`}>
        {/* Left column */}
        <div className={styles.left}>
          <SectionReveal delay={0}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <img
                src="/profile.jpeg"
                alt="David Balog"
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent)' }}
              />
              <div>
                <p className="section-eyebrow" style={{ marginBottom: '0.25rem' }}>The Mindset</p>
                <h2 className={`display-lg ${styles.heading}`} style={{ margin: 0 }}>
                  Building at the<br />
                  <span className={styles.headingAccent}>Edge of Logic.</span>
                </h2>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <p className={`body-lg ${styles.paragraph}`}>
              I am a Junior Software Developer with hands-on experience building and maintaining
              internal applications using C#, .NET, Blazor, WPF, React, and Next.js, a stack I have
              developed both through formal internship training and continued growth in a professional
              setting. I have been involved across the full development lifecycle, from designing intuitive
              user interfaces to implementing robust application logic and improving existing systems.
            </p>
            <p className={`body-lg ${styles.paragraph}`} style={{ marginTop: '1rem' }}>
              I am comfortable taking full ownership of a project as the sole developer, or collaborating
              within a small Scrum team. Beyond writing code, I actively participate in requirements
              discussions, conduct code reviews, and contribute to technical documentation, bringing
              both engineering discipline and communication clarity to every project I'm part of.
            </p>
            <p className={`body-lg ${styles.paragraph}`} style={{ marginTop: '1rem' }}>
              I pick up new technologies quickly in practice, and I am always building something, driven by a genuine desire to create things that are useful, well-engineered, and polished. I bring a consistent focus on clean, maintainable code and take pride in the craft of software development.
            </p>
            <p className={`body-lg ${styles.paragraph}`} style={{ marginTop: '1rem' }}>
              Looking ahead, I am keen to keep growing in a junior role where I can deepen my expertise, contribute meaningfully to a professional team, and continue building software that makes an impact.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.25}>
            <div className={styles.stats}>
              {[
                { value: '3+', label: 'Years coding' },
                { value: 'ASP.NET', label: 'Primary Stack' },
                { value: 'Agile', label: 'Methodologies' },
              ].map(({ value, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={`label ${styles.statLabel}`}>{label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Right column — abstract visual */}
        <SectionReveal className={styles.right} delay={0.1} direction="right">
          <div className={styles.visualCard}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                <span className={styles.dot} style={{ background: '#ffbd2e' }} />
                <span className={styles.dot} style={{ background: '#28ca41' }} />
                <span className={`label ${styles.codeTitle}`}>profile.ts</span>
              </div>
              <pre className={styles.code}>{`const developer = {
  name: "David-George Balog",
  role: "Software Developer",
  focus: [
    "C# .NET & Blazor",
    "React & Next.js",
    "Backend Systems",
    "Frontend Craft",
    "Clean Architecture",
  ],
  currentlyBuilding: "ZettaCars",
  alwaysLearning: true,
};

export default developer;`}</pre>
            </div>
            <div className={styles.glowOrb} />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
