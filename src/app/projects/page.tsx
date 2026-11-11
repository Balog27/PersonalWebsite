import Image from 'next/image';
import { PROJECTS } from '@/data/portfolio';

export const metadata = { title: 'Projects, David George Balog' };

export default function Projects() {
    return (
        <main id="main" className="inner-page projects-page" tabIndex={-1}>
            <header className="projects-heading">
                <div>
                    <p className="eyebrow">Project archive · {PROJECTS.length} projects</p>
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
                                <span className="project-summary">{project.summary}</span>
                            </span>
                            <span className="project-stack-preview">{project.tech.slice(0, 3).join(' · ')}</span>
                            <span className="project-disclosure">
                                <span className="project-disclosure-label" aria-hidden="true"><span className="disclosure-closed">View</span><span className="disclosure-open">Close</span></span>
                                <span className="project-disclosure-icon" aria-hidden="true" />
                            </span>
                        </summary>

                        <div className="premium-project-body">
                            <div className="project-story">
                                <p className="project-body-label">Project overview</p>
                                {(typeof project.description === 'string' ? [project.description] : project.description).map(paragraph => (
                                    <p key={paragraph} className="project-description">{paragraph}</p>
                                ))}
                                <div className="project-context"><p className="project-body-label">Technical focus</p><p>{project.focus}</p></div>

                                <div className="project-details-grid">
                                    <div>
                                        <p className="project-body-label">Built with</p>
                                        <p>{project.tech.join(' · ')}</p>
                                    </div>
                                    <div>
                                        <p className="project-body-label">Explore</p>
                                        <div className="premium-project-links">
                                            {project.demo && !project.image && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Visit website for ${project.title.replaceAll('_', ' ')}, opens in a new tab`}>Visit website <span aria-hidden="true">↗</span></a>}
                                            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Source code for ${project.title.replaceAll('_', ' ')}, opens in a new tab`}>Source code <span aria-hidden="true">↗</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {project.demo && project.image && (
                                <a
                                    className="project-visual-frame"
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Visit website for ${project.title.replaceAll('_', ' ')}, opens in a new tab`}
                                >
                                    <span className="project-preview-label">Website preview</span>
                                    <Image
                                        src={project.image.src}
                                        width={project.image.width}
                                        height={project.image.height}
                                        alt={`${project.title.replaceAll('_', ' ')} website screenshot`}
                                        className="premium-project-image"
                                    />
                                    <span className="project-preview-action">Visit website <span aria-hidden="true">↗</span></span>
                                </a>
                            )}
                        </div>
                    </details>
                ))}
            </div>
        </main>
    );
}
