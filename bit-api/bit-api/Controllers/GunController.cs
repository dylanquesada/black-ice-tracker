using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using Microsoft.Extensions.Logging;


namespace bit_api.Controllers
{
    [ApiController]
    [Produces(MediaTypeNames.Application.Json)]

    [Route("api/[controller]")]
    public class GunController : ControllerBase
    {
        private readonly ILogger _logger;

        public GunController(ILogger<GunController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/api/guns")]
        public IEnumerable<Gun> GetGuns()
        {
            _logger.LogInformation("GET /api/guns API call");
            //Mock Impl
            _logger.LogInformation("MOCK API Response");

            Gun p9 = new Gun() { Id = 0, Name = "P9" };
            Gun p12 = new Gun() { Id = 1, Name = "P12" };
            Gun r4c = new Gun() { Id = 2, Name = "R4-C" };
            Gun smg11 = new Gun() { Id = 3, Name = "SMG-11" };
            return new[] { p9, p12, r4c, smg11 };
        }
    }
}