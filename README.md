Gestión de Cursos - Aplicación Full-Stack
Este proyecto es una aplicación full-stack para la gestión de cursos, desarrollada con React en el frontend y Spring Boot en el backend. Permite crear, leer, actualizar y eliminar cursos, almacenando los datos en una base de datos MySQL.

Tecnologías Utilizadas
Frontend
React + Vite
Bootstrap

Backend
Java + Spring Boot
MySQL
Spring Data JPA
Lombok

Arquitectura
La aplicación sigue un modelo cliente-servidor, donde el frontend se comunica con el backend a través de una API REST.

El backend maneja la lógica de negocio y la persistencia de datos.
El frontend proporciona una interfaz para que los usuarios interactúen con la aplicación.
Funcionalidades
📌 Visualización de una lista de cursos con detalles como nombre, descripción, duración, precio, fecha de inicio y docente.
🔍 Búsqueda de cursos por nombre.
➕ Creación de nuevos cursos.
✏️ Edición de información de un curso existente.
🗑️ Eliminación de cursos.
Estructura del Proyecto
📂 frontend/ → Código del frontend con React.
📂 backend/ → Código del backend con Java y Spring Boot.

Cómo Ejecutar el Proyecto
1️⃣ Requisitos Previos
Frontend: Node.js y npm (o yarn)
Backend: Java JDK y Maven
Base de Datos: MySQL

2️⃣ Configurar el Backend
Ir al directorio backend.
Configurar la conexión a MySQL en src/main/resources/application.properties

3️⃣ Ejecutar el Backend
cd backend
mvn clean install
mvn spring-boot:run

4️⃣ Configurar el Frontend
Ir al directorio frontend.
Instalar las dependencias:
npm install  # o yarn install

5️⃣ Ejecutar el Frontend
npm run dev  # o yarn dev

6️⃣ Acceder a la Aplicación
Abrir el navegador en la URL indicada por Vite.
El frontend se comunica con el backend en http://localhost:8080/api. Si el backend usa otro puerto, actualizar la URL en el frontend.

Consideraciones
✅ Asegurar que el backend esté en ejecución antes de iniciar el frontend.
✅ Verificar la conexión con MySQL antes de ejecutar la API.