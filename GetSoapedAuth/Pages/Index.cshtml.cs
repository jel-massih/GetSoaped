using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace GetSoapedAuth
{
    public class IndexModel : PageModel
    {
        private readonly IWebHostEnvironment m_Environment;
        private readonly ILogger<IndexModel> m_Logger;

        public IndexModel(IWebHostEnvironment environment, ILogger<IndexModel> logger)
        {
            m_Environment = environment;
            m_Logger = logger;
        }

        public void OnGet()
        {
        }
    }
}