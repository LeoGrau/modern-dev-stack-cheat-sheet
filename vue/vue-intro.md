# Vue Intro

### 🔰 1. Fundamentos del Core de Vue

##### a. Reactividad

**🔹 ¿Qué es?**
Es el sistema que permite que Vue actualice la UI automáticamente cuando los datos cambian.

**🔹 Herramientas clave:**

| API             | Uso                                                    | Ejemplo                                                |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| `ref()`         | Datos primitivos reactivos                             | `const count = ref(0)`                                 |
| `reactive()`    | Objetos reactivos (anidados)                           | `const user = reactive({ name: 'Leo' })`               |
| `computed()`    | Derivados reactivos que cachean                        | `const fullName = computed(() => user.name + ' Grau')` |
| `watch()`       | Ejecuta efectos ante cambios                           | `watch(() => count.value, (newVal) => { ... })`        |
| `watchEffect()` | Corre inmediatamente y reacciona a dependencias usadas | `watchEffect(() => console.log(count.value))`          |

## 1. ref()

**📌 ¿Qué hace?**
Crea una referencia reactiva. Ideal para valores primitivos (números, strings, booleanos...), pero funciona también con objetos.

**Ejemplo:**

```ts
import { ref } from 'vue';

const count = ref(0);
console.log(count.value); // 0

count.value++;
console.log(count.value); // 1
```

**⚠️ Recuerda:**

* Siempre accedes al valor con `.value`.

* Si usas `ref({ ... })`, sus propiedades no son profundamente reactivas (usa reactive en ese caso).

### 2. reactive()

**📌 ¿Qué hace?**

Convierte un objeto completo en reactivo profundo. Es más ergonómico que ref() cuando trabajas con estructuras complejas (objetos o arrays).

**✅ Ejemplo:**

```ts
import { reactive } from 'vue';

const user = reactive({
  name: 'Leo',
  age: 30
});

console.log(user.name); // Leo
user.age++; // Cambia reactivamente
```

⚠️ **Recuerda:**

* No se usa `.value`

* Si asignas un nuevo objeto completo, pierde la reactividad (usa ref() si necesitas reemplazos).

## 3. computed()

**📌 ¿Qué hace?**
Crea un valor derivado de otros datos reactivos, con cacheo inteligente: solo se recalcula si sus dependencias cambian.

**✅ Ejemplo:**

```ts
import { ref, computed } from 'vue';

const firstName = ref('Leo');
const lastName = ref('Grau');

const fullName = computed(() => {
 return `${firstName.value} ${lastName.value}`;
});

console.log(fullName.value); // "Leo Grau"
```

**🧠 Ventajas:**

* Cachea el valor hasta que cambie su dependencia.

* Ideal para formatos, cálculos, filtros.

## 4. watch()

**📌 ¿Qué hace?**
Observa cambios específicos en valores reactivos o funciones y ejecuta un callback.

**✅ Ejemplo:**

```ts
import { ref, watch } from 'vue';

const name = ref('Leo');

watch(name, (newVal, oldVal) => {
 console.log(`Cambió de ${oldVal} a ${newVal}`);
});

name.value = 'Leonardo'; // Dispara el watcher
```

**⚠️ Notas:**

* Útil para ejecutar efectos secundarios (fetch, animaciones, logs...).

* Por defecto no corre al inicio (puedes usar { immediate: true }).

## 5. watchEffect()

**📌 ¿Qué hace?**
Ejecuta automáticamente una función reactiva desde el inicio, y vuelve a ejecutarla cuando cambien las dependencias usadas dentro. incluye: `ref()` ,`reactive()`, `computed()`

**✅ Ejemplo:**

```ts
import { ref, watchEffect } from 'vue';

const count = ref(0);

watchEffect(() => {
 console.log(`Contador: ${count.value}`);
});

count.value++; // Vuelve a ejecutar el efecto
```

**🧠 Cuándo usarlo:**

* Cuando no sabes exactamente qué dependencias usarás.

* Para efectos ligeros o reacciones rápidas.

## b. Ciclo de Vida del Componente

**🔹 Etapas:**

* Setup (Composition API)

* onBeforeMount

* onMounted

* onBeforeUpdate

* onUpdated

* onBeforeUnmount

* onUnmounted

Claro, te explico cada una de esas etapas del **ciclo de vida de un componente Vue 3**, centrándonos en cómo y cuándo se ejecutan, **con ejemplos prácticos**. Esto aplica especialmente si usas **Composition API** (`<script setup>` o `setup()`).

---

## 🔄 Etapas del Ciclo de Vida (Vue 3 - Composition API)

---

### 🔹 1. `setup()`

#### 📌 ¿Qué es?

Es la **primera función que se ejecuta** al crear un componente. Aquí defines lógica reactiva (`ref`, `computed`, `watch`, etc.).

#### ✅ Ejemplo:

```ts
<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>
```

#### 📍 Cuándo se ejecuta:

* Antes de que el componente se monte.
* No hay acceso al DOM todavía.

---

### 🔹 2. `onBeforeMount()`

#### 📌 ¿Qué hace?

Se ejecuta **justo antes** de que el componente se agregue al DOM por primera vez.

#### ✅ Ejemplo:

```ts
onBeforeMount(() => {
  console.log('Componente aún no está en el DOM');
});
```

---

### 🔹 3. `onMounted()`

#### 📌 ¿Qué hace?

Se ejecuta **inmediatamente después** de que el componente se montó en el DOM.

#### ✅ Ejemplo:

```ts
onMounted(() => {
  console.log('¡El componente ya está en el DOM!');
});
```

#### 🧠 Úsalo para:

* Acceder al DOM (`refs`, `scroll`, `focus`, etc.).
* Llamar a APIs (`fetch`, sockets).
* Iniciar animaciones.

---

### 🔹 4. `onBeforeUpdate()`

#### 📌 ¿Qué hace?

Se ejecuta **antes de que el DOM se actualice** debido a un cambio reactivo.

#### ✅ Ejemplo:

```ts
onBeforeUpdate(() => {
  console.log('El DOM está a punto de cambiar');
});
```

---

### 🔹 5. `onUpdated()`

#### 📌 ¿Qué hace?

Se ejecuta **después de que el DOM se haya actualizado** por un cambio de datos.

#### ✅ Ejemplo:

```ts
onUpdated(() => {
  console.log('El DOM se actualizó');
});
```

#### 🧠 Úsalo para:

* Realizar acciones en el DOM después de que cambie.
* Comparar el nuevo estado visual con el anterior.

---

### 🔹 6. `onBeforeUnmount()`

#### 📌 ¿Qué hace?

Se ejecuta **antes de que el componente sea destruido**.

#### ✅ Ejemplo:

```ts
onBeforeUnmount(() => {
  console.log('El componente será destruido pronto');
});
```

---

### 🔹 7. `onUnmounted()`

#### 📌 ¿Qué hace?

Se ejecuta **después** de que el componente fue destruido y removido del DOM.

#### ✅ Ejemplo:

```ts
onUnmounted(() => {
  console.log('El componente fue destruido');
});
```

#### 🧠 Úsalo para:

* Limpiar listeners, timers, sockets.
* Cancelar requests pendientes.

---

## 🧭 Resumen visual:

```txt
[ setup() ]
    ↓
[ onBeforeMount ]
    ↓
[ MONTADO ]
    ↓
[ onMounted ]
    ↓
[ ...actualizaciones reactivas... ]
    ↓
[ onBeforeUpdate ]
    ↓
[ onUpdated ]
    ↓
[ ...más cambios... ]
    ↓
[ onBeforeUnmount ]
    ↓
[ onUnmounted ]
```
