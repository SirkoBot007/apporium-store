# APPORIUM

**APPORIUM** es un mercado en línea para aplicaciones de inteligencia artificial y productos digitales. Inspirada en la experiencia de Google Play Store, APPORIUM ofrece navegación intuitiva, búsqueda avanzada, categorías detalladas y fichas de productos ricas en información. Este repositorio contiene el código fuente del front‑end estático de APPORIUM y su configuración de despliegue en Vercel.

## Características principales

* **Barra superior y cajón de navegación** – interfaz basada en Material Design con buscador prominente y menú lateral desplegable que agrupa las categorías de apps IA y productos digitales.
* **Listados de apps y productos** – tarjetas responsive con imagen, nombre, valoración y precio/estado (gratis, premium o suscripción).
* **Fichas de producto** – páginas con hero, galería, descripción, novedades, especificaciones técnicas y botón de acción (instalar/comprar).
* **Soporte multilingüe y multi‑moneda** – preparado para ES/EN y conversión automática de divisas según localización del usuario.
* **Pago con PayPal y Stripe** – integración prevista para botón de compra/instalación con la cuenta PayPal `sirkokoloko007@gmail.com` y soporte para tarjetas mediante Stripe.
* **Descargas seguras** – enlaces a Supabase Storage con caducidad configurable para proteger los binarios y productos digitales.
* **README de calidad** – documentación estilo Play Store que detalla la estructura del proyecto, patrones de diseño y directrices de contribución.

## Estructura del proyecto

```
apporium-store/
├── index.html          – Página de inicio (home) con hero, top apps y productos.
├── digital.html        – Listado de productos digitales (ebooks, cursos, plantillas).
├── app.html            – Plantilla de ficha de aplicación con detalles técnicos.
├── style.css           – Hoja de estilos basada en Material Design.
└── README.md           – Este documento.
```

## Despliegue

El proyecto se despliega automáticamente en **Vercel** al hacer push a la rama `main`. La URL de producción es `https://apporium-store.vercel.app`. Para ver el sitio en local, abre los archivos HTML en un navegador moderno o sirve la carpeta con cualquier servidor estático.

## Personalización

* Actualiza las listas de apps y productos en `index.html` y `digital.html` con tus propios datos o con plantillas generadas desde un CMS.
* Modifica la paleta de colores y tipografías en `style.css` ajustando las variables CSS de `:root`.
* Añade nuevas categorías o subpáginas duplicando y adaptando el patrón de secciones y tarjetas.

## Contribución

Las contribuciones están abiertas. Sigue los pasos habituales:

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tu aporte (`git checkout -b feature/tu-mejora`).
3. Realiza tus cambios y haz commit (`git commit -am 'Descripción'`).
4. Sube tu rama (`git push origin feature/tu-mejora`) y abre un Pull Request.

## Licencia

Este proyecto se distribuye bajo la **licencia MIT**. Consulta el archivo LICENSE (si existe) para más detalles.