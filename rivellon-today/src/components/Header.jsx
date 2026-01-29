import React from 'react';
import { Scroll, Sword } from 'lucide-react';

export const Header = () => {
    return (
        <header className="border-b-2 border-gold-dark/50 pb-6 mb-8 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gold-linear-gradient opacity-50"></div>

            <div className="container mx-auto px-4 text-center">

                <h1 className="font-serif text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-light to-gold-dark mb-4 tracking-tight drop-shadow-lg"
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}>
                    Rivellon Today
                </h1>

                <div className="flex items-center justify-center gap-4 text-ink-muted italic font-serif border-y border-gold-dark/30 py-2 mt-4 max-w-2xl mx-auto">
                    <span className="flex items-center gap-2 hover:text-gold transition-colors"><Scroll className="w-4 h-4 text-gold-dark" /> Crónicas de los Ungidos</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blood-bright shadow-[0_0_5px_#b92b2b]"></span>
                    <span className="flex items-center gap-2 hover:text-gold transition-colors">Edición Costa de la Parca<Scroll className="w-4 h-4 rotate-180 text-gold-dark" /></span>
                </div>
            </div>
        </header>
    );
};
