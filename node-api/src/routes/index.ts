const express = require("express");
const apiRouter = express.Router();

const gunController = require("../controllers/gun.controller");
const skinController = require("../controllers/skin.controller");
const userController = require("../controllers/user.controller");
const profileController = require("../controllers/profile.controller");

apiRouter.get("/guns", gunController.getGuns);
apiRouter.get("/skins/:gameProfileId", skinController.getSkinsByUser);
apiRouter.post("/skins/", skinController.updateSkinRecord);
apiRouter.put("/skins/", skinController.createSkinRecord);
apiRouter.put("/user/", userController.createUserRecord);
apiRouter.post("/user/", userController.updateUserRecord);
apiRouter.put("/profile/", profileController.createProfileRecord);
apiRouter.post("/profile/", profileController.updateProfileRecord);
apiRouter.get("/profile/:userId", profileController.getProfilesByUser);

module.exports = apiRouter;
