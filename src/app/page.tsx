import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Download } from 'lucide-react';

const destinations = [
    { href: '/about', title: 'About', detail: 'The person behind the projects' },
    { href: '/experience', title: 'Experience', detail: 'From a brief to a working product' },
    { href: '/education', title: 'Education & Skills', detail: 'A foundation built on curiosity' },
    { href: '/projects', title: 'Projects', detail: 'Client work and ideas of my own' },
];

export default function Home() {
    return (
        <main id="main" className="home-main" tabIndex={-1}>
            <div className="home-content">
                <div className="home-heading">
                <p className="eyebrow">Software Developer &amp; Freelancer</p>
                <h1>David George Balog</h1>
                <p className="home-location">Based in Cluj Napoca, Romania</p>
                </div>
                <div className="home-grid">
                <div className="home-story">
                <div className="intro">
                    <p>
                        Hi, I’m David, a software developer and freelancer in Cluj Napoca.
                        My work ranges from business applications in C# and .NET to web and mobile
                        products built with React. I enjoy figuring out how a product should work,
                        then building the pieces that bring it to life.
                    </p>
                    <p>
                        Alongside studying Computer Science, I work on freelance projects and explore
                        ideas of my own, from rental platforms to tools that use AI. I like work that
                        connects a useful idea with a clear interface, and gives me something new to learn.
                        Away from the editor, you’ll find another interest of mine: motorcycles.
                    </p>
                </div>
                <div className="home-actions"><a className="contact-button" href="mailto:david27balogg@yahoo.com">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a className="text-link cv-link" href="/cv.pdf" download="David-George-Balog-CV.pdf">
                    Download CV <Download size={15} aria-hidden="true" />
                </a></div>
                </div>
                <nav className="home-nav" aria-label="Explore">
                    {destinations.map((item, index) => <Link href={item.href} key={item.href}>
                        <span className="home-nav-number" aria-hidden="true">0{index + 1}</span>
                        <span><span className="home-nav-title">{item.title}</span><span className="home-nav-detail">{item.detail}</span></span>
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>)}
                </nav>
                </div>
            </div>
        </main>
    );
}
