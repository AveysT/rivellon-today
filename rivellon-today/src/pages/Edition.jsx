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

    // Separate content types
    const newsStories = editionStories.filter(s => s.type !== 'headline');
    const headlineStories = editionStories.filter(s => s.type === 'headline');

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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Check if we have headlines. If we don't, news takes full width. If we do, news takes 8/12 columns */}
                <div className={`grid gap-12 ${headlineStories.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
                    {newsStories.map((story) => (
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

                {/* Sidebar for Headlines */}
                {headlineStories.length > 0 && (
                    <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-8 bg-black/40 rounded-lg p-6 border border-gold-dark/20 backdrop-blur-sm">
                        <div className="border-b border-gold-dark/30 pb-2 mb-4">
                            <h3 className="text-xl font-serif font-bold text-blood-bright uppercase tracking-widest pl-2 border-l-4 border-blood-bright">Titulares</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {headlineStories.map((story) => (
                                <article key={story.id} className="group relative bg-black/20 p-3 rounded hover:bg-black/40 border border-transparent hover:border-gold-dark/30 transition-all flex flex-col">
                                    <Link to={`/story/${story.id}`} className="block h-full flex flex-col">
                                        <div className="relative w-full aspect-video mb-3 rounded border border-white/10 shadow-sm overflow-hidden">
                                            {/* Base Media (Video/WebP) - Always rendered, stays underneath */}
                                            {story.video && (
                                                story.video.endsWith('.webp') ? (
                                                    <img
                                                        src={story.video}
                                                        alt={story.title}
                                                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500"
                                                    />
                                                ) : (
                                                    <video
                                                        src={story.video}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500"
                                                    />
                                                )
                                            )}

                                            {/* Thumbnail Overlay - Fades out on hover if present */}
                                            {story.thumbnail && (
                                                <img
                                                    src={story.thumbnail}
                                                    alt={story.title}
                                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                                                />
                                            )}
                                        </div>

                                        <h2 className="text-lg leading-tight font-serif font-bold text-gray-300 mb-1 group-hover:text-gold-light transition-all duration-300">
                                            {story.title}
                                        </h2>
                                        <div className="mt-auto pt-2 flex justify-end">
                                            <span className="text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">Ver más →</span>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </aside>
                )}
            </div>

            <div className="mt-16 pt-8 border-t border-gold-dark/30 text-center">
                <p className="font-handwriting text-2xl text-gold-dark/70">~ Fin de la Edición ~</p>
            </div>
        </div>
    );
};
