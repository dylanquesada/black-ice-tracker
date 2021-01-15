using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using Microsoft.Extensions.Logging;
using bit_api.DBModels;
using Microsoft.EntityFrameworkCore;
using bit_api.Mappers;

namespace bit_api.Controllers
{
    [ApiController]
    [Produces(MediaTypeNames.Application.Json)]

    [Route("api/[controller]")]
    public class GunController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly GunContext _context;
        public GunController(GunContext context,
            ILogger<GunController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        [Route("/api/guns")]
        public async Task<ActionResult<List<Gun>>> GetGuns()
        {
            List<Gun> gunsResponse = new List<Gun>();
            _logger.LogInformation("GET /api/guns API call");
            var guns = await _context.Guns.ToListAsync();
            guns.ForEach(gun => gunsResponse.Add(Mappers.GunMappers.MapGunVm(gun)));
            return gunsResponse;
        }
    }
}