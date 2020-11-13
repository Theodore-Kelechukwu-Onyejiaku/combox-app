const express = require("express");
const comicRouter = express.Router();
const comicController = require("../controllers/comics")

//GET all COMICS
comicRouter.get("/", comicController.getComics)

//GETS A SINGLE COMIC
comicRouter.get("/:comic_id", comicController.getSingleComic)

//GETS A SINGLE COMIC AND ITS CHARACTERS
comicRouter.get("/:comic_id/comics", comicController.getSingleComicCharacters)

//GETS A SINGLE COMIC AND ITS CREATORS
comicRouter.get("/:comic_id/creators", comicController.getSingleComicCreators)

//GETS A SINGLE COMIC AND ITS EVENTS
comicRouter.get("/:comic_id/series", comicController.getSingleComicEvents)

//GETS A SINGLE COMIC AND ITS STORIES
comicRouter.get("/:comic_id/stories", comicController.getSingleComicStories)


module.exports = comicRouter;