using Microsoft.EntityFrameworkCore;

namespace GS.Auth
{
    public class GSIdentityDbContextFactory : DesignTimeDbContextFactoryBase<GSIdentityDbContext>
    {
        protected override GSIdentityDbContext CreateNewInstance(DbContextOptions<GSIdentityDbContext> options)
        {
            return new GSIdentityDbContext(options);
        }
    }
}
