using bit_api.Data.Entities;
using bit_api.Controllers.ViewModels;

namespace bit_api.Common
{
    public class ConversionUtils
    {
        public static Gun Convert(GunModel gun)
        {
            return new Gun() { Id = gun.Id, Name = gun.GunName };
        }
        public static SkinRecord Convert(SkinRecordModel skin)
        {
            return new SkinRecord()
            {
                Id = skin.Id,
                GameProfileId = skin.GameProfileId,
                GunId = skin.GunId,
                StatusCode = skin.StatusCode
            };
        }

        public static SkinRecordModel Convert(SkinRecord skin)
        {
            return new SkinRecordModel()
            {
                Id = skin.Id,
                GameProfileId = skin.GameProfileId,
                GunId = skin.GunId,
                StatusCode = skin.StatusCode
            };
        }
    }
}
