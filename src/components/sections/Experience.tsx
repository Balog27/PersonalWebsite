import dynamic from 'next/dynamic';
import SectionReveal from '@/components/SectionReveal';
import styles from './Education.module.css';

const Galaxy = dynamic(() => import('@/components/Galaxy'), { ssr: false });

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

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.education}`} style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Galaxy Background - Dark, slow, professional */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.8 }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.6}
          glowIntensity={0.15}
          saturation={0}
          hueShift={100}
          twinkleIntensity={0.25}
          rotationSpeed={0.03}
          repulsionStrength={1.5}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={0.4}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionReveal>
          <p className="section-eyebrow">Professional Path</p>
          <h2 className={`display-lg ${styles.heading}`}>Experience</h2>
        </SectionReveal>

        <div className={styles.grid}>
          <div className={styles.col} style={{ gridColumn: '1 / -1', maxWidth: '800px' }}>
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
        </div>
      </div>
    </section>
  );
}
