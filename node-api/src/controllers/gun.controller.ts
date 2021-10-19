const GunService = require("../services/gun/gun.service");
import { Request, Response, NextFunction } from "express";
const db = require("../models/db");

exports.getGuns = async (req: Request, res: Response, next: NextFunction) => {
  const service = new GunService(db.models.gun);
  const guns = await service.getAll();
  res.status(200);
  return res.json(guns);
};

export {};
