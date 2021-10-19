const UserService = require("../services/user/user.service");
import { Request, Response, NextFunction } from "express";
const db = require("../models/db");

exports.createUserRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const models = db.models;
    const service = new UserService(db.models.user);
    const users = await service.getWhere({
      where: {
        username: req.body.model.username,
        email: req.body.model.email,
      },
    });
    if (users.length > 0) {
      res
        .status(500)
        .json({ message: "Record already exists", record: req.body.model })
        .send();
    } else {
      const user = await service.create(req.body.model);
      if (user) {
        res.status(200);
        return res.json(user);
      } else {
        res.status(400).send();
      }
    }
  } catch (error) {
    next(error);
  }
};

exports.updateUserRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const models = db.models;
    const service = new UserService(db.models.user);
    const users = await service.update(req.body.model, {
      where: {
        id: req.body.model.id,
      },
    });
    if (users) {
      res.status(200);
      return res.json(users);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    next(error);
  }
};

export {};
