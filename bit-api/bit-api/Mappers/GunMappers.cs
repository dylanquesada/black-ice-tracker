using System;
using bit_api.DBModels;
using bit_api;
namespace bit_api.Mappers
{
    public static class GunMappers
    {
        public static bit_api.Gun MapGunVm(bit_api.DBModels.Gun gun)
        {
            return new Gun() { Id = gun.Id, Name = gun.gunName };
        }
    }
}
