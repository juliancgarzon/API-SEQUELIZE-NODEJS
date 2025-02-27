# API REST con Node.js, Express, Sequelize y PostgreSQL

## 📌 Descripción
Este proyecto es una API REST desarrollada con **Node.js**, **Express**, **Sequelize** y **PostgreSQL**. Permite la gestión de clientes y pedidos mediante operaciones CRUD.

## 🏗️ Tecnologías Utilizadas
- **Node.js** - Entorno de ejecución de JavaScript.
- **Express.js** - Framework para la creación de APIs.
- **Sequelize** - ORM para interactuar con PostgreSQL.
- **PostgreSQL** - Base de datos relacional.
- **Docker** - Para la contenedorización de la aplicación.
- **Render** - Plataforma para el despliegue en la nube.

## 🚀 Instalación y Ejecución Local

### 1️⃣ Clonar el Repositorio
```sh
git clone https://github.com/TU_USUARIO/juliancgarzon-api-sequelize-nodejs.git
cd juliancgarzon-api-sequelize-nodejs
```

### 2️⃣ Instalar Dependencias
```sh
npm install
```

### 3️⃣ Configurar Variables de Entorno
Crea un archivo **.env** en la raíz del proyecto y agrega:
```ini
DB_NAME=tubasededatos
DB_USER=tuusuario
DB_PASSWORD=tucontraseña
DB_HOST=localhost
DB_PORT=5432
DATABASE_URL=tuurldelabasededatos
```

### 4️⃣ Ejecutar la Aplicación
Para desarrollo:
```sh
npm run dev
```
Para producción:
```sh
npm start
```

## 🐳 Uso con Docker
Si quieres ejecutar la aplicación con Docker, usa:
```sh
docker-compose up --build
```
Esto lanzará PostgreSQL y la API en contenedores Docker.

## 🌍 Despliegue en Render
Esta API está desplegada en Render y se puede acceder en:
```
https://api-sequelize-nodejs.onrender.com
```

## 📡 Endpoints Disponibles
### 📋 Clientes
- **GET** `/clientes` - Obtener todos los clientes.
- **GET** `/clientes/:id` - Obtener un cliente por ID.
- **POST** `/clientes` - Crear un nuevo cliente.
- **PUT** `/clientes/:id` - Actualizar un cliente.
- **DELETE** `/clientes/:id` - Eliminar un cliente.
- **GET** `/clientes/:id/pedidos` - Obtener pedidos de un cliente.

### 📋 Pedidos
- **GET** `/pedidos` - Obtener todos los pedidos.
- **GET** `/pedidos/:id_pedido` - Obtener un pedido por ID.
- **POST** `/pedidos` - Crear un nuevo pedido.
- **PUT** `/pedidos/:id_pedido` - Actualizar un pedido.
- **DELETE** `/pedidos/:id_pedido` - Eliminar un pedido.

## 🛠 Autores
- **Julián C. Garzón** - Desarrollador del proyecto.

## 📄 Licencia
Este proyecto está bajo la licencia MIT.

