const { Sequelize } = require("sequelize");
const connection = require("../../connection.json");
const gun = require("../models/gun/gun.model");

const db = new Sequelize({
  database: connection.database,
  username: connection.user,
  host: connection.host,
  port: connection.port,
  password: connection.password,
  dialect: "postgres",
});

const config = {
  timestamps: false,
  freezeTableName: true,
  schema: "bit",
};

db.define("gun", gun, config);

module.exports = db;
