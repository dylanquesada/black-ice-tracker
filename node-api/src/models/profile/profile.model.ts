const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const profile = {
  id: { type: DataTypes.UUID, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.UUID, field: "user_id" },
  systemId: { type: DataTypes.INTEGER, field: "system_id" },
  profileUsername: { type: DataTypes.STRING, field: "game_profile_username" },
};

module.exports = profile;
export {};