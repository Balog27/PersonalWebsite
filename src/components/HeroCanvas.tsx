'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './HeroCanvas.module.css';

const TOTAL_FRAMES = 224;
const FRAME_PATH = (i: number) =>
  `/HeroSection1/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Preload images
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderFrame = (index: number) => {
      const canvas = canvasRef.current;
      const img = imagesRef.current[index];
      if (!canvas || !img || !img.complete) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      // We know the canvas covers the viewport exactly
      const w = window.innerWidth;
      const h = window.innerHeight;
      const physicalWidth = w * dpr;
      const physicalHeight = h * dpr;

      if (canvas.width !== physicalWidth || canvas.height !== physicalHeight) {
        canvas.width = physicalWidth;
        canvas.height = physicalHeight;
        // Don't reset style width/height if managed by CSS, but good measure
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // 'object-fit: cover' math
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = physicalWidth / physicalHeight;
      
      let renderWidth, renderHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        renderWidth = physicalWidth;
        renderHeight = physicalWidth / imgRatio;
        offsetX = 0;
        offsetY = (physicalHeight - renderHeight) / 2;
      } else {
        renderWidth = physicalHeight * imgRatio;
        renderHeight = physicalHeight;
        offsetX = (physicalWidth - renderWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, physicalWidth, physicalHeight);
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    };

    // Draw first frame immediately while loading
    const firstImg = new Image();
    firstImg.src = FRAME_PATH(1);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      renderFrame(0);
    };

    // Preload all frames
    imagesRef.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      if (i === 0) return firstImg;
      const img = new Image();
      img.src = FRAME_PATH(i + 1);
      return img;
    });

    // Handle resize
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(latest * (TOTAL_FRAMES - 1)))
    );

    if (frameIndex === currentFrameRef.current) return;
    currentFrameRef.current = frameIndex;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      const img = imagesRef.current[frameIndex];
      if (!canvas || !img || !img.complete) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const physicalWidth = canvas.width;
      const physicalHeight = canvas.height;
      
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = physicalWidth / physicalHeight;
      
      let renderWidth, renderHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        renderWidth = physicalWidth;
        renderHeight = physicalWidth / imgRatio;
        offsetX = 0;
        offsetY = (physicalHeight - renderHeight) / 2;
      } else {
        renderWidth = physicalHeight * imgRatio;
        renderHeight = physicalHeight;
        offsetX = (physicalWidth - renderWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, physicalWidth, physicalHeight);
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    });
  });

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.sticky}>
        <canvas ref={canvasRef} className={styles.canvas} />
        {/* Vignette overlay */}
        <div className={styles.vignette} />
      </div>
    </div>
  );
}
