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
                src="https://ui-avatars.com/api/?name=David+Balog&background=0D8ABC&color=fff&size=200" 
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
              I am a Junior Software Developer with experience in C#, .NET, and WPF, React, Next.js,
              which I attained from my internship and continued to develop at my current workplace.
              I have been working on internal projects, designing user interfaces, and supporting existing functionality,
              all while developing best practices with clean code and software designs.
            </p>
            <p className={`body-lg ${styles.paragraph}`} style={{ marginTop: '1rem' }}>
              I am well-suited to working with a team, utilizing Agile methodologies,
              and participating throughout the entire software developmental process.
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
