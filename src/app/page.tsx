import Link from 'next/link';

export default function Home() {
    return (
        <main id="main" className="home-main">
            <div className="home-content">
                <p className="eyebrow">Software Developer &amp; Freelancer</p>
                <h1>David George Balog</h1>
                <div className="intro">
                    <p>
                        Hi, I’m David, a software developer and freelancer based in Cluj Napoca.
                        I build web and mobile products where a clear idea, a solid technical foundation,
                        and a carefully considered experience meet. From the first conversation to a polished
                        launch, I enjoy turning ambitious ideas into software people can use and trust.
                    </p>
                    <p>
                        I’m currently studying Computer Science while developing full stack platforms,
                        AI powered tools, and freelance projects. I care about clean architecture, clear
                        interfaces, and practical solutions to real problems. These are the details that make software
                        feel effortless and genuinely useful.
                    </p>
                </div>
                <nav className="home-nav" aria-label="Explore">
                    <Link href="/about">About</Link>
                    <Link href="/experience">Experience</Link>
                    <Link href="/education">Education &amp; Skills</Link>
                    <Link href="/projects">Projects</Link>
                </nav>
                <a className="text-link cv-link" href="/cv.pdf" download="David-George-Balog-CV.pdf">
                    Download CV
                </a>
            </div>
        </main>
    );
}
