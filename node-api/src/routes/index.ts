const express = require("express");
const apiRouter = express.Router();

const gunController = require("../controllers/gun.controller");

apiRouter.get("/guns", gunController.getGuns);

module.exports = apiRouter;
