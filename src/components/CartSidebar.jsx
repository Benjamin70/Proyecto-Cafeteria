import { useCart } from '../context/CartContext';

function CartSidebar() {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    return (
        <>
            {/* Overlay (Fondo oscuro borroso) */}
            <div
                className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
                onClick={toggleCart}
            ></div>

            {/* Sidebar (Panel deslizante) */}
            <aside className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>Tu Pedido</h3>
                    <button className="btn-close-cart" onClick={toggleCart}>&times;</button>
                </div>

                <div className="cart-body">
                    {cart.length === 0 ? (
                        <div className="text-center" style={{ marginTop: '5rem', opacity: 0.7 }}>
                            <p style={{ fontSize: '4rem', marginBottom: '1rem' }}>☕</p>
                            <p>No has agregado productos aún.</p>
                            <button className="btn btn-outline" style={{ marginTop: '2rem' }} onClick={toggleCart}>
                                Ir al Menú
                            </button>
                        </div>
                    ) : (
                        <div className="cart-items-list">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-info">
                                        <h4>{item.nombre}</h4>
                                        <p>${item.precio}</p>
                                    </div>

                                    <div className="cart-controls">
                                        <button className="btn-qty" onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                                        <button className="btn-qty" onClick={() => updateQuantity(item.id, 1)}>+</button>

                                        <button
                                            className="btn-trash"
                                            onClick={() => removeFromCart(item.id)}
                                            style={{ marginLeft: '1rem', color: '#ff4444', fontSize: '1.4rem' }}
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total</span>
                            <span>${cartTotal}</span>
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                            Confirmar Pedido
                        </button>
                        <button
                            className="btn btn-outline"
                            style={{ width: '100%', fontSize: '1.2rem', borderColor: '#ccc', color: '#666' }}
                            onClick={clearCart}
                        >
                            Vaciar Carrito
                        </button>
                    </div>
                )}
            </aside>
        </>
    );
}

export default CartSidebar;
