## 1️⃣ Tipos de datos principales

| Tipo               | Descripción               | Ejemplo                               |
| ------------------ | ------------------------- | ------------------------------------- |
| `uint` / `uint256` | Entero sin signo (≥0)     | `uint256 x = 10;`                     |
| `int` / `int256`   | Entero con signo          | `int256 y = -5;`                      |
| `bool`             | Verdadero o falso         | `bool activo = true;`                 |
| `address`          | Dirección de Ethereum     | `address owner = 0x123...;`           |
| `bytes` / `string` | Datos binarios o texto    | `string name = "Alice";`              |
| `mapping`          | Diccionario clave → valor | `mapping(uint => uint) public store;` |
| `array`            | Lista de elementos        | `uint[] public numeros;`              |
## Funciones

- public → accesible desde cualquier cuenta y otros contratos.
- private → solo dentro del contrato actual.
- internal → dentro del contrato y contratos que hereden.
- external → solo accesible desde fuera del contrato.

# Mappings y arrays
