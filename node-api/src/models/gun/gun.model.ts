const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const gun = {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, field: "gun_name" },
};

module.exports = gun;
export {};