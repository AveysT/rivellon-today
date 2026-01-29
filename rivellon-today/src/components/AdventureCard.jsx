import React from 'react';
import { Feather } from 'lucide-react';

export const AdventureCard = ({ title, date, excerpt, content }) => {
    return (
        <article className="prose prose-stone max-w-none mb-12 border-b border-ink/10 pb-8 last:border-0">
            <header className="mb-6">
                <div className="flex items-center gap-2 text-blood text-sm font-bold uppercase tracking-wider mb-2 font-serif">
                    <Feather className="w-4 h-4" />
                    <span>{date}</span>
                </div>
                <h2 className="text-4xl font-serif font-bold text-ink mb-2">
                    {title}
                </h2>
                <div className="text-xl text-ink-light italic font-serif">
                    {excerpt}
                </div>
            </header>

            <div className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-blood first-letter:mr-3 first-letter:float-left text-lg leading-relaxed text-ink/90 font-serif text-justify">
                {content}
            </div>
        </article>
    );
};
