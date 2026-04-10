import SectionReveal from '@/components/SectionReveal';
import styles from './Education.module.css';

const EXPERIENCE = [
  {
    role: 'Junior Developer, C# .NET & Blazor',
    company: 'ArtSoft Consult',
    duration: 'Sept 2025 – Present',
    desc: 'Developing web applications using .NET, Blazor, Entity Framework, MudBlazor and REST APIs. Implementing components, forms, and validation logic for internal tools. Writing clean, maintainable code and participating in code reviews.',
  },
  {
    role: 'Internship, C# .NET & WPF',
    company: 'ArtSoft Consult',
    duration: 'July 2025 – Aug 2025',
    desc: 'Built desktop application features using C#, .NET, and WPF. Implemented UI components, data bindings, and MVVM patterns. Gained experience with Git workflows, debugging tools, and Agile development.',
  },
];

const FREELANCE = {
  role: 'Freelance Software Developer',
  company: 'Self-Employed',
  duration: '2025 – Present',
  badge: '1+ yr',
  desc: 'Building and delivering full-stack web and mobile applications for clients as an independent developer. Projects include end-to-end product development, client collaboration on requirements, deployment, and ongoing maintenance — with a focus on quality, performance and reliability.',
};

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.education}`} style={{ position: 'relative', overflow: 'hidden' }}>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionReveal>
          <p className="section-eyebrow">Professional Path</p>
          <h2 className={`display-lg ${styles.heading}`}>Experience</h2>
        </SectionReveal>

        <div className={styles.grid}>
          {/* Left: employed roles timeline */}
          <div className={styles.col}>
            <div className={styles.timeline}>
              {EXPERIENCE.map((item, i) => (
                <SectionReveal key={i} delay={0.15 + i * 0.1}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot} style={{ background: 'var(--secondary)' }} />
                    <div className={styles.timelineContent}>
                      <span className={`label ${styles.timelineYear}`}>{item.duration}</span>
                      <p className={`label ${styles.timelineInstitution}`}>{item.company}</p>
                      <h4 className={`title ${styles.timelineTitle}`}>{item.role}</h4>
                      <p className={`body-lg ${styles.timelineDesc}`}>{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          {/* Right: Freelance highlight card */}
          <div className={styles.col} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', position: 'sticky', top: '120px' }}>
            <SectionReveal delay={0.3}>
              <div className={styles.certCard} style={{ borderColor: 'rgba(var(--primary-rgb, 37,99,235), 0.35)', position: 'relative', overflow: 'hidden' }}>
                {/* Subtle glow accent */}
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div className={styles.certHeader}>
                  <span className={`label ${styles.certIssuer}`}>{FREELANCE.company}</span>
                  <span style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'var(--primary)',
                    color: '#fff',
                    borderRadius: '4px',
                    padding: '2px 8px',
                  }}>{FREELANCE.badge}</span>
                </div>
                <h4 className={`title ${styles.certTitle}`}>{FREELANCE.role}</h4>
                <span className={`label ${styles.timelineYear}`} style={{ marginBottom: '0.5rem', display: 'block' }}>{FREELANCE.duration}</span>
                <p className={`body-lg ${styles.certDesc}`}>{FREELANCE.desc}</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
