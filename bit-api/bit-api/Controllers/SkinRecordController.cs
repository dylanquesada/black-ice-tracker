using System.Threading.Tasks;
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
    public class SkinRecordController : ControllerBase
    {
        private readonly ILogger _logger;

        public SkinRecordController(ILogger<SkinRecordController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/api/skins/{Id}")]
        public List<SkinRecord> GetSkinRecords(string Id)
        {
            _logger.LogInformation("GET /api/skins/{id} API call");
            //Mock Impl
            _logger.LogInformation("MOCK API Response");
            //TODO: refactor to not use 'SkinRecord' because it sounds weird.
            SkinRecord p9 = new SkinRecord() { Id = 0, Status = "Owned" };
            SkinRecord p12 = new SkinRecord() { Id = 1, Status = "Wants" };
            SkinRecord r4c = new SkinRecord() { Id = 2, Status = "Owned" };
            SkinRecord smg11 = new SkinRecord() { Id = 3, Status = "Owned" };
            return new List<SkinRecord> { p9, p12, r4c, smg11 };
        }
    }
}