import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function GaleriaPage() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = Array.from({ length: 12 }, (_, i) => {
        // Usamos módulo 10 porque solo tenemos 10 imágenes reales (galeria_01 a galeria_10)
        // (i % 10) + 1 nos da 1..10, luego 1..2
        const imgNum = (i % 10) + 1;
        return {
            src: `/img/galeria/galeria_${imgNum.toString().padStart(2, '0')}.jpg`,
            alt: `Imagen de galería ${imgNum}`
        };
    });

    return (
        <main>
            <div className="hero hero-galeria">
                <div className="hero-content">
                    <h1>Nuestra Galería</h1>
                    <p>Un vistazo a nuestros momentos favoritos.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-auto-fit" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                        {images.map((img, i) => (
                            <div className="card" key={i} style={{ cursor: 'pointer', overflow: 'hidden' }} onClick={() => { setIndex(i); setOpen(true); }}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                        ))}
                    </div>

                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        index={index}
                        slides={images}
                        carousel={{ finite: false }}
                    />
                </div>
            </section>
        </main>
    );
}

export default GaleriaPage;
