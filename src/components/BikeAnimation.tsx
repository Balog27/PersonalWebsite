'use client';

import { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 120;
const FRAME_PATH = (i: number) =>
  `/HeroSection3/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

export default function BikeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isPlaying = true;
    let fallbackTimer: NodeJS.Timeout;

    // Load first frame ASAP
    const firstImg = new Image();
    firstImg.src = FRAME_PATH(1);
    imagesRef.current[0] = firstImg;

    firstImg.onload = () => {
      // Set canvas to natural dimensions of the video frame
      canvas.width = firstImg.naturalWidth;
      canvas.height = firstImg.naturalHeight;
      ctx.drawImage(firstImg, 0, 0);
    };

    // Preload all frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = FRAME_PATH(i + 1);
        imagesRef.current[i] = img;
    }

    let lastTime = performance.now();
    const fps = 30; // approx 30 fps
    const interval = 1000 / fps;

    const renderLoop = (time: number) => {
      if (!isPlaying) return;
      reqRef.current = requestAnimationFrame(renderLoop);

      const deltaTime = time - lastTime;
      if (deltaTime > interval) {
        lastTime = time - (deltaTime % interval);

        const img = imagesRef.current[frameRef.current];
        if (img && img.complete && canvas.width > 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          frameRef.current = (frameRef.current + 1) % TOTAL_FRAMES;
        }
      }
    };

    reqRef.current = requestAnimationFrame(renderLoop);

    return () => {
      isPlaying = false;
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 0 40px rgba(0,0,0,0.5))', borderRadius: '16px', overflow: 'hidden' }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          width: '100%', 
          height: 'auto', 
          objectFit: 'contain', 
          borderRadius: '16px',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }} 
      />
    </div>
  );
}
