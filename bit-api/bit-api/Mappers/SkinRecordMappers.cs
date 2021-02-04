using bit_api.Data.Entities;
using bit_api.Controllers.ViewModels;

namespace bit_api.Mappers
{
    public static class SkinRecordMapper
    {
        public static SkinRecord MapSkinRecordVm(SkinRecordModel skin)
        {
            return new SkinRecord()
            {
                Id = skin.Id,
                GameProfileId = skin.GameProfileId,
                GunId = skin.GunId,
                StatusCode = skin.StatusCode
            };
        }
    }
}
