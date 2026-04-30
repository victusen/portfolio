import Image from "next/image";
import Link from "next/link";
import { allProjects } from "../lib/projects";
import type { Project } from "../lib/projects";

export default function RenderedProjects({onlyFeatured }: {onlyFeatured: boolean}) {

    const featured = allProjects.filter((project) => { return project.onlyFeatured === true });
    const notFeatured = allProjects.filter((project) => { return project.onlyFeatured === false });

    const dataToRender = onlyFeatured ? featured : notFeatured;
    return (
        <>
            {dataToRender.map((project: Project, idx: number) => { 
                return (
                    <Link 
                        key={ project.id }
                        href={ project.url }
                        target="_blank"
                        rel="noopener noreferrer" 
                        className={ `project-card ${ project.isFeatured ? 'featured' : '' } reveal` }
                    >
                        <div className="project-thumb">
                            <Image
                                src={project.image}
                                alt={ project.title + 'Preview'}
                                loading="lazy" 
                                width={500} 
                                height={500} 
                            />
                        </div>
                        <div className="project-body">
                            <div className="project-arrow">
                                <svg viewBox="0 0 14 14" fill="none"><path d="M3.5 10.5l7-7M5.5 3.5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            <span className="project-index">{ project.index }</span>
                            <h3 className="project-title">{ project.title }</h3>
                            <p className="project-desc">{ project.desc }</p>
                            <div className="project-footer">
                                <div className="project-tags">
                                    { project.tags.map((tag: string, idx: number) => <span className="tag"key={idx}>{tag}</span>) }
                                    { project.badge ? <span className="tag tag-cyan"key={idx}>{project.badge}</span> : '' }
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}