using Microsoft.EntityFrameworkCore;
using bit_api.Data.Entities;
using bit_api.Data.EntityTypes;

namespace bit_api.Data
{
    public class BitDbContext : DbContext
    {
        public BitDbContext(DbContextOptions<BitDbContext> options) : base(options)
        {
        }

        public virtual DbSet<GunModel> Guns { get; set; }
        public virtual DbSet<SkinRecordModel> SkinRecords { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasPostgresExtension("uuid-ossp");

            modelBuilder.ApplyConfiguration(new GunTypeConfiguration());
            modelBuilder.ApplyConfiguration(new SkinRecordTypeConfiguration());
        }
    }
}