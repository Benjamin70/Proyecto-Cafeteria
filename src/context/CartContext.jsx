import { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem('cafeteria_cart');
        return localCart ? JSON.parse(localCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [notification, setNotification] = useState({ visible: false, message: '', type: 'success' });

    useEffect(() => {
        localStorage.setItem('cafeteria_cart', JSON.stringify(cart));
    }, [cart]);

    const showNotification = (message, type = 'success') => {
        setNotification({ visible: true, message, type });
        // El componente Toast manejará su propio timer, pero aquí podemos resetear si quisiéramos forzar
    };

    const closeNotification = () => {
        setNotification(prev => ({ ...prev, visible: false }));
    };

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        // YA NO ABRIMOS EL CARRITO AUTOMÁTICAMENTE
        // setIsCartOpen(true); 

        // MOSTRAMOS EL TOAST
        showNotification(`¡${product.nombre} agregado al carrito!`);
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, amount) => {
        setCart(prevCart => prevCart.map(item => {
            if (item.id === productId) {
                const newQuantity = item.quantity + amount;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + (item.precio * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            isCartOpen,
            toggleCart,
            cartCount,
            cartTotal,
            notification,
            closeNotification
        }}>
            {children}
        </CartContext.Provider>
    );
};
