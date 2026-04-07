'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

// HeroCanvas is dynamically imported to avoid SSR issues with canvas
const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO — scroll-driven canvas animation ── */}
      <div style={{ position: 'relative' }}>
        <HeroCanvas />
        {/* Static overlay content centered over the canvas sticky area */}
        <Hero />
      </div>

      {/* ── REMAINING SECTIONS ── */}
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
