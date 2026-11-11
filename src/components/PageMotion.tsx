'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Content stays visible without JavaScript. Motion only enhances its entrance.
export default function PageMotion() {
    const pathname = usePathname();

    useEffect(() => {
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const animations = new Set<Animation>();
        const targets = document.querySelectorAll<HTMLElement>(
            '.home-heading, .home-story, .home-nav, .inner-page > .eyebrow, .inner-page > h1, .page-lead, .about-intro, .content-section, .record, .course, .projects-heading, .premium-project'
        );
        // Avoid applying a second transform to a child of an animated section.
        const elements = Array.from(targets).filter(element =>
            !element.parentElement?.closest('.content-section, .projects-heading')
        );
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                observer.unobserve(entry.target);
                if (preference.matches) continue;
                const animation = entry.target.animate(
                    [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
                    { duration: 440, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
                );
                animations.add(animation);
                animation.onfinish = () => animations.delete(animation);
            }
        }, { threshold: 0.08 });
        elements.forEach(element => observer.observe(element));
        const stopMotion = () => {
            if (preference.matches) animations.forEach(animation => animation.cancel());
        };
        preference.addEventListener('change', stopMotion);
        return () => {
            observer.disconnect();
            animations.forEach(animation => animation.cancel());
            preference.removeEventListener('change', stopMotion);
        };
    }, [pathname]);

    return null;
}
