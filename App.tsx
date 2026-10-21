import React, { useEffect, useState } from 'react';
import './style.css';

import logoFlat from './photos/logo-flat.png';
import b11 from './photos/b1-1.jpg';
import b12 from './photos/b1-2.jpg';
import b13 from './photos/b1-3.jpg';
import b21 from './photos/b2-1.jpg';
import b22 from './photos/b2-2.jpg';
import b23 from './photos/b2-3.jpg';
import b31 from './photos/b3-1.jpg';
import b32 from './photos/b3-2.jpg';
import b33 from './photos/b3-3.jpg';
import b41 from './photos/b4-1.jpg';
import b42 from './photos/b4-2.jpg';
import b43 from './photos/b4-3.jpg';
import a11 from './photos/a1-1.jpg';
import a12 from './photos/a1-2.jpg';
import a13 from './photos/a1-3.jpg';
import a21 from './photos/a2-1.jpg';
import a22 from './photos/a2-2.jpg';
import a23 from './photos/a2-3.jpg';
import a31 from './photos/a3-1.jpg';
import a32 from './photos/a3-2.jpg';
import a33 from './photos/a3-3.jpg';
import a41 from './photos/a4-1.jpg';
import a42 from './photos/a4-2.jpg';
import a43 from './photos/a4-3.jpg';
import g1 from './photos/g1.jpg';
import g2 from './photos/g2.jpg';
import g3 from './photos/g3.jpg';
import g4 from './photos/g4.jpg';
import g5 from './photos/g5.jpg';
import g6 from './photos/g6.jpg';
import g7 from './photos/g7.jpg';
import g8 from './photos/g8.jpg';
import g9 from './photos/g9.jpg';
import hebrewFontData from './assets/hebrewFont';

type Photo = { src: string; alt: string };
type Collection = { num: string; title: string; photos: Photo[] };

const NOTE = 'עיצוב שולחנות יוקרתי';
const p = (src: string, alt: string): Photo => ({ src, alt });

const liveFlowers: Collection[] = [
    { num: '01', title: 'קולקציית פרחים ונרות', photos: [p(b11, 'קולקציית פרחים ונרות - מבט רחב'), p(b12, 'קולקציית פרחים ונרות - על השולחן'), p(b13, 'קולקציית פרחים ונרות - קרוב')] },
    { num: '02', title: 'אגרטלי קרמיקה ופרחים', photos: [p(b21, 'אגרטלי קרמיקה ופרחים - מבט רחב'), p(b22, 'אגרטלי קרמיקה ופרחים - על השולחן'), p(b23, 'אגרטלי קרמיקה ופרחים - קרוב')] },
    { num: '03', title: 'צילינדרים ונרות צפים', photos: [p(b31, 'צילינדרים ונרות צפים - מבט רחב'), p(b32, 'צילינדרים ונרות צפים - על השולחן'), p(b33, 'צילינדרים ונרות צפים - קרוב')] },
    { num: '04', title: 'מעמד זכוכית יוקרתי', photos: [p(b41, 'מעמד זכוכית יוקרתי - מבט רחב'), p(b42, 'מעמד זכוכית יוקרתי - על השולחן'), p(b43, 'מעמד זכוכית יוקרתי - הדמיית המוצר')] },
];

const centerpieces: Collection[] = [
    { num: '01', title: 'קנדלברת קריסטל וורדים', photos: [p(a11, 'קנדלברת קריסטל וורדים - מבט רחב'), p(a12, 'קנדלברת קריסטל וורדים - על השולחן'), p(a13, 'קנדלברת קריסטל וורדים - קרוב')] },
    { num: '02', title: 'מעמד אקרילי ובוקט פרחים משי מעוצב', photos: [p(a21, 'מעמד אקרילי ובוקט פרחים משי מעוצב - מבט רחב'), p(a22, 'מעמד אקרילי ובוקט פרחים משי מעוצב - קרוב'), p(a23, 'מעמד אקרילי ובוקט פרחים משי מעוצב - הדמיית המוצר')] },
    { num: '03', title: 'קנדלברת גלילי זכוכית', photos: [p(a31, 'קנדלברת גלילי זכוכית - מבט רחב'), p(a32, 'קנדלברת גלילי זכוכית - על השולחן'), p(a33, 'קנדלברת גלילי זכוכית - הדמיית המוצר')] },
    { num: '04', title: 'מעמדי זהב וקריסטל', photos: [p(a41, 'מעמדי זהב וקריסטל - מבט רחב'), p(a42, 'מעמדי זהב וקריסטל - על השולחן'), p(a43, 'מעמדי זהב וקריסטל - קרוב')] },
];

const gallery = [
    p(g1, 'זרי פרחים כחולים וסגולים באגרטלי אבן'),
    p(g2, 'ורדים אדומים והורטנזיות באגרטלי אבן'),
    p(g3, 'אגרטלים עם ירק ואמרנטוס'),
    p(g4, 'אגרטלים עם פמפס ופרחים מיובשים'),
    p(g5, 'אגרטלים לבנים עם ירק נשפך'),
    p(g6, 'שולחן אירוע עם פמוטי זכוכית ונרות'),
    p(g7, 'שולחן אירוע ארוך בתאורה כחולה'),
    p(g8, 'שולחן חתונה מעוצב בגווני זהב'),
    p(g9, 'אולם אירועים בתאורה סגולה'),
];

