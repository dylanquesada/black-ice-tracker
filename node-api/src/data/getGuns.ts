import { Request, Response } from "express";

const Sequelize = require("sequelize");
const { Op, DataTypes } = Sequelize;
const connection = require("../../connection.json");
const config = {
  timestamps: false,
  freezeTableName: true,
  schema: "bit",
};
const getGuns = (req: Request, res: Response) => {
  const sequelize = new Sequelize({
    database: connection.database,
    username: connection.user,
    host: connection.host,
    port: connection.port,
    password: connection.password,
    dialect: "postgres",
  });

  const Gun = sequelize.define(
    "gun",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, field: "gun_name" },
    },
    config
  );

  Gun.findAll().then((rows: any) => {
    res.status(200).json(rows);
    sequelize.close();
  });
};

exports.getGuns = getGuns;
