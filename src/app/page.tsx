import Link from 'next/link';

export default function Home() {
    return (
        <main id="main" className="home-main">
            <div className="home-content">
                <p className="eyebrow">Software Developer &amp; Freelancer</p>
                <h1>David George Balog</h1>
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
                <nav className="home-nav" aria-label="Explore">
                    <Link href="/about">About</Link>
                    <Link href="/experience">Experience</Link>
                    <Link href="/education">Education &amp; Skills</Link>
                    <Link href="/projects">Projects</Link>
                </nav>
                <div className="home-actions"><a className="text-link cv-link" href="mailto:david27balogg@yahoo.com">Get in touch</a>
                <a className="text-link cv-link" href="/cv.pdf" download="David-George-Balog-CV.pdf">
                    Download CV
                </a></div>
            </div>
        </main>
    );
}
