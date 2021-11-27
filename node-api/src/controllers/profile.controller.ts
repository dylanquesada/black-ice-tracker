const ProfileService = require("../services/profile/profile.service");
import { Request, Response, NextFunction } from "express";
const db = require("../models/db");

exports.getProfilesByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const models = db.models;
    const service = new ProfileService(db.models.game_profile);
    const profiles = await service.getWhere({
      where: {
        userId: req.params.userId,
      },
    });
    if (profiles) {
      res.status(200);
      return res.json(profiles);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    next(error);
  }
};

exports.createProfileRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const models = db.models;
    const service = new ProfileService(db.models.game_profile);
    const profiles = await service.getWhere({
      where: {
        profileUsername: req.body.model.profileUsername,
        userId: req.body.model.userId,
        systemId: req.body.model.systemId,
      },
    });
    if (profiles.length > 0) {
      res
        .status(500)
        .json({ message: "Record already exists", record: req.body.model })
        .send();
    } else {
      const profile = await service.create(req.body.model);
      if (profile) {
        res.status(200);
        return res.json(profile);
      } else {
        res.status(400).send();
      }
    }
  } catch (error) {
    next(error);
  }
};

exports.updateProfileRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const models = db.models;
    const service = new ProfileService(db.models.game_profile);
    const existingProfiles = await service.getWhere({
      where: {
        userId: req.body.model.userId,
      },
    });
    const identicalRecord = existingProfiles.filter((profile: GameProfile) => {
      profile.profileUsername === req.body.model.profileUsername &&
        profile.systemId === req.body.model.systemId;
    });
    if (identicalRecord.length > 0) {
      res
        .status(500)
        .json({ message: "Record already exists", record: req.body.model })
        .send();
    } else {
      const profiles = await service.update(req.body.model, {
        where: {
          id: req.body.model.id,
        },
      });
      if (profiles) {
        res.status(200);
        return res.json(profiles);
      } else {
        res.status(400).send();
      }
    }
  } catch (error) {
    next(error);
  }
};

export type GameProfile = {
  profileUsername: string;
  systemId: number;
  userId: string;
};
