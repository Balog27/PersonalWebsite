'use client';
import Link from 'next/link';
import BikeAnimation from '@/components/BikeAnimation';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Mail, ArrowLeft } from 'lucide-react';
export const pages = [['About', '/about'], ['Experience', '/experience'], ['Education & Skills', '/education'], ['Projects', '/projects']];
export default function SiteShell({ children }: {
    children: React.ReactNode;
}) {
    const path = usePathname();
    const router = useRouter();
    const visited = useRef<string[]>([]);
    useEffect(() => {
        const routes = visited.current;
        if (routes[routes.length - 1] === path) return;
        if (routes.length > 1 && routes[routes.length - 2] === path) routes.pop();
        else routes.push(path);
    }, [path]);
    function goBack() {
        if (visited.current.length > 1) router.back();
        else router.push('/');
    }
    const { resolvedTheme, setTheme } = useTheme();
    return <div className={'site-shell ' + (path === '/' ? 'is-home' : path === '/about' ? 'is-about' : '')}><a className="skip-link" href="#main">Skip to content</a>{path === '/about' && <BikeAnimation />}<header className="site-header"><Link href="/" className="wordmark">David-George Balog</Link><div className="header-right">{path !== '/' && <nav aria-label="Main navigation">{pages.map(([name, url]) => <Link key={url} href={url} aria-current={path === url ? 'page' : undefined}>{name}</Link>)}</nav>}<button className="theme-toggle" aria-label="Toggle light and dark theme" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}><Sun className="sun" size={21}/><Moon className="moon" size={21}/></button></div></header>{path !== '/' && <div className="back-navigation"><button type="button" className="back-button" onClick={goBack}><ArrowLeft size={17} strokeWidth={1.6} aria-hidden="true" /><span>Back</span></button></div>}{children}<footer className="site-footer"><div className="socials"><a href="mailto:david27balogg@yahoo.com" aria-label="Email David" title="Email"><Mail /></a><a href="https://github.com/Balog27" aria-label="GitHub" title="GitHub" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.97 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.54.23 2.69.12 2.97.72.79 1.15 1.79 1.15 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg></a><a href="https://www.linkedin.com/in/davidbalog-19b2122bb" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19 18.75h-2.95V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.76V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.53 1.96 3.53 4.5v5.27Z"/></svg></a>{process.env.NEXT_PUBLIC_X_URL && <a href={process.env.NEXT_PUBLIC_X_URL} aria-label="X" title="X" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.9-9L.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z"/></svg></a>}</div><span className="footer-note">Made with curiosity.</span></footer></div>;
}
