'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={clsx(styles.nav, scrolled && styles.scrolled)}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
          <span className={styles.logoText}>David</span>
          <span className={styles.logoDot}>.</span>
        </a>

        {/* Center links */}
        <ul className={clsx(styles.links, menuOpen && styles.linksOpen)}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={clsx(
                  styles.link,
                  activeSection === href.replace('#', '') && styles.linkActive
                )}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={clsx(styles.cta, 'btn-ghost')}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <span className={clsx(styles.bar, menuOpen && styles.barTop)} />
          <span className={clsx(styles.bar, menuOpen && styles.barMid)} />
          <span className={clsx(styles.bar, menuOpen && styles.barBot)} />
        </button>
      </div>
    </motion.nav>
  );
}
