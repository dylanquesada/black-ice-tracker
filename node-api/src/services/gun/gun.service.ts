const serviceDB = require("../../models/db");

interface Gun {
  Name: string;
  Id: number;
}

const getGunList = (): Gun[] => {
  return serviceDB.models.gun.findAll().then((rows: Gun) => {
    return rows;
  });
};

module.exports = getGunList;

