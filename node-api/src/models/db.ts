const { Sequelize } = require("sequelize");
const connection = require("../../connection.json");
const gun = require("../models/gun/gun.model");
const skin = require("../models/skin/skin.model");
const user = require("../models/user/user.model");
const profile = require("../models/profile/profile.model");

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

db.define("skin_status", skin, config);
db.define("gun", gun, config);
db.define("user", user, config);
db.define("game_profile", profile, config);

module.exports = db;
