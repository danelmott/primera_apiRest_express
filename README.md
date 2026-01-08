# 🚀 Primera API REST con Express

API REST básica construida con Express.js para gestión de usuarios. Este proyecto implementa operaciones CRUD completas con validaciones y manejo de errores.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Endpoints](#-endpoints)
- [Ejemplos de Uso](#-ejemplos-de-uso)
- [Evaluación del Proyecto](#-evaluación-del-proyecto)
- [Mejoras Futuras](#-mejoras-futuras)

## ✨ Características

- ✅ CRUD completo (Create, Read, Update, Delete)
- ✅ Validación de datos de entrada
- ✅ Manejo de errores robusto
- ✅ Códigos de estado HTTP apropiados
- ✅ Middleware personalizado para métodos no permitidos
- ✅ Middleware para rutas no encontradas (404)
- ✅ Arquitectura modular y escalable

## 🛠 Tecnologías

- **Node.js** - Entorno de ejecución
- **Express.js** v5.2.1 - Framework web
- **dotenv** - Gestión de variables de entorno
- **nodemon** - Recarga automática en desarrollo

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (viene con Node.js)

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/danelmott/primera_apiRest_express.git
cd primera_apiRest_express
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` en la raíz del proyecto:
```env
PORT=3000
```

4. Iniciar el servidor:
```bash
npm start
```

El servidor estará corriendo en `http://localhost:3000`

## 🎯 Uso

### Modo Desarrollo
```bash
npm start
```
Utiliza nodemon para recarga automática al detectar cambios en el código.

## 📍 Endpoints

### Base URL
```
http://localhost:3000/users
```

### Operaciones Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/users` | Obtener todos los usuarios |
| GET | `/users/:id` | Obtener un usuario por ID |
| POST | `/users` | Crear un nuevo usuario |
| PUT | `/users/:id` | Actualizar un usuario existente |
| DELETE | `/users/:id` | Eliminar un usuario |

## 💡 Ejemplos de Uso

### 1. Obtener todos los usuarios

**Request:**
```bash
curl http://localhost:3000/users
```

**Response:** `200 OK`
```json
{
  "usuarios": [
    {"id": 1, "nombre": "danel", "edad": 17},
    {"id": 2, "nombre": "samuel", "edad": 15}
  ]
}
```

### 2. Obtener un usuario por ID

**Request:**
```bash
curl http://localhost:3000/users/1
```

**Response:** `200 OK`
```json
{
  "user": {
    "id": 1,
    "nombre": "danel",
    "edad": 17
  }
}
```

**Error Response:** `404 Not Found`
```json
{
  "message": "no se ha encontrado ningun usuario con id 999"
}
```

### 3. Crear un nuevo usuario

**Request:**
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "id": 11,
    "nombre": "Carlos",
    "edad": 25
  }'
```

**Response:** `201 Created`
```json
{
  "message": "usuario creado correctamente",
  "user": {
    "id": 11,
    "nombre": "Carlos",
    "edad": 25
  }
}
```

**Error Response:** `400 Bad Request`
```json
{
  "message": "body invalido, asegurate que tu body contenga id nombre y edad validos"
}
```

**Error Response:** `409 Conflict`
```json
{
  "message": "ya existe un usuario con el id que intentas registrar, intenta nuevamente"
}
```

### 4. Actualizar un usuario

**Request:**
```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Daniel",
    "edad": 18
  }'
```

**Response:** `200 OK`
```json
{
  "message": "Usuario actualizado",
  "user": {
    "id": 1,
    "nombre": "Daniel",
    "edad": 18
  }
}
```

**Error Response:** `404 Not Found`
```json
{
  "message": "no se ha encontrado ningun usuario con el id puesto, intentalo de nuevo"
}
```

### 5. Eliminar un usuario

**Request:**
```bash
curl -X DELETE http://localhost:3000/users/1
```

**Response:** `200 OK`
```json
{
  "message": "usuario eliminado correctamente"
}
```

**Error Response:** `404 Not Found`
```json
{
  "message": "usuario no encontrado"
}
```

### 6. Método no permitido

**Request:**
```bash
curl -X PATCH http://localhost:3000/users/1
```

**Response:** `405 Method Not Allowed`
```json
{
  "status": 405,
  "error": "method not allowed",
  "path": "/users/1",
  "method": "PATCH",
  "allowedMethods": ["GET", "PUT", "DELETE"]
}
```

### 7. Ruta no encontrada

**Request:**
```bash
curl http://localhost:3000/ruta-invalida
```

**Response:** `404 Not Found`
```json
{
  "message": "la ruta no existe"
}
```

## 📊 Evaluación del Proyecto

Para ver una evaluación detallada del proyecto, consulta el archivo [EVALUACION_API.md](./EVALUACION_API.md).

**Puntuación General:** 7.5/10

### Resumen de Evaluación:
- ✅ Arquitectura bien estructurada
- ✅ CRUD completo funcional
- ✅ Buen manejo de errores
- ⚠️ Mejorar validación de datos
- ⚠️ Implementar base de datos real
- ⚠️ Agregar tests
- ⚠️ Mejorar seguridad

## 🔮 Mejoras Futuras

### Prioridad Alta
- [ ] Implementar base de datos real (MongoDB/PostgreSQL)
- [ ] Agregar validación robusta con `express-validator`
- [ ] Implementar tests (Jest + Supertest)
- [ ] Agregar seguridad con `helmet`
- [ ] Implementar rate limiting

### Prioridad Media
- [ ] Agregar autenticación JWT
- [ ] Implementar paginación en GET /users
- [ ] Agregar filtrado y búsqueda
- [ ] Configurar CORS
- [ ] Implementar logging (Morgan/Winston)

### Prioridad Baja
- [ ] Documentación con Swagger/OpenAPI
- [ ] Implementar roles y permisos
- [ ] Agregar caché
- [ ] Configurar CI/CD
- [ ] Dockerizar la aplicación

## 📁 Estructura del Proyecto

```
primera_apiRest_express/
├── src/
│   ├── controllers/          # Controladores de lógica de negocio
│   │   ├── getAllController.js
│   │   ├── getUserController.js
│   │   ├── createUserController.js
│   │   ├── putUserController.js
│   │   └── deleteUserController.js
│   ├── middlewares/          # Middlewares personalizados
│   │   ├── methodError.js
│   │   └── notFound.js
│   ├── routes/               # Definición de rutas
│   │   └── usuarios.js
│   ├── db.js                 # Base de datos en memoria
│   └── server.js             # Punto de entrada de la aplicación
├── .env                      # Variables de entorno (no incluido en git)
├── .gitignore
├── package.json
├── EVALUACION_API.md         # Evaluación detallada del proyecto
└── README.md                 # Este archivo
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

ISC License - ver el archivo `package.json` para más detalles.

## 👤 Autor

**danel_mott**

## 🙏 Agradecimientos

- Express.js por el excelente framework
- La comunidad de Node.js por los recursos y documentación

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
