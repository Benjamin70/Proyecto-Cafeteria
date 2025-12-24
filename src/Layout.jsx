
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { useCart } from './context/CartContext';

function Layout() {
    const { notification, closeNotification } = useCart();

    return (
        <div className="app-wrapper">
            <Header />

            <Toast
                message={notification.message}
                visible={notification.visible}
                type={notification.type}
                onClose={closeNotification}
            />

            {/* Contenedor principal sin restricciones de ancho para permitir fondos full-width */}
            <div className="page-content">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}

export default Layout;
