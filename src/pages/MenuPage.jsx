import { menuItems } from '../data/menu';
import { useCart } from '../context/CartContext';

function MenuPage() {
    const { addToCart } = useCart();
    const cafes = menuItems.filter(item => item.categoria === 'cafe');
    const comidas = menuItems.filter(item => item.categoria === 'comida');

    return (
        <main>
            {/* HERO HEADER */}
            <div className="hero hero-menu">
                <div className="hero-content">
                    <h1>Nuestro Menú</h1>
                    <p>Sabor auténtico en cada detalle</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    {/* SECCIÓN CAFÉ */}
                    <div className="text-center" style={{ marginBottom: '5rem' }}>
                        <span className="heading-decoration">Bebidas Calientes</span>
                        <h2>Cafés & Especialidades</h2>
                    </div>

                    <div className="grid-auto-fit" style={{ marginBottom: '8rem' }}>
                        {cafes.map(item => (
                            <div className="card menu-card" key={item.id}>
                                <h4>{item.nombre}</h4>
                                <p style={{ color: 'var(--text-light)' }}>{item.descripcion}</p>
                                <span className="price">${item.precio}</span>
                                <button className="btn btn-outline" onClick={() => addToCart(item)}>
                                    Agregar al Carrito
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* SECCIÓN COMIDA */}
                    <div className="text-center" style={{ marginBottom: '5rem' }}>
                        <span className="heading-decoration">Para Acompañar</span>
                        <h2>Delicias & Postres</h2>
                    </div>

                    <div className="grid-auto-fit">
                        {comidas.map(item => (
                            <div className="card menu-card" key={item.id}>
                                <h4>{item.nombre}</h4>
                                <p style={{ color: 'var(--text-light)' }}>{item.descripcion}</p>
                                <span className="price">${item.precio}</span>
                                <button className="btn btn-outline" onClick={() => addToCart(item)}>
                                    Agregar al Carrito
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MenuPage;
