using bit_api.Data.Entities;
using bit_api.Controllers.ViewModels;

namespace bit_api.Mappers
{
    public static class GunMappers
    {
        public static Gun MapGunVm(GunModel gun)
        {
            return new Gun() { Id = gun.Id, Name = gun.GunName };
        }
    }
}
