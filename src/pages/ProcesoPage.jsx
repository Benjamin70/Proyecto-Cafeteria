function ProcesoPage() {
    const pasos = [
        {
            titulo: "1. Granos de Café",
            imagen: "proceso_1.jpg",
            descripcion: "Seleccionamos manualmente los mejores granos de café verde de altura."
        },
        {
            titulo: "2. Tostado Perfecto",
            imagen: "proceso_2.jpg",
            descripcion: "Nuestros maestros tostadores resaltan las notas naturales de cada origen."
        },
        {
            titulo: "3. Empacado",
            imagen: "proceso_3.jpg",
            descripcion: "Conservamos la frescura y el aroma con tecnología de sellado hermético."
        },
        {
            titulo: "4. Molienda",
            imagen: "proceso_4.jpg",
            descripcion: "La molienda precisa al momento garantiza la extracción perfecta de sabores."
        },
        {
            titulo: "5. Preparación",
            imagen: "proceso_5.jpg",
            descripcion: "Baristas expertos cuidan la temperatura y técnica para una bebida ideal."
        },
        {
            titulo: "6. Disfrutar",
            imagen: "taza.jpg",
            descripcion: "El mejor momento: relajarte y disfrutar el aroma y sabor de tu café."
        }
    ];

    return (
        <main>
            <div className="hero hero-proceso">
                <div className="hero-content">
                    <h1>Nuestro Proceso</h1>
                    <p>Del grano a tu taza, cuidamos cada detalle.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-auto-fit">
                        {pasos.map((paso, index) => (
                            <div className="card text-center" key={index} style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '250px', overflow: 'hidden' }}>
                                    <img
                                        src={`/img/${paso.imagen}`}
                                        alt={paso.titulo}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h3>{paso.titulo}</h3>
                                    <p>{paso.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProcesoPage;
