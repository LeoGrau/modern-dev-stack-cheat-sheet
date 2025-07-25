# Docker Intro 🚀

### Que %#@$ es docker?

Docker es una herramienta que te permite empaquetar una aplicación (código + dependencias + sistema operativo mínimo) en una imagen, y luego ejecutar esa imagen como un contenedor.

---

### 🧱 ¿Por qué usar Docker?

1. "Funciona en mi máquina" también funcionará en producción.

2. Aíslas tu app de tu sistema operativo.

3. Puedes desplegar o compartir tu app con un solo comando.

### Lista de Comandos 🖥️

| Comando               | Qué hace                                           |
| --------------------- | -------------------------------------------------- |
| `docker images`       | Lista las imágenes descargadas                     |
| `docker ps`           | Lista contenedores en ejecución                    |
| `docker ps -a`        | Lista todos los contenedores (activos o detenidos) |
| `docker stop <id>`    | Detiene un contenedor                              |
| `docker rm <id>`      | Elimina un contenedor                              |
| `docker rmi <imagen>` | Elimina una imagen                                 |

---

### 🧱 Imagen (image)

📦 Es un paquete inmutable que contiene:

* Tu app
  
  * Las dependencias
  
  * El sistema operativo mínimo necesario❌ No se ejecuta por sí sola

*    *🛠️ Se construye a partir de un Dockerfile

🔁 Puedes crear muchos contenedores desde una sola imagen.

### 📦 Contenedor (container)

🚀 Es una instancia en ejecución de una imagen.

🧠 Es como un proceso aislado que corre tu app.

💾 Puede tener cambios en tiempo de ejecución, pero se pierden al eliminarlo (salvo que uses volúmenes).

### Dockerfile 📃

🧾 Es un archivo de texto que contiene instrucciones para construir una imagen.

Ejemplo:

```dockerfile
FROM node:20
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node", "index.js"]
```

### 📚 Volumen (volume)

* 🗂️ Es un espacio de almacenamiento persistente fuera del contenedor.

* 🔁 Se usa para guardar datos aunque el contenedor se destruya.

* Ejemplo: bases de datos, logs, uploads, etc.

### 🌐 Red (network)

* 🕸️ Docker crea su propia red virtual para que los contenedores se comuniquen entre ellos (como backend y frontend).

* Puedes exponer puertos hacia fuera (-p 3000:3000).

### Resumen Ejecutivo

| Concepto   | Analogía                                      |
| ---------- | --------------------------------------------- |
| Imagen     | Archivo ISO o receta de cocina                |
| Contenedor | Máquina virtual en ejecución / comida servida |
| Dockerfile | Receta escrita                                |
| Volumen    | Disco duro externo                            |
| Red        | WiFi entre tus contenedores                   |
