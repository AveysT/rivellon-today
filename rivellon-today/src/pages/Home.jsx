import React from 'react';
import { Link } from 'react-router-dom';
import { Feather } from 'lucide-react';
import { stories } from '../data/stories';

export const Home = () => {
    // Group stories by date
    const groupedStories = stories.reduce((groups, story) => {
        const date = story.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(story);
        return groups;
    }, {});

    // Extract unique dates preserving order from the source array
    const uniqueDates = [...new Set(stories.map(s => s.date))];

    return (
        <div className="space-y-12">
            <div className="text-center italic text-gold-dark/80 font-serif mb-8 border-b border-gold-dark/20 pb-4">
                Edición Semanal - Las crónicas de la costa
            </div>

            <div className="grid gap-12">
                {uniqueDates.map((date) => {
                    const dayStories = groupedStories[date];
                    const storyCount = dayStories.length;
                    const dateSlug = date.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-');

                    return (
                        <article key={date} className="group relative bg-rivellon-panel p-8 shadow-lg transition-all hover:bg-black/40 divinity-border">
                            <Link to={`/edition/${dateSlug}`} className="block">
                                <header className="mb-4 text-center">
                                    <div className="flex items-center justify-center gap-2 text-blood-bright text-xs font-bold uppercase tracking-wider mb-2 font-serif">
                                        <Feather className="w-3 h-3" />
                                        <span>Edición Semanal</span>
                                        <Feather className="w-3 h-3 -scale-x-100" />
                                    </div>
                                    <h2 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark mb-4 group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.5)] transition-all duration-300">
                                        {date}
                                    </h2>

                                    <div className="text-lg text-ink-muted italic font-serif border-y border-gold-dark/30 py-4 my-6">
                                        {storyCount} {storyCount === 1 ? 'Crónica' : 'Crónicas'} disponibles en esta edición
                                    </div>
                                </header>

                                {/* Mini preview of headlines */}
                                <div className="space-y-3 mb-8">
                                    {dayStories.slice(0, 3).map((story, idx) => (
                                        <div key={story.id} className="flex items-start gap-2 text-ink/80">
                                            <span className="text-gold-dark font-bold">RP {idx + 1}.</span>
                                            <span className="font-serif group-hover:text-gold-light transition-colors text-left">{story.title}</span>
                                        </div>
                                    ))}
                                    {storyCount > 3 && (
                                        <div className="text-xs text-center text-gold-dark/60 italic pt-2">
                                            ... y {storyCount - 3} más
                                        </div>
                                    )}
                                </div>

                                <div className="text-gold font-serif text-sm mt-4 uppercase tracking-widest font-bold flex items-center justify-center gap-2 group-hover:scale-105 transition-transform bg-black/20 py-3 rounded border border-gold-dark/20 text-center">
                                    Leer Todas las Crónicas del Día
                                </div>
                            </Link>
                        </article>
                    );
                })}
            </div>

            {/* Sidebar Content kept here for Home view */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-2 border-gold-dark py-8 mt-12 bg-black/20 p-6">
                <div className="border border-gold-dark/30 p-4 bg-rivellon-panel">
                    <h3 className="font-bold text-xl mb-2 text-blood-bright">Se Busca: El Príncipe Rojo</h3>
                    <p className="italic text-sm text-ink-muted">Visto por última vez buscando soñadores cerca de la costa...</p>
                </div>
                <div className="border border-gold-dark/30 p-4 bg-rivellon-panel">
                    <h3 className="font-bold text-xl mb-2 text-blood-bright">Luces Extrañas en el Cielo</h3>
                    <p className="italic text-sm text-ink-muted">Los avistamientos de Aniquiladores del Vacío se duplican...</p>
                </div>
            </div>
        </div>
    );
};
