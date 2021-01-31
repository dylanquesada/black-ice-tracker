using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using bit_api.Data.Entities;

namespace bit_api.Data.EntityTypes
{
    internal class GunTypeConfiguration : IEntityTypeConfiguration<GunModel>
    {
        public void Configure(EntityTypeBuilder<GunModel> builder)
        {

            builder.ToTable("gun", "bit");
            builder.Property(e => e.Id).HasColumnName("id");
            builder.Property(e => e.GunName).HasColumnName("gun_name");

        }
    }
}