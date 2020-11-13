const express = require("express");
const characterRouter = express.Router();
const characterController = require("../controllers/characters")

//GET all characters
characterRouter.get("/", characterController.getCharacters)

//GETS A SINGLE CHARACTER
characterRouter.get("/:character_id", characterController.getSingleCharacter)

//GETS A SINGLE CHARACTER AND ITS COMICS
characterRouter.get("/:character_id/comics", characterController.getSingleCharacterComics)

//GETS A SINGLE CHARACTER AND ITS EVENTS
characterRouter.get("/:character_id/events", characterController.getSingleCharacterEvents)

//GETS A SINGLE CHARACTER AND ITS SERIES
characterRouter.get("/:character_id/series", characterController.getSingleCharacterSeries)

//GETS A SINGLE CHARACTER AND ITS STORIES
characterRouter.get("/:character_id/stories", characterController.getSingleCharacterStories)


module.exports = characterRouter;