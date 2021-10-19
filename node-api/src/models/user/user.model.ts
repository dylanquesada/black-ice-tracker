const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const user = {
  id: { type: DataTypes.UUID, primaryKey: true, autoIncrement: true },
  role: { type: DataTypes.STRING, field: "role" },
  email: { type: DataTypes.STRING, field: "email" },
  username: { type: DataTypes.STRING, field: "username" },
};

module.exports = user;
export {};
