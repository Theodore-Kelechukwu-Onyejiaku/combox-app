const express = require("express");
const storyRouter = express.Router();
const storyController = require("../controllers/stories");

//GET all storys
storyRouter.get("/", storyController.getAllstorys);

//GETS A SINGLE story
storyRouter.get("/:storyId", storyController.getSingleStory);

//GETS A SINGLE story AND ITS COMICS
storyRouter.get("/:storyId/comics", storyController.getSingleStoryComics);

//GETS A SINGLE story AND ITS EVENTS
storyRouter.get("/:storyId/events", storyController.getSingleStoryEvents);

//GETS A SINGLE story AND ITS SERIES
storyRouter.get("/:storyId/series", storyController.getSingleStorySeries);

//GETS A SINGLE story AND ITS STORIES
storyRouter.get("/:storyId/characters", storyController.getSingleStoryStories);

module.exports = storyRouter;
