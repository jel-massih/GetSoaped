using GS.Auth.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GS.Auth
{
    public class GSIdentityDbContext : IdentityDbContext<GSAccount>
    {
        public GSIdentityDbContext(DbContextOptions<GSIdentityDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole { Name = Constants.Roles.Consumer, NormalizedName = Constants.Roles.Consumer.ToUpper() });
        }
    }
}
