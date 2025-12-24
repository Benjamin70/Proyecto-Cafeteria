function HomePage() {
    return (
        <main>
            {/* HERO SECTION */}
            <section className="hero hero-home">
                <div className="hero-content">
                    <h1>Disfruta una deliciosa taza de café</h1>
                    <p>La mejor experiencia para despertar tus sentidos</p>
                    <a href="#conoce" className="btn btn-primary">Conoce Más</a>
                </div>
            </section>

            {/* SECCIÓN ICONOS */}
            <section id="conoce" className="section-padding">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '5rem' }}>
                        <span className="heading-decoration">Nuestra Esencia</span>
                        <h2>¿Por qué elegirnos?</h2>
                    </div>

                    <div className="grid-auto-fit icons-grid">
                        <div className="card text-center" style={{ padding: '3rem' }}>
                            <img src="/img/icono_cafe.svg" alt="Café" style={{ height: '80px', margin: '0 auto 2rem' }} />
                            <h3>Café de Altura</h3>
                            <p>Selección premium de granos cultivados en las mejores regiones.</p>
                        </div>
                        <div className="card text-center" style={{ padding: '3rem' }}>
                            <img src="/img/icono_postre.svg" alt="Postres" style={{ height: '80px', margin: '0 auto 2rem' }} />
                            <h3>Repostería Artesanal</h3>
                            <p>Dulces hechos a mano cada mañana con ingredientes frescos.</p>
                        </div>
                        <div className="card text-center" style={{ padding: '3rem' }}>
                            <img src="/img/icono_te.svg" alt="Té" style={{ height: '80px', margin: '0 auto 2rem' }} />
                            <h3>Té Selection</h3>
                            <p>Una variedad relajante de hierbas y sabores del mundo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN EXPERIENCIA (Galería Preview) */}
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-body)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '5rem' }}>
                        <span className="heading-decoration">Galería</span>
                        <h2>Vive la Experiencia</h2>
                    </div>

                    <div className="grid-auto-fit">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div className="card" key={num}>
                                <img
                                    src={`/img/galeria/galeria_0${(num > 4 ? num % 4 : num)}.jpg`}
                                    alt="Galería"
                                    style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;
