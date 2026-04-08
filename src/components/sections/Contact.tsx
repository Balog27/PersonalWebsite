'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import CountUp from '@/components/ui/CountUp';
import styles from './Contact.module.css';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Balog27', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidbalog-19b2122bb', icon: '⌗' },
  { label: 'Email', href: 'mailto:david27balogg@yahoo.com', icon: '⊠' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // Replace with your Web3Forms access key
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert('Something went wrong submitting the form.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Failed to send message. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
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

            <SectionReveal delay={0.15}>
              <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--accent)', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                  <CountUp to={75000} duration={2.5} separator="," />+
                </span>
                <span className="body-lg" style={{ opacity: 0.8, fontWeight: 500 }}>lines of code shipped</span>
              </div>
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
                download="CV-Balog-David.pdf"
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
                  disabled={isSubmitting}
                  className={`btn-primary ${styles.submitBtn}`}
                  style={{ opacity: isSubmitting ? 0.7 : 1 }}
                  suppressHydrationWarning
                >
                  {isSubmitting ? 'Sending...' : 'Send Transmission →'}
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
