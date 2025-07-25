# Image Commands 💿

#### 🔍 Ver imágenes locales

```bash
docker images
```

* Muestra todas las imágenes descargadas o creadas localmente.

#### 🏗️ Construir una imagen desde un Dockerfile

```bash
docker build -t nombre-de-la-imagen .
```

* -t: le da nombre (y opcionalmente versión/tag: nombre:tag)

* .: ruta donde está el Dockerfile (generalmente el directorio actual)

Ejemplo:

```bash
docker build -t mi-app:v1
```

#### 🔼 Subir imagen a Docker Hub

```bash
docker tag mi-app:v1 usuario_dockerhub/mi-app:v1
docker push usuario_dockerhub/mi-app:v1
```

#### 🔽 Descargar imagen (desde Docker Hub u otro registro)

```bash
docker pull nombre-imagen
```

Ejemplo:

```bash
docker pull node:20
```

#### 🗑️ Eliminar una imagen

```bash
docker rmi nombre-imagen
```

Ejemplo: Hasta puede ir un tag.

```bash
docker rmi mi-app:v1
```

#### 🔍 Ver el historial de capas de una imagen

```bash
docker history nombre-imagen
```

**🧱 ¿Qué significa el "historial de capas" de una imagen en Docker?**

Cuando creas una imagen con un `Dockerfile`, **cada instrucción (`FROM`, `COPY`, `RUN`, etc.) genera una *capa***. Estas capas se apilan una sobre otra, formando una imagen.

**📜 Ver el historial**

```bash
docker history <nombre-imagen>
```

**🔍 Muestra cada capa con información como:**

- Comando que la creó (ej. `RUN apt-get install`)

- Tamaño de esa capa

- Fecha de creación

- Autor (si aplica)

**🔍 Ejemplo**

```bash
docker history mi-app
```

**Salida típica:**

```bash
IMAGE          CREATED        CREATED BY                                      SIZE
<id>           2 minutes ago  RUN npm install                                 75MB
<id>           2 minutes ago  COPY . .                                        500kB
<id>           2 minutes ago  WORKDIR /app                                    0B
<id>           2 minutes ago  FROM node:20                                    200MB
```

##### 🧠 ¿Para qué sirve?

- 📦 Entender cuánto pesa cada instrucción de tu `Dockerfile`

- ⚙️ Optimizar el tamaño de tu imagen (ej. combinando `RUN`)

- 🔍 Auditar cambios en la construcción

#### 🔧 Ver detalles de una imagen

```bash
docker inspect nombre-imagen
```

#### 🧪 Probar una imagen sin crear contenedor persistente

```bash
docker run --rm nombre-imagen
```

#### ✅ Pro tip: Etiquetado (tags)

```bash
docker build -t mi-app:dev .
docker build -t mi-app:prod .
```

#### Resumen Ejecutivo

| 🧩 Comando                                     | 💡 Descripción                                     |
| ---------------------------------------------- | -------------------------------------------------- |
| `docker images`                                | Lista todas las imágenes locales                   |
| `docker build -t <nombre>:<tag> .`             | Construye una imagen desde un `Dockerfile`         |
| `docker pull <imagen>`                         | Descarga una imagen desde Docker Hub               |
| `docker push <usuario>/<imagen>:<tag>`         | Sube una imagen al registro remoto                 |
| `docker tag <imagen> <usuario>/<imagen>:<tag>` | Asigna un nuevo tag a una imagen                   |
| `docker rmi <imagen>`                          | Elimina una imagen local                           |
| `docker inspect <imagen>`                      | Muestra los detalles (metadatos) de la imagen      |
| `docker history <imagen>`                      | Muestra el historial de capas de la imagen         |
| `docker run --rm <imagen>`                     | Ejecuta la imagen y elimina el contenedor al salir |


