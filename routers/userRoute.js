const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController")

userRouter.get("/", userController.getHomePage);


userRouter.get("http://comicvine.gamespot.com/api/issue/:char_id?format=json&api_key="+process.env.api_key, userController.getDetail)

module.exports = userRouter;