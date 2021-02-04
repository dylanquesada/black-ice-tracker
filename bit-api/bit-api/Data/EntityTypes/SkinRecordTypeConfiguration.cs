using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using bit_api.Data.Entities;

namespace bit_api.Data.EntityTypes
{
    internal class SkinRecordTypeConfiguration : IEntityTypeConfiguration<SkinRecordModel>
    {
        public void Configure(EntityTypeBuilder<SkinRecordModel> builder)
        {

            builder.ToTable("skin_status", "bit");
            builder.Property(e => e.Id).HasColumnName("id");
            builder.Property(e => e.GameProfileId).HasColumnName("game_profile_id");
            builder.Property(e => e.GunId).HasColumnName("gun_id");
            builder.Property(e => e.StatusCode).HasColumnName("status");

        }
    }
}