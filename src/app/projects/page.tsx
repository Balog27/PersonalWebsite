import Image from 'next/image';
import { PROJECTS } from '@/data/portfolio';

export const metadata = { title: 'Projects, David George Balog' };

export default function Projects() {
    return (
        <main id="main" className="inner-page projects-page">
            <header className="projects-heading">
                <div>
                    <p className="eyebrow">Selected work · {PROJECTS.length} projects</p>
                    <h1>Projects with<br />a story to tell.</h1>
                </div>
                <p className="page-lead">
                    Products, client work, and experiments across web, mobile, AI, and data.
                    Open any project for the thinking and technology behind it.
                </p>
            </header>

            <div className="premium-project-list">
                {PROJECTS.map((project, index) => (
                    <details key={project.id} className="premium-project">
                        <summary>
                            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                            <span className="project-identity">
                                <span className="premium-project-title">{project.title.replaceAll('_', ' ')}</span>
                                <span className="premium-project-tag">{project.tag}</span>
                            </span>
                            <span className="project-stack-preview">{project.tech.slice(0, 3).join(' · ')}</span>
                            <span className="project-disclosure">
                                <span className="project-disclosure-label">View</span>
                                <span className="project-disclosure-icon" aria-hidden="true" />
                            </span>
                        </summary>

                        <div className="premium-project-body">
                            <div className="project-story">
                                <p className="project-body-label">Project overview</p>
                                <p className="project-description">{project.description}</p>

                                <div className="project-details-grid">
                                    <div>
                                        <p className="project-body-label">Built with</p>
                                        <p>{project.tech.join(' · ')}</p>
                                    </div>
                                    <div>
                                        <p className="project-body-label">Explore</p>
                                        <div className="premium-project-links">
                                            <a href={project.github} target="_blank" rel="noreferrer">Source code</a>
                                            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live website</a>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {project.image && (
                                <div className="project-visual-frame">
                                    <Image
                                        src={project.image}
                                        width={1200}
                                        height={750}
                                        alt={`${project.title} application screenshot`}
                                        className="premium-project-image"
                                        sizes="(max-width: 760px) 90vw, 560px"
                                    />
                                </div>
                            )}
                        </div>
                    </details>
                ))}
            </div>
        </main>
    );
}
