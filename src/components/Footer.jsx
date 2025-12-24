
function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Ubicación</h3>
                        <p>Nicolas Copernico 5990</p>
                        <p>Santo Domingo, Rep. Dom.</p>
                    </div>

                    <div className="footer-col">
                        <h3>Reservación</h3>
                        <p>Tel: 3850-9102</p>
                        <a href="tel:+38509102" className="btn-link">Llamar Ahora</a>
                    </div>

                    <div className="footer-col">
                        <h3>Horario</h3>
                        <p>Lun-Jue: 11:00 - 22:00</p>
                        <p>Vie-Sab: 9:00 - 24:00</p>
                        <p>Dom: Cerrado</p>
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} La Cafetería. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
