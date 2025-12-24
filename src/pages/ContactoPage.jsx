
function ContactoPage() {
    return (
        <main>
            <div className="hero hero-contacto">
                <div className="hero-content">
                    <h1>Contáctanos</h1>
                    <p>Estamos aquí para escucharte y atenderte.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem' }}>
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <span className="heading-decoration">Reservaciones</span>
                            <h2>Llena el formulario</h2>
                        </div>

                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" id="nombre" className="form-input" placeholder="Tu Nombre" required />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input type="email" id="email" className="form-input" placeholder="Tu Email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                                    <input type="tel" id="telefono" className="form-input" placeholder="Tu Teléfono" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <textarea id="mensaje" className="form-input" rows="5" placeholder="¿En qué podemos ayudarte?"></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContactoPage;
