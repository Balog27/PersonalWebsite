import SectionReveal from '@/components/SectionReveal';
import styles from './Education.module.css';

const EDUCATION = [
  {
    type: 'degree',
    year: '2023 — Present',
    institution: 'Universitatea Babeș-Bolyai Cluj-Napoca',
    title: 'Computer Science',
    desc: 'Actively pursuing a degree in Computer Science with a focus on algorithms, data structures, and software engineering principles.',
  },
  {
    type: 'degree',
    year: '2019 — 2023',
    institution: 'Liceul Teoretic "Avram Iancu", Cluj-Napoca',
    title: 'High School Diploma',
    desc: 'Completed secondary education with a strong foundation in mathematics and sciences.',
  },
];

const CERTIFICATIONS = [
  {
    issuer: 'HarvardX',
    title: "CS50's Introduction to AI with Python",
    year: 'Completed',
    desc: 'Machine Learning and AI with Python.',
  },
  {
    issuer: 'HarvardX',
    title: "CS50's Introduction to Computer Science",
    year: 'Completed',
    desc: 'Foundations of Computer Science and programming.',
  },
  {
    issuer: 'Oracle Academy',
    title: 'Database Programming with SQL',
    year: 'Completed',
    desc: 'Database programming, querying, and management.',
  },
];

// Experience moved to Experience.tsx

export default function Education() {
  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <SectionReveal>
          <p className="section-eyebrow">Academic Origin</p>
          <h2 className={`display-lg ${styles.heading}`}>Education</h2>
        </SectionReveal>

        <div className={styles.grid}>
          {/* Left: Education timeline */}
          <div className={styles.col}>
            <SectionReveal delay={0.1}>
              <h3 className={`label ${styles.colLabel}`}>Education &amp; Degrees</h3>
            </SectionReveal>

            <div className={styles.timeline}>
              {EDUCATION.map((item, i) => (
                <SectionReveal key={i} delay={0.15 + i * 0.1}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <span className={`label ${styles.timelineYear}`}>{item.year}</span>
                      <p className={`label ${styles.timelineInstitution}`}>{item.institution}</p>
                      <h4 className={`title ${styles.timelineTitle}`}>{item.title}</h4>
                      <p className={`body-lg ${styles.timelineDesc}`}>{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}

            </div>
          </div>

          {/* Right: Certifications */}
          <div className={styles.col}>
            <SectionReveal delay={0.1} direction="right">
              <h3 className={`label ${styles.colLabel}`}>Professional Milestones</h3>
            </SectionReveal>

            <div className={styles.certList}>
              {CERTIFICATIONS.map((cert, i) => (
                <SectionReveal key={i} delay={0.15 + i * 0.1} direction="right">
                  <div className={styles.certCard}>
                    <div className={styles.certHeader}>
                      <span className={`label ${styles.certIssuer}`}>{cert.issuer}</span>
                      <span className={`label ${styles.certYear}`}>{cert.year}</span>
                    </div>
                    <h4 className={`title ${styles.certTitle}`}>{cert.title}</h4>
                    <p className={`body-lg ${styles.certDesc}`}>{cert.desc}</p>
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
