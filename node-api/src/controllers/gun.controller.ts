const getGunList = require("../services/gun/gun.service");
import { Request, Response } from "express";

const getGuns = (req: Request, res: Response) => {
  res.status(200).json(getGunList());
};

exports.getGuns = getGuns;
