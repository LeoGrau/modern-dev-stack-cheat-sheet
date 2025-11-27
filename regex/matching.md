

# Greedy vs Lazy Matching

### **Greedy (codicioso)**

* Los cuantificadores toman **la mayor cantidad posible** de caracteres.

* Cuantificadores greedy:
  
  ```
  *   +   ?   {m,n}
  ```

* Ejemplo:
  
  ```
  a.*b
  ```
  
  Coincide desde `a` hasta el **último** `b` posible.

### **Lazy (perezoso)**

* Los cuantificadores toman **la menor cantidad posible** de caracteres.

* Cuantificadores lazy (se añade `?`):
  
  ```
  *?   +?   ??   {m,n}?
  ```

* Ejemplo:
  
  ```
  a.*?b
  ```
  
  Coincide desde `a` hasta el **primer** `b` posible.

### **Resumen**

| Tipo   | Captura           | Ejemplo | Resultado               |
| ------ | ----------------- | ------- | ----------------------- |
| Greedy | Lo máximo posible | `a.*b`  | Hasta el **último** `b` |
| Lazy   | Lo mínimo posible | `a.*?b` | Hasta el **primer** `b` |