function NavA({ id, children }: { id: string; children: React.ReactNode }) {
    return <a href={`#${id}`} onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }}>{children}</a>;
}

function useReveal() {
    useEffect(() => {
        const root = document.documentElement;
        root.classList.add('js-reveal');
        const items = Array.from(document.querySelectorAll('.rise'));
        if (!('IntersectionObserver' in window)) {
            items.forEach((el) => el.classList.add('in'));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        items.forEach((el) => io.observe(el));
        const safety = setTimeout(() => items.forEach((el) => el.classList.add('in')), 1200);
        return () => { clearTimeout(safety); io.disconnect(); };
    }, []);
}

function SectionHead({ ghost, title, note }: { ghost: string; title: string; note?: string }) {
    return (
        <header className="cat-section-head rise">
            <span className="cat-ghost" aria-hidden="true">{ghost}</span>
            <h2>{title}</h2>
            {note && <p className="cat-note">{note}</p>}
            <div className="cat-hairline" aria-hidden="true"><span /></div>
        </header>
    );
}

function BleedCard({ c, onOpen }: { c: Collection; onOpen: (c: Collection) => void }) {
    return (
        <figure className="bleed rise">
            <button type="button" className="bleed-btn" onClick={() => onOpen(c)} aria-label={`${c.title} - לחצו לצפייה בכל התמונות`}>
                <img src={c.photos[0].src} alt={c.title} />
                <span className="bleed-overlay">
                    <span className="bleed-num">{c.num}</span>
                    <span className="bleed-title">{c.title}</span>
                    <span className="bleed-note">{NOTE}</span>
                    <span className="bleed-hint">לחצו לעוד תמונות</span>
                </span>
            </button>
        </figure>
    );
}

export function App() {
    useReveal();
    const [viewer, setViewer] = useState<Collection | null>(null);
    const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

    return (
        <div className="file-card">
            <div className="cat" dir="rtl">
                <nav className="cat-nav rise" aria-label="ניווט בקטלוג">
                    <NavA id="flowers">פרחים חיים</NavA>
                    <span className="cat-nav-dot" aria-hidden="true" />
                    <NavA id="centerpieces">מרכזי שולחן</NavA>
                    <span className="cat-nav-dot" aria-hidden="true" />
                    <NavA id="gallery">גלריית השראה</NavA>
                </nav>

                <header className="cat-hero">
                    <img className="cat-logo rise" src={logoFlat} alt="דוד אייכלר - עיצוב אירועים" />
                    <div className="cat-ornament rise" aria-hidden="true"><span /></div>
                    <p className="cat-kicker rise">קטלוג עיצוב אירועים · 2026</p>
                    <h1 className="rise">עיצוב פרחים ברמה אחרת</h1>
                    <p className="cat-sub rise">פרחים חיים ומרכזי שולחן שהופכים כל שולחן ליצירה.</p>
                </header>

                <section id="flowers" className="cat-section">
                    <SectionHead ghost="01" title="עיצוב פרחים חיים" />
                    {liveFlowers.map((c) => <BleedCard key={c.title} c={c} onOpen={setViewer} />)}
                </section>

                <section id="centerpieces" className="cat-section">
                    <SectionHead ghost="02" title="מרכזי שולחן" />
                    {centerpieces.map((c) => <BleedCard key={c.title} c={c} onOpen={setViewer} />)}
                </section>

                <section id="gallery" className="cat-section">
                    <SectionHead ghost="03" title="גלריית השראה" note="תשע תמונות מאירועים והדמיות" />
                    <div className="cat-frame cat-gallery rise">
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', padding: '10px' }}>
                            {gallery.map((photo, i) => (
                                <img 
                                    key={i} 
                                    src={photo.src} 
                                    alt={photo.alt} 
                                    style={{ height: '400px', borderRadius: '8px', cursor: 'pointer', objectFit: 'cover' }}
                                    onClick={() => setActivePhoto(photo)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="cat-footer rise">
                    <div className="cat-ornament" aria-hidden="true"><span /></div>
                    <p className="cat-footer-title">לייעוץ והזמנות</p>
                    <a className="cat-phone" href="tel:+972534837115" dir="ltr">053-483-7115</a>
                    <p className="cat-credit">התמונות והעיצובים של דוד אייכלר, עיצוב אירועים.</p>
                </footer>
            </div>

            {/* Collection Lightbox Modal */}
            {viewer && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '20px', overflowY: 'auto' }} onClick={() => setViewer(null)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', marginBottom: '20px', alignItems: 'center' }}>
                        <h2 style={{ margin: 0, fontFamily: 'serif' }}>{viewer.title}</h2>
                        <button onClick={() => setViewer(null)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>✕</button>
                    </div>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }} onClick={(e) => e.stopPropagation()}>
                        {viewer.photos.map((ph, idx) => (
                            <div key={idx} style={{ textAlign: 'center' }}>
                                <img src={ph.src} alt={ph.alt} style={{ maxHeight: '70vh', borderRadius: '8px', display: 'block', objectFit: 'contain' }} />
                                <p style={{ color: '#ccc', fontSize: '13px', marginTop: '6px' }}>{ph.alt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Single Photo Modal */}
            {activePhoto && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={() => setActivePhoto(null)}>
                    <img src={activePhoto.src} alt={activePhoto.alt} style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '8px', objectFit: 'contain' }} />
                    <p style={{ color: '#fff', marginTop: '10px' }}>{activePhoto.alt}</p>
                </div>
            )}
        </div>
    );
}
