import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ProcesoPage from './pages/ProcesoPage';
import MenuPage from './pages/MenuPage';
import GaleriaPage from './pages/GaleriaPage';
import ContactoPage from './pages/ContactoPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="proceso" element={<ProcesoPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="carrito" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
