'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import styles from './Contact.module.css';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Balog27', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidbalog-19b2122bb', icon: '⌗' },
  { label: 'Email', href: 'mailto:david27balogg@yahoo.com', icon: '⊠' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to an API
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <SectionReveal>
              <p className="section-eyebrow">Connection Hub</p>
              <h2 className={`display-lg ${styles.heading}`}>
                Let&apos;s craft<br />
                <span className={styles.headingAccent}>the unseen.</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="body-lg" style={{ maxWidth: 380 }}>
                Whether you have a project in mind, a question about my work, or just
                want to talk engineering — I&apos;m always open to a conversation.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className={styles.socials}>
                {SOCIALS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    id={`contact-${label.toLowerCase()}`}
                    href={href}
                    className={styles.socialLink}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                  >
                    <span className={styles.socialIcon}>{icon}</span>
                    <span className={`label ${styles.socialLabel}`}>{label}</span>
                  </a>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <a
                id="contact-download-cv"
                href="/cv.pdf"
                className={`btn-ghost ${styles.cvBtn}`}
                download
              >
                Download CV ↓
              </a>
            </SectionReveal>
          </div>

          {/* Right — Contact Form */}
          <SectionReveal className={styles.right} delay={0.1} direction="right">
            {submitted ? (
              <motion.div
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.successIcon}>✓</div>
                <h3 className="headline">Message Sent.</h3>
                <p className="body-lg">I&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form
                id="contact-form"
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={`label ${styles.formLabel}`} htmlFor="cf-name">Name</label>
                    <input
                      id="cf-name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={styles.input}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      suppressHydrationWarning
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={`label ${styles.formLabel}`} htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={styles.input}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={`label ${styles.formLabel}`} htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={styles.textarea}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className={`btn-primary ${styles.submitBtn}`}
                  suppressHydrationWarning
                >
                  Send Transmission →
                </button>
              </form>
            )}
          </SectionReveal>
        </div>

        {/* Footer bar */}
        <div className={styles.footer}>
          <span className={`label ${styles.footerLeft}`}>© 2026 David-George Balog. All rights reserved.</span>
          <nav className={styles.footerNav}>
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`label ${styles.footerLink}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <span className={`label ${styles.footerRight}`}>Built with Next.js</span>
        </div>
      </div>
    </section>
  );
}
