'use client';

import { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 161;
const framePath = (index: number) =>
    `/HeroSection3/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;

export default function BikeAnimation() {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!section || !canvas || !context) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const images: HTMLImageElement[] = [];
        let targetFrame = 0;
        let currentFrame = 0;
        let lastTime = 0;
        let lastPaintTime = 0;
        let lastPaintedFrame = -1;
        let request = 0;
        let disposed = false;

        function draw(force = false) {
            const frame = Math.round(currentFrame);
            if (!force && frame === lastPaintedFrame) return;
            const image = images[frame];
            if (disposed || !image?.complete || !image.naturalWidth) return;
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
            const renderWidth = Math.min(image.naturalWidth, Math.round(window.innerWidth * pixelRatio));
            const renderHeight = Math.round(renderWidth / (image.naturalWidth / image.naturalHeight));
            if (canvas!.width !== renderWidth || canvas!.height !== renderHeight) {
                canvas!.width = renderWidth;
                canvas!.height = renderHeight;
            }
            context!.drawImage(image, 0, 0, renderWidth, renderHeight);
            lastPaintedFrame = frame;
        }

        function animate(time: number) {
            request = 0;
            if (disposed) return;
            const elapsed = Math.min(time - lastTime, 64);
            lastTime = time;
            // Time-based damping gives the same gradual slowdown at any refresh rate.
            currentFrame += (targetFrame - currentFrame) * (1 - Math.exp(-elapsed / 360));
            if (Math.abs(targetFrame - currentFrame) < 0.65) currentFrame = targetFrame;
            // Painting the large source frames at 30fps keeps the easing consistent
            // without overworking the canvas between visible frame changes.
            if (time - lastPaintTime >= 1000 / 30 || currentFrame === targetFrame) {
                draw();
                lastPaintTime = time;
            }
            if (currentFrame !== targetFrame) request = requestAnimationFrame(animate);
        }

        function scheduleUpdate() {
            const bounds = section!.getBoundingClientRect();
            const distance = Math.max(1, section!.offsetHeight - window.innerHeight);
            const progress = Math.max(0, Math.min(1, -bounds.top / distance));
            targetFrame = reducedMotion.matches ? 0 : progress * (TOTAL_FRAMES - 1);
            if (reducedMotion.matches) {
                cancelAnimationFrame(request);
                request = 0;
                currentFrame = 0;
                draw();
            } else if (!request) {
                lastTime = performance.now();
                request = requestAnimationFrame(animate);
            }
        }

        for (let index = 0; index < TOTAL_FRAMES; index++) {
            const image = new Image();
            image.decoding = 'async';
            image.onload = () => { if (index === Math.round(currentFrame)) draw(true); };
            images.push(image);
            image.src = framePath(index);
        }

        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        const handleResize = () => {
            lastPaintedFrame = -1;
            scheduleUpdate();
        };
        window.addEventListener('resize', handleResize);
        reducedMotion.addEventListener('change', scheduleUpdate);
        scheduleUpdate();
        return () => {
            disposed = true;
            cancelAnimationFrame(request);
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', handleResize);
            reducedMotion.removeEventListener('change', scheduleUpdate);
            images.forEach(image => { image.onload = null; });
        };
    }, []);

    return <section ref={sectionRef} className="bike-scroll" aria-label="Motorcycle scroll animation">
        <figure className="bike-sticky">
            <canvas ref={canvasRef} role="img" aria-label="Motorcycle animation controlled by scrolling" />
            <figcaption>Scroll to discover more about me.</figcaption>
        </figure>
    </section>;
}
