Sin constructor, own properties y hacer seeding correctamente.
Clase:

```cs
public class Product: Entity
{
    public string Name { get; set; }
    public string Description { get; set; }
    public Price? PricePen { get; set; }
    public Price? PriceUsd { get; set; }
}
```

Seed

```cs
using Bogus;
using Inventory.Domain.Entities;
using Inventory.Domain.ValueObject;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Inventory.Infrastructure.Configuration;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    private Faker<Product> _faker = new Faker<Product>();

    private void ConfigureFaker()
    {
        _faker = new Faker<Product>().CustomInstantiator(faker => new Product
        {
            Id = faker.IndexFaker + 1,
            Name = faker.Commerce.ProductName(), Description = faker.Commerce.ProductDescription(),
            PricePen = Price.Create(faker.Random.Decimal(0, 1000000), Currency.PEN),
            PriceUsd = Price.Create(faker.Random.Decimal(0, 1000000), Currency.USD)
        });
    }

    private IList<Product> GenerateData()
    {
        ConfigureFaker();
        return _faker.UseSeed(7653).Generate(100);
    }

    public void Configure(EntityTypeBuilder<Product> builder)
    {
        ConfigureFaker();
        var products = GenerateData();

        builder.ToTable("products");
        builder.HasKey(p => p.Id);
        builder.Property(p => p.Id);
        builder.Property(p => p.Name);
        builder.Property(p => p.Description);

        builder.HasData(products.Select(p => new { p.Id, p.Name, p.Description }));

        // Owned Types
        builder.OwnsOne(p => p.PricePen, ownBuilder =>
        {
            ownBuilder.Ignore(pr => pr.Currency);
            ownBuilder.Property(pr => pr.Amount).HasColumnName("PricePenAmount").HasPrecision(18, 2)
                .ValueGeneratedNever();
            ownBuilder.HasData(products.Select(p => new { ProductId = p.Id, Amount = p.PricePen!.Amount }));
        });

        // Owned Types
        builder.OwnsOne(p => p.PriceUsd, ownBuilder =>
        {
            ownBuilder.Ignore(pr => pr.Currency);
            ownBuilder.Property(pr => pr.Amount).HasColumnName("PriceUsdAmount").HasPrecision(18, 2)
                .ValueGeneratedNever();
            ownBuilder.HasData(products.Select(p => new { ProductId = p.Id, Amount = p.PriceUsd!.Amount }));
        });
    }
}
```
