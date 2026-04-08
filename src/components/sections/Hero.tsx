'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero} aria-label="Hero">
      {/* Animated content overlay pinned over the canvas */}
      <div className={styles.content}>
        <motion.p
          className={`label ${styles.eyebrow}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Computer Science &amp; Software Engineering Precision
        </motion.p>

        <motion.h1
          className={`display-xl ${styles.headline}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Architecting
          <br />
          <span className={styles.headlineAccent}>The Future</span>
        </motion.h1>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            id="hero-cta-projects"
            className={`btn-primary ${styles.heroBtnPrimary}`}
            onClick={() => handleScroll('#projects')}
            suppressHydrationWarning
          >
            Explore Work
          </button>
          <button
            id="hero-cta-contact"
            className={`btn-ghost ${styles.heroBtnGhost}`}
            onClick={() => handleScroll('#contact')}
            suppressHydrationWarning
          >
            Connect
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.div
            className={styles.scrollLine}
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className={`label ${styles.scrollLabel}`}>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
