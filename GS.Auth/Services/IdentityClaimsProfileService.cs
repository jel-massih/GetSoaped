using GS.Auth.Constants;
using GS.Auth.Models;
using IdentityModel;
using IdentityServer4;
using IdentityServer4.Extensions;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace GS.Auth.Services
{
    public class IdentityClaimsProfileService : IProfileService
    {
        private readonly IUserClaimsPrincipalFactory<GSAccount> m_ClaimsFactory;
        private readonly UserManager<GSAccount> m_UserManager;

        public IdentityClaimsProfileService(UserManager<GSAccount> userManager, IUserClaimsPrincipalFactory<GSAccount> claimsFactory)
        {
            m_UserManager = userManager;
            m_ClaimsFactory = claimsFactory;
        }

        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var sub = context.Subject.GetSubjectId();
            var user = await m_UserManager.FindByIdAsync(sub);
            var principal = await m_ClaimsFactory.CreateAsync(user);

            var claims = principal.Claims.ToList();
            claims = claims.Where(claim => context.RequestedClaimTypes.Contains(claim.Type)).ToList();
            claims.Add(new Claim(JwtClaimTypes.GivenName, user.Name));
            claims.Add(new Claim(IdentityServerConstants.StandardScopes.Email, user.Email));
            claims.Add(new Claim(ClaimTypes.Role, Roles.Consumer));

            context.IssuedClaims = claims;
        }

        public async Task IsActiveAsync(IsActiveContext context)
        {
            var sub = context.Subject.GetSubjectId();
            var user = await m_UserManager.FindByIdAsync(sub);
            context.IsActive = user != null;
        }
    }
}
