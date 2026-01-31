import React from 'react';
import { Link } from 'react-router-dom';
import { Feather } from 'lucide-react';
import { stories } from '../data/stories';

export const Home = () => {
    return (
        <div className="space-y-12">
            <div className="text-center italic text-gold-dark/80 font-serif mb-8 border-b border-gold-dark/20 pb-4">
                Edición Semanal - Las crónicas de la costa
            </div>

            <div className="grid gap-12">
                {stories.map((story) => (
                    <article key={story.id} className="group relative bg-rivellon-panel p-8 shadow-lg transition-all hover:bg-black/40 divinity-border">
                        <Link to={`/story/${story.id}`} className="block">
                            <header className="mb-4">
                                {story.video && (
                                    <div className="mb-6 overflow-hidden rounded border border-gold-dark/30 shadow-md">
                                        <video
                                            src={story.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                )}
                                <div className="flex items-center gap-2 text-blood-bright text-xs font-bold uppercase tracking-wider mb-2 font-serif">
                                    <Feather className="w-3 h-3" />
                                    <span>{story.date}</span>
                                </div>
                                <h2 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark mb-4 group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.5)] transition-all duration-300">
                                    {story.title}
                                </h2>

                                <div className="text-lg text-ink-muted italic font-serif border-l-2 border-blood/40 pl-4 py-2 my-4">
                                    {story.excerpt}
                                </div>
                            </header>

                            <div className="text-gold font-serif text-sm mt-6 uppercase tracking-widest font-bold flex items-center justify-start gap-2 group-hover:translate-x-2 transition-transform">
                                Leer Crónica <span className="text-xl leading-none">→</span>
                            </div>
                        </Link>
                    </article>
                ))}
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
