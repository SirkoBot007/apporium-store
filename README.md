# APPORIUM – Mercado de aplicaciones de IA y productos digitales

**APPORIUM** es una tienda en línea inspirada en el diseño de Google Play que agrupa las mejores aplicaciones de inteligencia artificial (IA) y un catálogo de productos digitales de calidad (ebooks, cursos, plantillas, PDF y más). Este repositorio contiene la implementación del frontend estático de la tienda, lista para desplegar en Vercel.

## Características principales

- **Diseño estilo Play Store** – Barra superior con buscador, menú lateral desplegable (drawer) para categorías y un layout limpio basado en Material Design.
- **Catálogo de Apps IA** – Listados de aplicaciones organizadas por categorías como Productividad, Creatividad, Foto/Video, DevTools, Finanzas, Educación, Salud, Viajes, Música, Utilidades y Juegos. Cada app cuenta con su propia página de detalle con información, capturas y botón de instalación o compra.
- **Productos digitales** – Sección de ebooks, cursos y plantillas/PDFs con fichas de producto detalladas y precios. Incluye página individual por producto para compras.
- **Responsive** – Adaptado a móviles, tablets y escritorio con una experiencia consistente.
- **Componentes reutilizables** – Estructura modular de tarjetas, filas scrollables, grids y secciones preparada para escalar el catálogo.
- **Preparado para internacionalización** – Los textos están en español pero la estructura permite añadir múltiples idiomas. Se incluye soporte para ES/EN en los títulos y etiquetas si se desea ampliar.
- **Configuración de pagos** – La plantilla deja espacio para integrar PayPal, Stripe u otros métodos de pago en los botones `Instalar` / `Comprar`.

## Estructura del proyecto

```text
/apporium-store
├── index.html         # Página de inicio con Top Charts, Destacados y Tendencias
├── apps.html          # Listado de aplicaciones por categoría
├── digital.html       # Listado de ebooks, cursos y plantillas
├── app.html           # Página de detalle de una aplicación (ejemplo)
├── product.html       # Página de detalle de un producto digital (ejemplo)
├── style.css          # Hoja de estilos basada en Material Design
├── script.js          # Comportamiento del menú lateral
├── logo.png           # Logotipo de APPORIUM con temática IA
└── README.md          # Este archivo de documentación
```

## Despliegue en Vercel

Para desplegar la tienda en [Vercel](https://vercel.com/) sigue estos pasos:

1. **Clonar el repositorio** en tu cuenta de GitHub o crear un fork.
2. **Importar el repositorio a Vercel** seleccionando la opción *New Project* e iniciando sesión con GitHub.
3. Elegir la configuración por defecto para un *Static Site* (no se necesita Node.js) y pulsar **Deploy**. Vercel detectará automáticamente los archivos estáticos.
4. Una vez desplegado, Vercel generará un dominio `.vercel.app` para tu tienda (por ejemplo, `https://apporium-store.vercel.app`). Puedes actualizar las URL internas si utilizas un dominio personalizado.

Cada vez que hagas un *commit* en la rama `main`, Vercel desplegará automáticamente los cambios.

## Personalización

- **Añadir más productos/apps**: duplica las tarjetas existentes en `index.html`, `apps.html` o `digital.html` y actualiza la imagen, títulos, descripciones y precios. Para cada nuevo elemento puedes crear una página de detalle propia (copiando y adaptando `app.html` o `product.html`).
- **Integración de pagos**: sustituye el botón en las páginas de detalle (`cta-btn`) por el script oficial de PayPal o Stripe para pagos seguros. Es posible integrar modelos freemium, suscripciones o descargas gratuitas según tu plan de negocio.
- **Internacionalización**: puedes duplicar las páginas con sufijos de idioma (p. ej. `index_en.html`) o utilizar un framework de traducción si migras a un stack dinámico.
- **Backend y base de datos**: este proyecto es estático. Si quieres soportar autenticación de usuarios, carrito, reseñas y subida de aplicaciones por desarrolladores, considera migrar a un framework como Next.js con Supabase/Firebase y ampliar la base de datos. La arquitectura actual permite hacerlo sin grandes cambios de diseño.

## Contribuir

1. Haz un *fork* de este repositorio y crea una nueva rama para tu funcionalidad o corrección de errores.
2. Asegúrate de que tu código sigue las pautas de estilo y no rompe el diseño responsive.
3. Envía un *pull request* explicando claramente los cambios introducidos y el motivo.

## Créditos

Las imágenes utilizadas en las tarjetas provienen de [Pexels](https://www.pexels.com/) y se emplean como ejemplos. El logotipo fue generado internamente para ilustrar la identidad de APPORIUM.

---

Construido con ❤️ y Material Design para ofrecer la mejor experiencia en la venta y descarga de apps de IA y productos digitales.