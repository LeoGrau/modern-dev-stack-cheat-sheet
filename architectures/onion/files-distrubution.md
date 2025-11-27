# Files Distribution

### 1. MyApp.Domain — Dominio (núcleo)

```bash
MyApp.Domain/
├── MyApp.Domain.csproj
├── Entities/
│   ├── Product.cs
│   └── User.cs
├── ValueObjects/
│   ├── Money.cs
│   └── Email.cs
├── Aggregates/
│   └── OrderAggregate.cs
├── Interfaces/                 // *abstracciones* que implementará Infrastructure
│   ├── IRepository.cs
│   └── IProductRepository.cs
├── Exceptions/
│   └── BusinessException.cs
├── Events/
│   └── ProductPriceChangedEvent.cs
└── DTOs/                       // opcional: DTOs del dominio, si usas
    └── ProductDto.cs
```

### 2. MyApp.Infrastructure

```bash

```
