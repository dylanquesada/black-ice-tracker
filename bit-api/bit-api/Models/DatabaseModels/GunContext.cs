using Microsoft.EntityFrameworkCore;

namespace bit_api.DBModels
{
    public class GunContext : DbContext
    {
        public GunContext(DbContextOptions<GunContext> options) : base(options)
        {
        }

        public DbSet<Gun> Guns { get; set; }
    }
}