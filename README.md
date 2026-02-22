# 🎵 Mellowdyne - E-commerce de Vinilos

Mellowdyne es una plataforma de comercio electrónico dedicada a la venta de discos de vinilo de diversos géneros musicales. Este proyecto fue desarrollado como parte de un aprendizaje profundo en bases de datos relacionales, arquitectura MVC y desarrollo backend con Node.js.

## 🚀 Tecnologías Utilizadas

### Backend
- **Node.js**: Entorno de ejecución para Javascript.
- **Express.js**: Framework para el manejo de rutas y servidor HTTP.
- **Sequelize**: ORM (Object-Relational Mapping) para interactuar con la base de datos de forma programática.
- **Bcryptjs**: Encriptación de contraseñas.
- **Express-session & Cookie-parser**: Manejo de sesiones de usuario y cookies.

### Base de Datos
- **MySQL**: Motor de base de datos relacional original.
- **SQLite**: Implementado para facilitar el desarrollo local y portabilidad.

### Frontend
- **EJS (Embedded JavaScript)**: Motor de plantillas para generar HTML dinámico en el servidor.
- **CSS3**: Diseño responsivo y estilización personalizada.

---

## 🏗️ Arquitectura y Estructura

El proyecto sigue el patrón de diseño **MVC (Modelo-Vista-Controlador)**:

- **src/database/models**: Define la estructura de los datos (Esquemas).
- **src/controllers**: Contiene la lógica de negocio (Qué pasa cuando entras a una ruta).
- **src/routes**: Define las rutas (URLs) de la aplicación.
- **src/views**: Plantillas EJS que se renderizan en el navegador.
- **src/middlewares**: Funciones intermedias para validación, manejo de sesiones y permisos.

---

## 🛠️ Instalación Local

1.  **Clonar el repositorio**:
    ```bash
    git clone [url-del-repo]
    cd grupo_4_exitosos
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar Base de Datos**:
    El proyecto está listo para usar **SQLite** localmente. Solo corre el comando de inicialización:
    ```bash
    node init-db.js
    ```

4.  **Ejecutar en desarrollo**:
    ```bash
    npm run dev
    ```
    Visita: `http://localhost:3001`

---

## 🌟 Características
- Navegación por categorías (Rock, Metal, Pop, etc.).
- Detalle de productos con listado dinámico de canciones.
- Sistema de usuarios (Registro, Login, Sesión persistente).
- Carrito de compras funcional.
- APIs internas para consulta de productos y usuarios.
- Middleware de autenticación y rol de administrador.
