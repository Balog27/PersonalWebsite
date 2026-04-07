'use client';

import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    id: 'zetta-cars',
    tag: 'Full-Stack / Next.js',
    title: 'ZETTACARS',
    description:
      'A multilingual Next.js app for vehicle rentals and airport transfers with dynamic pricing (Convex backend + Google Maps distance calculations) and admin pricing controls.',
    tech: ['Next.js', 'Convex', 'Google Maps API', 'React'],
    github: 'https://www.zettacarrental.com/', // Using demo for github if no github provided
    demo: 'https://www.zettacarrental.com/',
    visual: 'radar',
  },
  {
    id: 'bike-shop',
    tag: 'E-commerce / Flask',
    title: 'BIKESHOP',
    description:
      'A Flask-based E-commerce web application featuring search, filtering, pagination, cart management, and user authentication for a motorbike shop.',
    tech: ['Python', 'Flask', 'E-commerce', 'Auth'],
    github: 'https://github.com/Balog27/bikeShop/tree/correct',
    demo: null,
    visual: 'mesh',
  },
  {
    id: 'youtube-to-spotify',
    tag: 'API / Python',
    title: 'YOUTUBE_TO_SPOTIFY',
    description:
      'Extracts song information from YouTube playlists and adds the songs to a Spotify account using Python, Flask, Spotipy, Google APIs, and yt-dlp.',
    tech: ['Python', 'Flask', 'Spotipy', 'yt-dlp'],
    github: 'https://github.com/Balog27/YouTubeToSpotify',
    demo: null,
    visual: 'neural',
  },
  {
    id: 'file-editor',
    tag: 'Tooling / Python',
    title: 'FILE_EDITOR',
    description:
      'A Python-based file management application that allows users to seamlessly navigate, sort, rename, move, copy, and remove files and directories.',
    tech: ['Python', 'OS Module', 'File Management'],
    github: 'https://github.com/Balog27/fileEditor',
    demo: null,
    visual: 'radar',
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === 'radar') {
    return (
      <div className={styles.visual}>
        <svg viewBox="0 0 200 200" className={styles.radarSvg}>
          {[80, 55, 35, 18].map((r, i) => (
            <circle key={r} cx="100" cy="100" r={r} className={styles.radarRing} style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
          <line x1="100" y1="20" x2="100" y2="180" className={styles.radarLine} />
          <line x1="20" y1="100" x2="180" y2="100" className={styles.radarLine} />
          <motion.line
            x1="100" y1="100" x2="180" y2="100"
            className={styles.radarSweep}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '100px 100px' }}
          />
          {[[130, 70], [60, 120], [150, 130]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" className={styles.radarDot} />
          ))}
        </svg>
      </div>
    );
  }
  if (type === 'neural') {
    return (
      <div className={styles.visual}>
        <svg viewBox="0 0 200 200" className={styles.neuralSvg}>
          {/* Connections */}
          {[[40,60,100,40],[40,100,100,100],[40,140,100,160],[100,40,160,60],[100,100,160,100],[100,160,160,140]].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className={styles.neuralEdge} />
          ))}
          {/* Nodes */}
          {[[40,60],[40,100],[40,140],[100,40],[100,100],[100,160],[160,60],[160,100],[160,140]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="6" className={styles.neuralNode} style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </svg>
      </div>
    );
  }
  // mesh
  return (
    <div className={styles.visual}>
      <svg viewBox="0 0 200 200" className={styles.meshSvg}>
        {[[40,40,160,40],[40,100,160,100],[40,160,160,160],[40,40,40,160],[100,40,100,160],[160,40,160,160],
          [40,40,100,100],[100,40,160,100],[40,100,100,160],[100,100,160,160]].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className={styles.meshLine} />
        ))}
        {[[40,40],[100,40],[160,40],[40,100],[100,100],[160,100],[40,160],[100,160],[160,160]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="5" className={styles.meshNode} style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </svg>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <SectionReveal>
          <p className="section-eyebrow">Selected Works</p>
          <h2 className={`display-lg ${styles.heading}`}>Project Archive</h2>
        </SectionReveal>

        <div className={styles.list}>
          {PROJECTS.map((project, idx) => (
            <SectionReveal key={project.id} delay={idx * 0.1}>
              <motion.div
                className={styles.card}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Visual side */}
                <div className={styles.cardVisual}>
                  <span className={`label ${styles.cardTag}`}>{project.tag}</span>
                  <ProjectVisual type={project.visual} />
                </div>

                {/* Content side */}
                <div className={styles.cardContent}>
                  <h3 className={`headline ${styles.cardTitle}`}>{project.title}</h3>
                  <p className={`body-lg ${styles.cardDesc}`}>{project.description}</p>

                  <div className={styles.cardTech}>
                    {project.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  <div className={styles.cardActions}>
                    <a
                      id={`project-github-${project.id}`}
                      href={project.github}
                      className="btn-ghost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                    {project.demo && (
                      <a
                        id={`project-demo-${project.id}`}
                        href={project.demo}
                        className="btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
