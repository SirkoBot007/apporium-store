# APPORIUM

**APPORIUM** es un mercado en línea para productos digitales de alta calidad y aplicaciones impulsadas por IA. Este repositorio contiene el sitio web estático de la tienda APPORIUM, incluidos las páginas de producto, la integración de pago con PayPal y la página de descarga alojada en Google Drive.

## Características

- **Diseño profesional** – Maquetación limpia y responsiva construida con HTML y CSS.
- **Producto inicial: Planificador digital** – Incluye un planificador de autocuidado para 2026 con calendarios mensuales y espacios para notas.
- **Pago con PayPal** – Botón “Comprar ahora” integrado con PayPal; puedes personalizar fácilmente el campo `business` con tu correo o identificador de PayPal.
- **Entrega automática** – Tras la compra, el cliente es redirigido a una página de descarga con un enlace público de Google Drive.
- **Catálogo escalable** – Estructura preparada para alojar otros productos digitales y aplicaciones con IA.

## Estructura del proyecto

```
/
├── index.html         – Página principal y listado de productos.
├── download.html      – Página de agradecimiento con el enlace de descarga.
├── style.css          – Hoja de estilos del sitio.
├── planner-cover.jpg  – Imagen de portada del planificador.
├── digital_planner_2026.pdf – Archivo PDF del planificador (almacenado en Google Drive).
└── README.md          – Documentación del proyecto (este archivo).
```

## Despliegue

Para desplegar la tienda en [Vercel](https://vercel.com):

1. Crea un nuevo proyecto en tu panel de Vercel e importa este repositorio desde GitHub.
2. Selecciona la configuración predeterminada para un sitio estático (no se requiere paso de build).
3. Una vez desplegado, actualiza los campos `return` y `cancel_return` en `index.html` para que reflejen tu dominio de Vercel (por ejemplo, `https://apporium.vercel.app/download.html`).
4. Haz commit de los cambios y vuelve a desplegar si es necesario.

## Personalización

- **Cambiar información del producto**: edita la sección del producto en `index.html` para modificar el nombre, la descripción, el precio o los campos del botón de PayPal.
- **Añadir más productos**: duplica la sección del producto y ajusta los detalles según corresponda. Cada producto puede tener su propia página de descarga.
- **Actualizar PayPal**: reemplaza el valor del campo oculto `business` con tu correo o ID de comerciante de PayPal.

---

Este proyecto fue generado automáticamente como parte de un flujo de trabajo para lanzar una tienda profesional de productos digitales. No dudes en personalizarlo y ampliarlo para construir un catálogo completo de bienes digitales de alta demanda.