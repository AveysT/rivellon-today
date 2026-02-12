import React from 'react';
import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen relative selection:bg-gold/20 selection:text-gold-light" style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}imagenes/background.png')`,
            backgroundSize: '95%',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#171212ff', // Tinte de color rojo oscuro
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>

            {/* Texture Overlay Effect - Simple CSS Noise or Gradient */}
            < div className="fixed inset-0 pointer-events-none opacity-10 mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div >

            <div className="relative z-10 container mx-auto px-4 py-8 max-w-5xl">
                <Header />
                <main className="bg-rivellon-panel/90 p-8 shadow-2xl divinity-border relative text-ink">
                    {/* Corner flourishes can go here */}
                    {children}
                </main>

                <footer className="mt-12 text-center text-ink-muted text-sm font-serif">
                    <p>Ansia Absoluta</p>
                </footer>
            </div>
        </div >
    );
};
