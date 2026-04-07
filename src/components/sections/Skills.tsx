import SectionReveal from '@/components/SectionReveal';
import styles from './Skills.module.css';

const SKILLS = {
  Languages: ['C#', 'Python', 'Java', 'C++', 'C', 'SQL', 'HTML', 'React', 'React-Native', 'Kotlin'],
  Frameworks: ['.NET', 'ASP.NET Core', 'WPF', 'Blazor', 'Flask', 'Qt', 'JavaFX', 'PyTest'],
  Concepts: ['OOP', 'Data Structures', 'REST APIs', 'JWT / OAuth', 'Multithreading'],
  Tools: ['Git', 'Visual Studio', 'Docker', 'AWS', 'Vercel', 'Cloudflare', 'PyCharm'],
};

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <SectionReveal>
          <p className="section-eyebrow">Capabilities</p>
          <h2 className={`display-lg ${styles.heading}`}>Technical Stack</h2>
        </SectionReveal>

        <div className={styles.grid}>
          {Object.entries(SKILLS).map(([category, items], catIdx) => (
            <SectionReveal key={category} delay={catIdx * 0.1}>
              <div className={styles.category}>
                <h3 className={`label ${styles.catLabel}`}>{category}</h3>
                <div className={styles.chips}>
                  {items.map((skill, i) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
