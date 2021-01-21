using Microsoft.EntityFrameworkCore;

namespace bit_api.DBModels
{
    public class GunContext : DbContext
    {
        public GunContext(DbContextOptions<GunContext> options) : base(options)
        {
        }

        public virtual DbSet<Gun> Guns { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("bit");
            modelBuilder.Entity<Gun>(entity =>
            {
                entity.ToTable("gun");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.gunName).HasColumnName("gun_name");
            });
        }
    }
}