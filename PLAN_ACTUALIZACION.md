# Plan de Actualización: Migración a React ⚛️

**Objetivo:** Transformar el sitio web estático de la Cafetería en una Aplicación Web Moderna (SPA) utilizando **React** y **Vite**.

## 🚀 Metas Principales

1.  **Tecnología Moderna:**
    *   Migrar de Gulp/VanillaJS a **React + Vite**.
    *   Mantener **SASS** para los estilos.
    *   Eliminar complejidad innecesaria (versiones extra de imágenes).

2.  **Funcionalidad "Real":**
    *   **Carrito de Compras:** Estado global real, persistente y sin recargas de página.
    *   **Galería Interactiva:** Componente Lightbox profesional.
    *   **Menú Dinámico:** Generado a partir de datos (JSON), no HTML estático.

3.  **Contenido Premium:**
    *   **Adiós Lorem Ipsum:** Textos reales y descriptivos sobre café.
    *   **Imágenes Realistas:** Una sola versión de alta calidad.

## 🛠️ Estrategia de Migración

1.  **Backup**: Mover todo el código actual a `_legacy`.
2.  **Setup**: Inicializar proyecto Vite + React.
3.  **Porting**:
    *   Migrar estructura HTML a componentes JSX (`Layout`, `Header`, `Footer`).
    *   Adaptar estilos SASS a la nueva estructura.
    *   Implementar router para navegación (`react-router-dom`).
4.  **Features**:
    *   Implementar `CartContext` para el carrito.
    *   Integrar galería.
    *   Formulario de contacto funcional.

Esta actualización asegura un proyecto más robusto, mantenible y con una experiencia de usuario (UX) superior.
