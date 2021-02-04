using System;

namespace bit_api.Controllers.ViewModels
{
    public class SkinRecord
    {
        public Guid Id { get; set; }
        public Guid GameProfileId { get; set; }
        public int GunId { get; set; }
        public string StatusCode { get; set; }
    }
}