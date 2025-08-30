# Vue Project 🟢

##### ✅ Estructura de Proyecto Profesional Vue 3 + Vite

```textile
src/
├── assets/             # Imágenes, fuentes, íconos, estilos globales
├── components/         # Componentes globales reutilizables (botones, modales, etc.)
├── composables/        # Composables (Composition API): lógica reutilizable como useAuth, useForm, etc.
├── features/           # Módulos por dominio (user/, products/, auth/ con sus componentes, store y API)
│   └── user/
│       ├── components/
│       ├── store/
│       ├── api/
│       └── views/
├── layouts/            # Layouts globales (DefaultLayout, AuthLayout, etc.)
├── pages/              # Páginas enrutadas automáticamente (si usas vite-plugin-pages o Nuxt)
├── router/             # Configuración del enrutador Vue Router
├── store/              # Stores globales de Pinia (si no usas por features)
├── types/              # Definiciones globales de TypeScript
├── utils/              # Funciones utilitarias puras (formato de fechas, validadores, etc.)
├── directives/         # Directivas personalizadas (v-tooltip, v-autofocus)
├── plugins/            # Plugins de Vue (axios, i18n, dayjs, etc.)
├── i18n/               # Archivos de internacionalización (opcional)
├── App.vue             # Root component
└── main.ts             # Punto de entrada de la app

```


