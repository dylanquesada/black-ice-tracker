const SkinService = require("../services/skin/skin.service");
import { Request, Response, NextFunction } from "express";
const db = require("../models/db");

exports.getSkinsByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const models = db.models;
    const service = new SkinService(db.models.skin_status);
    const skins = await service.getWhere({
      where: {
        gameProfileId: req.params.gameProfileId,
      },
    });
    if (skins) {
      res.status(200);
      return res.json(skins);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    next(error);
  }
};

exports.updateSkinRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const models = db.models;
    const service = new SkinService(db.models.skin_status);
    const skins = await service.update(req.body.model, {
      where: {
        id: req.body.model.id,
      },
    });
    if (skins) {
      res.status(200);
      return res.json(skins);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    next(error);
  }
};

exports.createSkinRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const models = db.models;
    const service = new SkinService(db.models.skin_status);
    const skins = await service.getWhere({
      where: {
        gameProfileId: req.body.model.gameProfileId,
        gunId: req.body.model.gunId,
      },
    });
    if (skins.length > 0) {
      res
        .status(500)
        .json({ message: "Record already exists", record: req.body.model })
        .send();
    } else {
      const skin = await service.create(req.body.model);
      if (skin) {
        res.status(200);
        return res.json(skin);
      } else {
        res.status(400).send();
      }
    }
  } catch (error) {
    next(error);
  }
};

export {};
