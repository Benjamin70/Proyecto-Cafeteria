function NosotrosPage() {
    return (
        <main>
            <div className="hero hero-nosotros">
                <div className="hero-content">
                    <h1>Sobre Nosotros</h1>
                    <p>Una historia de pasión, tradición y sabor.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>

                        <div className="imagen-nosotros">
                            <img src="/img/nosotros_sidebar.jpg" alt="Interior Cafetería" style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }} />
                        </div>

                        <div className="texto-nosotros">
                            <span className="heading-decoration">Nuestra Historia</span>
                            <h2>Tradición desde 2010</h2>

                            <p style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#555' }}>
                                Fundada con el sueño simple pero ambicioso de servir el mejor café de especialidad,
                                La Cafetería se ha convertido en un punto de encuentro para amantes del buen sabor.
                                Comenzamos como un pequeño puesto familiar y hoy somos un referente en la ciudad.
                            </p>

                            <blockquote style={{
                                borderLeft: '5px solid var(--accent)',
                                paddingLeft: '2rem',
                                fontSize: '2rem',
                                fontStyle: 'italic',
                                color: 'var(--primary-dark)',
                                margin: '3rem 0'
                            }}>
                                "No solo servimos café, creamos momentos inolvidables en cada taza."
                            </blockquote>

                            <p style={{ fontSize: '1.8rem', color: '#555' }}>
                                Trabajamos directamente con productores locales, asegurando un comercio justo y
                                granos de la más alta calidad. Nuestro compromiso es con la sostenibilidad y
                                la excelencia en cada extracción.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default NosotrosPage;
