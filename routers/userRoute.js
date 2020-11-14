const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController")
const verification = require("../validation/validateToken")



userRouter.get("/", userController.getHomePage);

userRouter.get("/issues", userController.getIssues);

userRouter.get("/stories", userController.getStories);
userRouter.get("/series", userController.getSeries)
// userRouter.get("http://comicvine.gamespot.com/api/issue/:char_id?format=json&api_key="+process.env.api_key, userController.getDetail)

module.exports = userRouter;