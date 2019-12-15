using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace GetSoapedAuth.Controllers
{
    [SecurityHeaders]
    public class HomeController : Controller
    {
        private readonly IWebHostEnvironment m_Environment;
        private readonly ILogger<HomeController> m_Logger;

        public HomeController(IWebHostEnvironment environment, ILogger<HomeController> logger)
        {
            m_Environment = environment;
            m_Logger = logger;
        }

        public IActionResult Index()
        {
            if (m_Environment.IsDevelopment())
            {
                // only show in development
                return View();
            }

            m_Logger.LogInformation("Homepage is disabled in production. Returning 404.");
            return NotFound();
        }

        public IActionResult Privacy()
        {
            return View();
        }
    }
}
