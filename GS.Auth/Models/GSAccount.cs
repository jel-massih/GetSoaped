using Microsoft.AspNetCore.Identity;

namespace GS.Auth.Models
{
    public class GSAccount : IdentityUser
    {
        public string Name { get; set; }
    }
}
