import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Feather } from 'lucide-react';
import { stories } from '../data/stories';

export const Edition = () => {
    const { dateId } = useParams();

    // Simple unslugify: replace hyphens with spaces
    // Ideally we would store the raw date or a slug in the data, 
    // but for now we reconstruct it to match the 'date' string in stories.
    // e.g., "27-de-Enero-2026"  -> regex might be needed or just simple replace if consistent
    // Let's assuming the slug passed is "27-de-Enero,-2026" to match "27 de Enero, 2026" or better yet,
    // let's adjust the matching logic. 

    // Better approach: filter by normalizing both side
    const targetDate = dateId.replace(/-/g, ' ');

    const editionStories = stories.filter(s =>
        s.date.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-') === dateId.toLowerCase()
    );

    if (editionStories.length === 0) {
        return (
            <div className="p-12 text-center">
                <h2 className="text-2xl text-gold mb-4 font-serif">Edición no encontrada</h2>
                <Link to="/" className="text-blood-bright hover:underline">Volver a la portada</Link>
            </div>
        );
    }

    const displayDate = editionStories[0].date;

    return (
        <div className="animate-in fade-in duration-700 space-y-8">
            <header className="mb-8 border-b-2 border-gold-dark/30 pb-4 flex items-center justify-between">
                <Link to="/" className="no-underline inline-flex items-center gap-2 text-gold hover:text-white font-bold font-serif uppercase tracking-widest text-sm transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Volver a Portada
                </Link>
                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold-dark">
                        Edición del {displayDate}
                    </h1>
                </div>
                <div className="w-32"></div> {/* Spacer for center alignment */}
            </header>

            <div className="grid gap-12">
                {editionStories.map((story) => (
                    <article key={story.id} className="group relative bg-rivellon-panel p-8 shadow-lg transition-all hover:bg-black/40 divinity-border">
                        <Link to={`/story/${story.id}`} className="block">
                            <header className="mb-4">
                                {story.video && (
                                    story.video.endsWith('.webp') ? (
                                        <img
                                            src={story.video}
                                            alt={story.title}
                                            className="w-full h-auto object-cover mb-6 rounded border border-gold-dark/30 shadow-md grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    ) : (
                                        <video
                                            src={story.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-auto object-cover mb-6 rounded border border-gold-dark/30 shadow-md grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    )
                                )}
                                <div className="flex items-center gap-2 text-blood-bright text-xs font-bold uppercase tracking-wider mb-2 font-serif">
                                    <Feather className="w-3 h-3" />
                                    <span>{story.date}</span>
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-gold-light mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.5)] transition-all duration-300">
                                    {story.title}
                                </h2>
                                <div className="text-lg text-ink-muted italic font-serif border-l-2 border-blood/40 pl-4 py-1">
                                    {story.excerpt}
                                </div>
                            </header>

                            <div className="text-gold font-serif text-sm mt-4 uppercase tracking-widest font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Leer Crónica Completa <span className="text-xl leading-none">→</span>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

            <div className="mt-16 pt-8 border-t border-gold-dark/30 text-center">
                <p className="font-handwriting text-2xl text-gold-dark/70">~ Fin de la Edición ~</p>
            </div>
        </div>
    );
};
