import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import { allJournals } from "../../../lib/journals";
import "../project-page.css";
import "./journal-page.css";
import "../../globals.css";

export default function JournalPage() {
    return (
        <main className="journal-shell-grid">
            {/* Column 1: Navigation Sidebar */}
            <Sidebar />

            {/* Column 2: Main Content Column */}
            <div className="journal-content-col">
                <div className="journal-article-wrap">
                    {allJournals.map((journal) => (
                        <article key={journal.slug} className="journal-article">
                            {/* Header Section */}
                            <header className="journal-header">
                                <span className="journal-category">{journal.category}</span>
                                <h1 className="journal-title">{journal.title}</h1>
                                <p className="journal-subtitle">{journal.subtitle}</p>
                                <div className="journal-meta">
                                    <time>{journal.date}</time>
                                </div>
                            </header>

                            {/* Hero Media */}
                            {/* {journal.coverMedia && (
                                <div className="journal-hero-media">
                                    {journal.coverMedia.type === "image" ? (
                                        <img src={journal.coverMedia.url} alt={journal.title} />
                                    ) : (
                                        <video src={journal.coverMedia.url} controls />
                                    )}
                                </div>
                            )} */}

                            {/* Modular Content Body */}
                            <div className="journal-body">
                                {journal.content.map((section, idx) => (
                                    <JournalSection key={idx} section={section} />
                                ))}
                            </div>
                        </article>
                    ))}
                </div>


                <Footer />
            </div>
        </main>
    );
}

/**
 * Modular Section Component
 */
function JournalSection({ section }: { section: any }) {
    switch (section.type) {
        case "heading":
            return <h2 className="section-h2">{section.value}</h2>;
        
        case "text":
            return <p className="section-p">{section.value}</p>;
        
        case "quote":
            return (
                <blockquote className="section-quote">
                    {/* <p>"{section.value}"</p>
                    {section.caption && <cite>— {section.caption}</cite>} */}
                </blockquote>
            );
        
        case "image":
            return (
                <div className="section-wrap">
                    <img src={section.value} alt={section.caption || ""} className="rounded-lg border border-subtle" />
                    {section.caption && <p className="text-sm text-muted mt-2 text-center">{section.caption}</p>}
                </div>
            );

        default:
            return null;
    }
}
