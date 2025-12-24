import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

function Header() {
    const location = useLocation();
    const { cart, cartCount, cartTotal } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="main-header">
            <div className="container header-content">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/img/logo.svg" alt="Cafetería Logo" />
                </Link>

                <button
                    className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menú"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Inicio</Link>
                    <Link to="/nosotros" className={location.pathname === '/nosotros' ? 'active' : ''} onClick={closeMenu}>Nosotros</Link>
                    <Link to="/proceso" className={location.pathname === '/proceso' ? 'active' : ''} onClick={closeMenu}>Proceso</Link>
                    <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''} onClick={closeMenu}>Menú</Link>
                    <Link to="/galeria" className={location.pathname === '/galeria' ? 'active' : ''} onClick={closeMenu}>Galería</Link>
                    <Link to="/contacto" className={location.pathname === '/contacto' ? 'active' : ''} onClick={closeMenu}>Contacto</Link>

                    <div className="cart-dropdown-container">
                        <Link to="/carrito" className="btn-cart-icon" aria-label="Carrito" style={{ display: 'flex' }} onClick={closeMenu}>
                            🛒
                            {cartCount > 0 && <span className="badge">{cartCount}</span>}
                        </Link>

                        {/* MINI CART POPOVER (Hover) - Solo visible en desktop o cuando no es móvil para simplificar */}
                        <div className="mini-cart-popup">
                            <div className="mini-cart-header">Tu Carrito ({cartCount})</div>

                            {cartCount === 0 ? (
                                <p style={{ textAlign: 'center', margin: '2rem 0', color: '#888' }}>Tu carrito está vacío</p>
                            ) : (
                                <>
                                    <div className="mini-cart-items">
                                        {cart.map(item => (
                                            <div key={item.id} className="mini-cart-item">
                                                <div style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: '2rem' }}>
                                                    ☕
                                                </div>
                                                <div className="mini-cart-info">
                                                    <h4>{item.nombre}</h4>
                                                    <p style={{ margin: 0, fontSize: '1.2rem', color: '#666' }}>
                                                        {item.quantity} x <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>${item.precio}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mini-cart-total">
                                        <span>Total:</span>
                                        <span>${cartTotal}</span>
                                    </div>
                                    <Link to="/carrito" className="btn btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '0.8rem', textAlign: 'center' }} onClick={closeMenu}>
                                        Ir a Pagar
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
