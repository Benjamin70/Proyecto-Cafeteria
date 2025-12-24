import { useEffect, useState } from 'react';

function Toast({ message, visible, type = 'success', onClose }) {
    // Manejo de animación de entrada/salida
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (visible) {
            setShow(true);
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // 3 segundos visible
            return () => clearTimeout(timer);
        } else {
            setShow(false);
        }
    }, [visible, onClose]);

    if (!show && !visible) return null;

    return (
        <div className={`toast-notification ${type} ${show ? 'show' : ''}`}>
            <div className="toast-icon">
                {type === 'success' ? '✅' : 'ℹ️'}
            </div>
            <div className="toast-content">
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Toast;
