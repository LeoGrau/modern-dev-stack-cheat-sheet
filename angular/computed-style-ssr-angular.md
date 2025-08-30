## 🔍 Uso seguro de `getComputedStyle` en Angular (Evitar errores en SSR)

Este bloque de código permite acceder a los estilos CSS computados del documento **solo cuando la aplicación se ejecuta en el navegador**, evitando errores en entornos de servidor (como Angular Universal).

### ✅ Propósito:

Acceder a estilos CSS desde TypeScript sin romper la aplicación en Server-Side Rendering (SSR).

### 🧠 Código explicado:

```ts
let documentStyle: CSSStyleDeclaration | undefined;

if (isPlatformBrowser(this.platformId)) {
  documentStyle = getComputedStyle(this.document.documentElement);
}
```

En SSR, el objeto `document` **no existe**, por lo que cualquier intento de usarlo directamente lanzaría un error. Este patrón asegura que el código solo se ejecute cuando realmente haya un DOM (en el navegador).

Para esto, aun necesitas.

```ts
 document = inject(DOCUMENT);
```


