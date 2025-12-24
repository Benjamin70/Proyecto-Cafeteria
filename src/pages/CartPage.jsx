import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
    const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

    return (
        <main>
            <div className="hero hero-menu" style={{ height: '40vh' }}>
                <div className="hero-content">
                    <h1>Tu Carrito</h1>
                    <p>Revisa y confirma tus productos seleccionados</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    {cart.length === 0 ? (
                        <div className="text-center" style={{ padding: '5rem 0' }}>
                            <p style={{ fontSize: '5rem' }}>🛒</p>
                            <h2>Tu carrito está vacío</h2>
                            <p style={{ margin: '2rem 0', color: '#666' }}>Parece que aún no has agregado nada delicioso a tu orden.</p>
                            <Link to="/menu" className="btn btn-primary">Ver Menú</Link>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repea(auto-fit, minmax(300px, 1fr))', gap: '4rem' }} className="cart-grid-layout">
                            {/* COLUMNA IZQUIERDA: LISTA DE PRODUCTOS (Usando CSS Grid/Flex moderno) */}
                            <div className="cart-list" style={{ gridColumn: '1 / -1', lg: '1 / 3' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                                            <th style={{ padding: '1rem' }}>Producto</th>
                                            <th style={{ padding: '1rem' }}>Precio</th>
                                            <th style={{ padding: '1rem' }}>Cantidad</th>
                                            <th style={{ padding: '1rem' }}>Subtotal</th>
                                            <th style={{ padding: '1rem' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(item => (
                                            <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                                                <td style={{ padding: '2rem 1rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                                    {/* Placeholder image logic if needed, but assuming no image prop in cart item for now implies text only or generic */}
                                                    <div>
                                                        <h4 style={{ margin: 0, color: 'var(--primary-dark)' }}>{item.nombre}</h4>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>${item.precio}</td>
                                                <td style={{ padding: '1rem' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                        <button
                                                            className="btn-qty"
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                        >-</button>
                                                        <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                                                        <button
                                                            className="btn-qty"
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                        >+</button>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '1rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                                                    ${item.precio * item.quantity}
                                                </td>
                                                <td style={{ padding: '1rem' }}>
                                                    <button
                                                        className="btn-trash"
                                                        onClick={() => removeFromCart(item.id)}
                                                        style={{ color: '#ff4444' }}
                                                    >
                                                        🗑️
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div style={{ marginTop: '3rem' }}>
                                    <button onClick={clearCart} className="btn btn-outline" style={{ fontSize: '1.4rem' }}>
                                        Vaciar Carrito
                                    </button>
                                </div>
                            </div>

                            {/* COLUMNA DERECHA: RESUMEN (CARD) */}
                            <div className="cart-summary" style={{
                                backgroundColor: 'var(--bg-body)',
                                padding: '3rem',
                                borderRadius: 'var(--radius)',
                                height: 'fit-content',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <h3 style={{ borderBottom: '2px solid #ddd', paddingBottom: '1rem', marginBottom: '2rem' }}>Resumen del Pedido</h3>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.6rem' }}>
                                    <span>Subtotal</span>
                                    <span>${cartTotal}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.6rem' }}>
                                    <span>Envío</span>
                                    <span>Gratis</span>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #ddd', fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-dark)' }}>
                                    <span>Total</span>
                                    <span>${cartTotal}</span>
                                </div>

                                <button className="btn btn-primary" style={{ width: '100%', marginTop: '3rem', padding: '1.6rem', fontSize: '1.5rem', letterSpacing: '1px' }}>
                                    PROCEDER AL PAGO
                                </button>

                                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#999', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                        🔒 Pago 100% Seguro
                                    </p>
                                </div>

                                <Link to="/menu" style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-light)', textDecoration: 'underline' }}>
                                    Seguir Comprando
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default CartPage;
