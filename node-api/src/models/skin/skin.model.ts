const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const skin = {
  id: { type: DataTypes.UUID, primaryKey: true, autoIncrement: true },
  gameProfileId: { type: DataTypes.UUID, field: "game_profile_id" },
  gunId: { type: DataTypes.NUMBER, field: "gun_id" },
  status: { type: DataTypes.STRING, field: "status" },
};

module.exports = skin;
export {}
// export type skin = {
//   id: string;
//   gameProfileId: string;
//   gunId: number;
//   status: string;
// };
