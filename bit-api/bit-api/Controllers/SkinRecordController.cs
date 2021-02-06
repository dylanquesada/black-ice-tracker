using System;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using Microsoft.Extensions.Logging;
using bit_api.Controllers.ViewModels;
using bit_api.Data.Entities;
using bit_api.Data;
using System.Linq;
using static bit_api.Common.ConversionUtils;

namespace bit_api.Controllers
{
    [ApiController]
    [Produces(MediaTypeNames.Application.Json)]

    [Route("api/[controller]")]
    public class SkinRecordController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly BitDbContext _context;

        public SkinRecordController(BitDbContext context,
            ILogger<GunController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        [Route("/api/skins/{Id}")]
        public async Task<ActionResult<List<SkinRecord>>> GetSkinRecords(string Id)
        {
            _logger.LogInformation("GET /api/skins/{id} API call");
            //TODO: refactor to not use 'SkinRecord' because it sounds weird.
            var records = await _context.SkinRecords.Where(e => e.GameProfileId.ToString().Equals(Id)).ToListAsync();
            records.ForEach(record => Convert(record));
            return Ok(records);
        }

        [HttpPut]
        [Route("/api/skins/{id?}")]
        public async Task<ActionResult> PutSkinRecord(
                                        [FromBody] SkinRecord skin)
        {
            _logger.LogInformation("PUT /api/skins/{id} API call SkinRecordVM: ", skin);

            SkinRecordModel newEntity = Convert(skin);

            var existingEntity = await _context.SkinRecords.FindAsync(newEntity.Id);
            if (existingEntity == null)
            {
                await _context.SkinRecords.AddAsync(newEntity);
            }
            else
            {
                existingEntity.StatusCode = newEntity.StatusCode;
            }
            var response = await _context.SaveChangesAsync();
            _logger.LogInformation("DB entries saved: ", response);
            return NoContent();
        }

        [HttpPost]
        [Route("/api/skins")]
        public async Task<ActionResult> PostSkinRecord(
                                        [FromBody] SkinRecord skin)
        {
            _logger.LogInformation("POST /api/skins API call SkinRecordVM: ", skin);

            SkinRecordModel newEntity = Convert(skin);

            var existingEntity = await _context.SkinRecords.FindAsync(newEntity.Id);
            if (existingEntity == null)
            {
                await _context.SkinRecords.AddAsync(newEntity);
            }
            else
            {
                existingEntity.StatusCode = newEntity.StatusCode;
            }
            var response = await _context.SaveChangesAsync();
            _logger.LogInformation("DB entries saved: ", response);
            return NoContent();
        }
    }
}