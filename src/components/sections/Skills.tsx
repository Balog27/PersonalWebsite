import { 
  Terminal, 
  Layout, 
  Cpu, 
  Brain, 
  Wrench, 
  Users,
  type LucideIcon 
} from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';
import styles from './Skills.module.css';

const SKILLS: Record<string, { items: string[]; icon: LucideIcon }> = {
  'Languages': {
    icon: Terminal,
    items: ['Python', 'Java', 'C++', 'C', 'C#', 'SQL', 'Kotlin', 'TypeScript'],
  },
  'Frontend': {
    icon: Layout,
    items: ['HTML', 'CSS', 'React', 'React Native', 'Next.js', 'Blazor'],
  },
  'Backend & Frameworks': {
    icon: Cpu,
    items: ['.NET', 'ASP.NET Core', 'WPF', 'Flask', 'Qt', 'JavaFX', 'PyTest'],
  },
  'Core Concepts': {
    icon: Brain,
    items: ['OOP', 'Data Structures', 'Functional Programming', 'Multithreading', 'Memory Management', 'REST APIs', 'JWT', 'OAuth', 'Sessions', 'Design Patterns', 'SDLC', 'Agile'],
  },
  'Tools & DevOps': {
    icon: Wrench,
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'Cloudflare', 'Visual Studio', 'VS Code', 'PyCharm', 'IntelliJ IDEA'],
  },
  'Soft Skills': {
    icon: Users,
    items: ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Communication', 'Attention to Detail', 'Conflict Resolution'],
  },
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
          {Object.entries(SKILLS).map(([category, { icon: CategoryIcon, items }], catIdx) => (
            <SectionReveal key={category} delay={catIdx * 0.1}>
              <div className={styles.category}>
                <h3 className={`label ${styles.catLabel}`}>
                  <span className={styles.catIcon}>
                    <CategoryIcon size={18} strokeWidth={2.2} />
                  </span>
                  {category}
                </h3>
                <div className={styles.chips}>
                  {items.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
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
