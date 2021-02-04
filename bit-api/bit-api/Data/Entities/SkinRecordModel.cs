using System;

namespace bit_api.Data.Entities
{
    public class SkinRecordModel
    {
        public Guid Id { get; set; }
        public Guid GameProfileId { get; set; }
        public int GunId { get; set; }
        public string StatusCode { get; set; }
    }
}