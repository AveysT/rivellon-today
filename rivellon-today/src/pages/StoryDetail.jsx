import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Feather, ArrowLeft } from 'lucide-react';
import { stories } from '../data/stories';

export const StoryDetail = () => {
    const { id } = useParams();
    const story = stories.find(s => s.id === id);

    if (!story) {
        return <Navigate to="/" replace />;
    }

    return (
        <article className="bg-rivellon-panel p-8 md:p-12 shadow-2xl divinity-border animate-in fade-in duration-700">
            <Link to="/" className="no-underline inline-flex items-center gap-2 text-gold hover:text-white font-bold font-serif uppercase tracking-widest text-sm mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Volver a la Portada
            </Link>

            <header className="mb-8 border-b-2 border-gold-dark/30 pb-8 text-center relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-gold-dark rotate-45 border-4 border-rivellon-panel"></div>

                <div className="flex items-center justify-center gap-2 text-blood-bright text-sm font-bold uppercase tracking-wider mb-4 font-serif">
                    <Feather className="w-4 h-4" />
                    <span>{story.date}</span>
                    <Feather className="w-4 h-4" />
                </div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-light via-gold to-gold-dark mb-6 drop-shadow-md">
                    {story.title}
                </h1>
                <div className="text-2xl text-ink-muted italic font-serif max-w-2xl mx-auto leading-relaxed">
                    {story.excerpt}
                </div>
            </header>

            {story.video && (
                <div className="mb-8 p-1 border-y border-gold-dark/30 bg-black/20">
                    <video
                        src={story.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full max-w-4xl mx-auto h-auto object-cover shadow-2xl rounded-sm"
                    />
                </div>
            )}

            <div className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-blood-bright first-letter:mr-3 first-letter:float-left text-xl leading-8 text-ink font-serif text-justify px-0 md:px-8 space-y-6">
                {/* Rendering content directly if it's text, or mapping if it's paragraphs. Assuming string for now based on previous code */}
                {story.content}
            </div>

            <div className="mt-16 pt-8 border-t border-gold-dark/30 text-center">
                <p className="font-handwriting text-2xl text-gold-dark/70">~ Fin de la entrada ~</p>
            </div>
        </article>
    );
};
