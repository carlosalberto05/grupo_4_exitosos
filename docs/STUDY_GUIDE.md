# 🧠 Guía de Estudio y Arquitectura: Mellowdyne

Si vienes del mundo de React y el Frontend, el Backend puede parecer una caja negra. Aquí tienes el mapa mental de cómo funciona este proyecto para que refresques la memoria.

## 1. El Ciclo de una Petición (Request/Response)
Cuando un usuario entra a `http://localhost:3001/products/detail/1`, sucede lo siguiente:

1.  **Ruta (`src/routes/productsRoutes.js`)**: Express recibe la URL y busca quién debe manejarla.
    *   *Concepto clave*: Aquí se asocian las URLs con funciones del controlador.
2.  **Middleware (`src/middlewares/`)**: Antes de llegar al controlador, el "portero" revisa si el usuario está logueado o si tiene permisos.
3.  **Controlador (`src/controllers/productsController.js`)**: Es el cerebro. Dice: "Necesito los datos del disco con ID 1".
4.  **Modelo (`src/database/models/Album.js`)**: El controlador le pide al modelo (vía Sequelize) los datos a la base de datos.
5.  **Vista (`src/views/detail.ejs`)**: El controlador recibe los datos, los "inyecta" en el archivo EJS y envía el HTML final al navegador.

---

## 2. Los Pilares del Backend en este Proyecto

### 🧬 Sequelize (La conexión con la DB)
En lugar de escribir SQL puro (`SELECT * FROM...`), usamos este ORM.
- **Relaciones**: En `src/database/models/`, verás `associate`. Ahí definimos que un `Album` tiene muchas `Songs` y pertenece a un `Artist`. Esto permite hacer un `findAll({ include: ['songs'] })` y traer todo de una vez.

### 🔐 Autenticación y Sesión
- **Express-Session**: Los datos del usuario se guardan en el *servidor*.
- **Cookies**: Guardamos un pequeño identificador en el *navegador* para recordar al usuario (ej: `userEmail`).
- **userLoggedMiddleware**: Este es vital. En cada clic que da el usuario, este middleware revisa si hay alguien en sesión para mostrar "Mi Perfil" en lugar de "Login" en el Navbar (`res.locals`).

---

## 3. Hoja de Ruta para Recordar (Plan de Estudio)

### Día 1: La Estructura y el Servidor
- Abre `src/app.js`. Mira cómo se configuran los middlewares generales (`app.use`).
- Entiende cómo se conectan las rutas principales.

### Día 2: Las Vistas Dinámicas (EJS)
- Abre `src/views/index.ejs`.
- Observa los "partials" (header, footer). Se usan para no repetir código.
- Identifica los bucles `<% topDiscs.forEach(...) %>`. Así es como React haría un `.map()`.

### Día 3: Lógica de Controladores y DB
- Abre `src/controllers/mainController.js`.
- Mira cómo se usa `Promise.all` para traer varias categorías de discos al mismo tiempo.
- Compara cómo Sequelize reemplaza las consultas manuales.

### Día 4: CRUD (Create, Read, Update, Delete)
- Mira el `productsController.js`.
- Entiende cómo funciona la subida de imágenes con **Multer**.
- Mira cómo se validan los datos de los formularios usando **Express-Validator**.

---

## 4. Conceptos "Old School" vs Modernos
- **EJS vs React**: En React, el navegador construye el HTML. En EJS, el servidor construye el HTML y lo envía listo. Por eso no ves un `index.html` lleno de divs vacíos.
- **Rutas**: En React usas `react-router-dom` (lado cliente). Aquí usas el router de Express (lado servidor).
- **Estado**: En lugar de `useState`, aquí usamos la **Sesión** o la **Base de Datos** para mantener la información.
