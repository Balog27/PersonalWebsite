import Image from 'next/image';

export const metadata = { title: 'About David George Balog' };

export default function About() {
    return (
        <main id="main" className="inner-page" tabIndex={-1}>
            <p className="eyebrow">A little about me</p>
            <h1>Beyond the code.</h1>
            <div className="about-intro">
                <div className="prose">
                    <p>I’m David, a software developer, freelancer, and Computer Science student in Cluj Napoca. I enjoy building applications that connect the technical work behind a product with the experience of using it.</p>
                    <p>My professional journey started with an internship at ArtSoft Consult, working with C#, .NET, and WPF. I continued into web development with Blazor, building internal tools and learning through code reviews and working with a team.</p>
                    <p>Freelance work and personal projects give me a different kind of responsibility: understanding an idea, choosing how to build it, and following it through to delivery. I work across web and mobile, using React, Next.js, and React Native alongside my .NET experience.</p>
                </div>
                <Image className="portrait" src="/profile.jpeg" width={220} height={270} alt="David George Balog" />
            </div>
            <section className="content-section">
                <h2>What I’m exploring</h2>
                <p>My projects give me room to follow practical questions. Fridge AI explores how image recognition and recipe suggestions can help make use of food at home. QuietScore turns environmental noise data into information that is easier to understand when looking at a property.</p>
                <p>I’m interested in what makes these ideas useful in practice, including the data behind them, the interface, and the decisions that connect the two.</p>
            </section>
            <section className="content-section">
                <h2>Outside the editor</h2>
                <p>Motorcycles are another interest of mine, which is why one has a place at the start of this page. I wanted this website to show a little of the person behind the projects as well as the work itself.</p>
            </section>
            <section className="content-section">
                <h2>Let’s talk.</h2>
                <p>Have a project in mind, a role to discuss, or a question about my work? You can reach me by email.</p>
                <a className="text-link" href="mailto:david27balogg@yahoo.com">david27balogg@yahoo.com</a>
            </section>
        </main>
    );
}
