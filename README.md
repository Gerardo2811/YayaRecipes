
# YayaRecipes Project

Este proyecto consta de dos partes principales:

1. **Frontend**: Desarrollado con **Next.js** y **Tailwind CSS**, incluye un sistema de autenticación y páginas dinámicas para recetas.
2. **Backend**: Desarrollado con **NestJS** y utilizando **Prisma** como ORM para interactuar con la base de datos.

## Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Comandos Útiles](#comandos-útiles)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)

## Estructura del Proyecto

```
├── backend/              # Carpeta del backend
│   ├── src/              # Código fuente del backend
│   └── package.json      # Dependencias y scripts del backend
├── frontend/             # Carpeta del frontend
│   ├── src/              # Código fuente del frontend
│   └── package.json      # Dependencias y scripts del frontend
└── README.md             # Este archivo
```

## Requisitos

- **Node.js** versión 18.x.x o superior
- **npm** o **yarn** instalado globalmente

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/yayarecipes.git
cd yayarecipes
```

### Instalar dependencias del frontend y backend

Para instalar las dependencias del frontend:

```bash
cd frontend
npm install
```

Para instalar las dependencias del backend:

```bash
cd ../backend
npm install
```

## Scripts Disponibles

### Frontend

- `npm run dev`: Inicia el servidor de desarrollo de Next.js en el puerto 4000.
- `npm run build`: Compila el proyecto de frontend para producción.
- `npm run start`: Inicia el servidor en modo producción.
- `npm run lint`: Ejecuta el linter de código.

### Backend

- `npm run start:dev`: Inicia el servidor de desarrollo de NestJS con hot reload.
- `npm run build`: Compila el proyecto del backend.
- `npm run start`: Inicia el servidor en modo producción.
- `npm run test`: Ejecuta las pruebas unitarias.
- `npm run test:e2e`: Ejecuta las pruebas de extremo a extremo (E2E).
- `npm run lint`: Ejecuta el linter de código y corrige los errores que pueda.
- `npm run format`: Formatea el código utilizando Prettier.

## Comandos Útiles

### Frontend

- `npm run dev`: Para iniciar el servidor de desarrollo del frontend en [http://localhost:4000](http://localhost:4000).

### Backend

- `npm run start:dev`: Para iniciar el servidor de desarrollo del backend.
- `npm run prisma:generate`: Genera el cliente de Prisma para interactuar con la base de datos.
- `npm run prisma:migrate`: Ejecuta las migraciones de la base de datos.

## Tecnologías Usadas

### Frontend

- **Next.js**: Framework para aplicaciones React con renderizado del lado del servidor.
- **Tailwind CSS**: Framework de utilidades CSS para el diseño.
- **Formik**: Manejo de formularios en React.
- **Chakra UI**: Biblioteca de componentes para React.
- **Yup**: Validación de esquemas para formularios.
- **React Icons**: Biblioteca de iconos para React.

### Backend

- **NestJS**: Framework para aplicaciones backend construidas con Node.js.
- **Prisma**: ORM para manejar la base de datos.
- **Jest**: Framework de pruebas para JavaScript.
- **TypeScript**: Lenguaje de programación tipado que compila a JavaScript.

## Configuración de Variables de Entorno

### Frontend

Para el frontend, las variables de entorno se definen en un archivo `.env.local` en la carpeta `frontend`. Aquí se podrían definir valores como las claves de API, la URL del backend, etc.

### Backend

En el backend, las variables de entorno como la configuración de la base de datos se definen en el archivo `.env`. Un ejemplo de estas variables podría ser:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_bd"
```

Asegúrate de configurar correctamente estas variables antes de ejecutar el backend.
