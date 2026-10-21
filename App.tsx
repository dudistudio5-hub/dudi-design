import React, { useState } from 'react';
import './style.css';

type Photo = { src: string; alt: string };
type Collection = { num: string; title: string; photos: Photo[] };

const NOTE = 'עיצוב שולחנות יוקרתי';
const p = (src: string, alt: string): Photo => ({ src, alt });

const liveFlowers: Collection[] = [
    { num: '01', title: 'קולקציית פרחים ונרות', photos: [p('/photos/b1-1.jpg', 'קולקציית פרחים ונרות - מבט רחב'), p('/photos/b1-2.jpg', 'קולקציית פרחים ונרות - על השולחן'), p('/photos/b1-3.jpg', 'קולקציית פרחים ונרות - קרוב')] },
    { num: '02', title: 'אגרטלי קרמיקה ופרחים', photos: [p('/photos/b2-1.jpg', 'אגרטלי קרמיקה ופרחים - מבט רחב'), p('/photos/b2-2.jpg', 'אגרטלי קרמיקה ופרחים - על השולחן'), p('/photos/b2-3.jpg', 'אגרטלי קרמיקה ופרחים - קרוב')] },
    { num: '03', title: 'צילינדרים ונרות צפים', photos: [p('/photos/b3-1.jpg', 'צילינדרים ונרות צפים - מבט רחב'), p('/photos/b3-2.jpg', 'צילינדרים ונרות צפים - על השולחן'), p('/photos/b3-3.jpg', 'צילינדרים ונרות צפים - קרוב')] },
    { num: '04', title: 'מעמד זכוכית יוקרתי', photos: [p('/photos/b4-1.jpg', 'מעמד זכוכית יוקרתי - מבט רחב'), p('/photos/b4-2.jpg', 'מעמד זכוכית יוקרתי - על השולחן'), p('/photos/b4-3.jpg', 'מעמד זכוכית יוקרתי - הדמיית המוצר')] },
];

const centerpieces: Collection[] = [
    { num: '01', title: 'קנדלברת קריסטל וורדים', photos: [p('/photos/a1-1.jpg', 'קנדלברת קריסטל וורדים - מבט רחב'), p('/photos/a1-2.jpg', 'קנדלברת קריסטל וורדים - על השולחן'), p('/photos/a1-3.jpg', 'קנדלברת קריסטל וורדים - קרוב')] },
    { num: '02', title: 'מעמד אקרילי ובוקט פרחים משי מעוצב', photos: [p('/photos/a2-1.jpg', 'מעמד אקרילי ובוקט פרחים משי מעוצב - מבט רחב'), p('/photos/a2-2.jpg', 'מעמד אקרילי ובוקט פרחים משי מעוצב - קרוב'), p('/photos/a2-3.jpg', 'מעמד אקרילי ובוקט פרחים משי מעוצב - הדמיית המוצר')] },
    { num: '03', title: 'קנדלברת גלילי זכוכית', photos: [p('/photos/a3-1.jpg', 'קנדלברת גלילי זכוכית - מבט רחב'), p('/photos/a3-2.jpg', 'קנדלברת גלילי זכוכית - על השולחן'), p('/photos/a3-3.jpg', 'קנדלברת גלילי זכוכית - הדמיית המוצר')] },
    { num: '04', title: 'מעמדי זהב וקריסטל', photos: [p('/photos/a4-1.jpg', 'מעמדי זהב וקריסטל - מבט רחב'), p('/photos/a4-2.jpg', 'מעמדי זהב וקריסטל - על השולחן'), p('/photos/a4-3.jpg', 'מעמדי זהב וקריסטל - קרוב')] },
];

const gallery = [
    p('/photos/g1.jpg', 'זרי פרחים כחולים וסגולים באגרטלי אבן'),
    p('/photos/g2.jpg', 'ורדים אדומים והורטנזיות באגרטלי אבן'),
    p('/photos/g3.jpg', 'אגרטלים עם ירק ואמרנטוס'),
    p('/photos/g4.jpg', 'אגרטלים עם פמפס ופרחים מיובשים'),
    p('/photos/g5.jpg', 'אגרטלים לבנים עם ירק נשפך'),
    p('/photos/g6.jpg', 'שולחן אירוע עם פמוטי זכוכית ונרות'),
    p('/photos/g7.jpg', 'שולחן אירוע ארוך בתאורה כחולה'),
    p('/photos/g8.jpg', 'שולחן חתונה מעוצב בגווני זהב'),
    p('/photos/g9.jpg', 'אולם אירועים בתאורה סגולה'),
];

function NavA({ id, children }: { id: string; children: React.ReactNode }) {
    return <a href={`#${id}`} onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }}>{children}</a>;
}

function SectionHead({ ghost, title, note }: { ghost: string; title: string; note?: string }) {
    return (
        <header className="cat-section-head">
            <span className="cat-ghost" aria-hidden="true">{ghost}</span>
            <h2>{title}</h2>
            {note && <p className="cat-note">{note}</p>}
            <div className="cat-hairline" aria-hidden="true"><span /></div>
        </header>
    );
}

function BleedCard({ c, onOpen }: { c: Collection; onOpen: (c: Collection) => void }) {
    return (
        <figure className="bleed">
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
    const [viewer, setViewer] = useState<Collection | null>(null);
    const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

    return (
        <div className="file-card">
            <div className="cat" dir="rtl">
                <nav className="cat-nav" aria-label="ניווט בקטלוג">
                    <NavA id="flowers">פרחים חיים</NavA>
                    <span className="cat-nav-dot" aria-hidden="true" />
                    <NavA id="centerpieces">מרכזי שולחן</NavA>
                    <span className="cat-nav-dot" aria-hidden="true" />
                    <NavA id="gallery">גלריית השראה</NavA>
                </nav>

                <header className="cat-hero">
                    <img className="cat-logo" src="/photos/logo-flat.png" alt="דוד אייכלר - עיצוב אירועים" />
                    <div className="cat-ornament" aria-hidden="true"><span /></div>
                    <p className="cat-kicker">קטלוג עיצוב אירועים · 2026</p>
                    <h1>עיצוב פרחים ברמה אחרת</h1>
                    <p className="cat-sub">פרחים חיים ומרכזי שולחן שהופכים כל שולחן ליצירה.</p>
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
                    <div className="cat-frame cat-gallery">
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', padding: '10px' }}>
                            {gallery.map((photo, i) => (
                                <img 
                                    key={i} 
                                    src={photo.src} 
                                    alt={photo.alt} 
                                    style={{ height: '300px', borderRadius: '8px', cursor: 'pointer', objectFit: 'cover' }}
                                    onClick={() => setActivePhoto(photo)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="cat-footer">
                    <div className="cat-ornament" aria-hidden="true"><span /></div>
                    <p className="cat-footer-title">לייעוץ והזמנות</p>
                    <a className="cat-phone" href="tel:+972534837115" dir="ltr">053-483-7115</a>
                    <p className="cat-credit">התמונות והעיצובים של דוד אייכלר, עיצוב אירועים.</p>
                </footer>
            </div>

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

            {activePhoto && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={() => setActivePhoto(null)}>
                    <img src={activePhoto.src} alt={activePhoto.alt} style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '8px', objectFit: 'contain' }} />
                    <p style={{ color: '#fff', marginTop: '10px' }}>{activePhoto.alt}</p>
                </div>
            )}
        </div>
    );
}
