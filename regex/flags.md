# Flags en Regex

Los **flags** modifican cómo se interpreta la expresión regular.

### **Flag `i` — Case-insensitive**

Ignora mayúsculas y minúsculas.
Ejemplo:

```
/hola/i
```

Coincide con `Hola`, `HOLA`, `hOlA`, etc.

### **Flag `g` — Global**

Busca **todas** las coincidencias en el texto.
Ejemplo:

```
/a/g
```

### **Flag `m` — Multiline**

Hace que:

* `^` coincida con **inicio de cada línea**
* `$` coincida con **fin de cada línea**

Ejemplo:

```
/^\d+/m
```

### **Flag `s` — DotAll**

Permite que `.` coincida también con saltos de línea (`\n`).
Ejemplo:

```
/a.b/s
```

### **Flag `u` — Unicode**

Activa manejo completo de Unicode (acentos, emojis, etc.).
Ejemplo:

```
/\p{L}+/u
```

### **Resumen de Flags**

| Flag | Nombre           | Efecto                                |
| ---- | ---------------- | ------------------------------------- |
| `i`  | Case-insensitive | Ignora mayúsculas/minúsculas          |
| `g`  | Global           | Encuentra **todas** las coincidencias |
| `m`  | Multiline        | `^` y `$` funcionan por línea         |
| `s`  | DotAll           | `.` incluye saltos de línea           |
| `u`  | Unicode          | Habilita propiedades Unicode          |


