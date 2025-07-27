# Container Commands 📦

---

## 🔍 1. Ver contenedores

### ▶️ Contenedores en ejecución

```bash
docker ps
```

**Descripción:** Muestra una tabla con todos los contenedores **activos** (en ejecución).

Ejemplo de salida:

```
CONTAINER ID   IMAGE       COMMAND        STATUS         PORTS           NAMES
c3f279d17e0a   mi-app      "npm start"    Up 10 seconds  0.0.0.0:3000->3000/tcp  api-backend
```

---

### 📜 Todos los contenedores (incluso detenidos)

```bash
docker ps -a
```

**Descripción:** Lista **todos** los contenedores, estén corriendo o no.

---

## 🚀 2. Crear y ejecutar un contenedor

### Comando base

```bash
docker run nombre-de-imagen
```

**Descripción:** Crea y ejecuta un contenedor desde una imagen.

---

### Ejecutar con nombre personalizado

```bash
docker run --name backend-api mi-app
```

**Descripción:** El contenedor se llamará `backend-api` (en vez de un ID aleatorio).

---

### Ejecutar y exponer puertos

```bash
docker run -p 8080:3000 mi-app
```

**Descripción:** Mapea el puerto **3000 del contenedor** al **8080 del host**.  
Resultado: accedes a la app en `http://localhost:8080`.

---

### Ejecutar en segundo plano (modo daemon)

```bash
docker run -d --name api -p 3000:3000 mi-app
```

**Descripción:** Ejecuta la app en segundo plano, sin ocupar tu terminal.

---

## 🛑 3. Detener, iniciar y reiniciar contenedores

### Detener

```bash
docker stop backend-api
```

### Iniciar (uno que ya fue creado)

```bash
docker start backend-api
```

### Reiniciar

```bash
docker restart backend-api
```

---

## 🧼 4. Eliminar contenedores

### Eliminar uno detenido

```bash
docker rm backend-api
```

### Eliminar varios a la vez

```bash
docker rm cont1 cont2 cont3
```

### Forzar eliminación (aunque esté corriendo)

```bash
docker rm -f backend-api
```

---

## 🧪 5. Ejecutar comandos dentro del contenedor

### Abrir terminal (`bash` o `sh`)

```bash
docker exec -it backend-api bash
```

Si `bash` no existe:

```bash
docker exec -it backend-api sh
```

### Ejecutar un comando puntual

```bash
docker exec backend-api ls /app
```

---

## 📄 6. Ver logs del contenedor

```bash
docker logs backend-api
```

**Descripción:** Muestra la salida estándar de tu app, como `console.log`, errores, etc.

---

## 📂 7. Copiar archivos dentro o fuera del contenedor

### Desde el contenedor al host

```bash
docker cp backend-api:/app/log.txt ./log.txt
```

### Desde el host al contenedor

```bash
docker cp ./archivo.txt backend-api:/app/
```

---

## 🔍 8. Inspeccionar contenedor

```bash
docker inspect backend-api
```

**Descripción:** Muestra JSON detallado con toda la info: red, volúmenes, puertos, rutas, comandos, etc.

### Resumen Ejecutivo

| 🔧 Comando                         | 📝 Descripción                                     | 🧪 Ejemplo                       |
| ---------------------------------- | -------------------------------------------------- | -------------------------------- |
| `docker ps`                        | Lista contenedores en ejecución                    | `docker ps`                      |
| `docker ps -a`                     | Lista todos los contenedores (activos y detenidos) | `docker ps -a`                   |
| `docker run <imagen>`              | Crea y ejecuta un contenedor desde una imagen      | `docker run mi-app`              |
| `docker run -d <img>`              | Ejecuta en segundo plano (modo daemon)             | `docker run -d mi-app`           |
| `docker run --name <nombre> <img>` | Asigna nombre personalizado al contenedor          | `docker run --name api mi-app`   |
| `docker run -p <host>:<cont>`      | Mapea puertos (host → contenedor)                  | `docker run -p 8080:3000 mi-app` |
| `docker stop <nombre>`             | Detiene un contenedor                              | `docker stop api`                |
| `docker start <nombre>`            | Inicia un contenedor detenido                      | `docker start api`               |
| `docker restart <nombre>`          | Reinicia un contenedor                             | `docker restart api`             |
| `docker rm <nombre>`               | Elimina un contenedor detenido                     | `docker rm api`                  |
| `docker rm -f <nombre>`            | Elimina un contenedor forzadamente                 | `docker rm -f api`               |
| `docker exec -it <nombre> bash`    | Abre terminal interactiva en el contenedor         | `docker exec -it api bash`       |
| `docker exec <nombre> <cmd>`       | Ejecuta comando dentro del contenedor              | `docker exec api ls /app`        |
| `docker logs <nombre>`             | Muestra logs del contenedor                        | `docker logs api`                |
| `docker cp <cont>:<ruta> <dest>`   | Copia archivo del contenedor al host               | `docker cp api:/app/log.txt ./`  |
| `docker inspect <nombre>`          | Muestra detalles técnicos (JSON)                   | `docker inspect api`             |
