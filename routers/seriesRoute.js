const express = require("express");
const seriesRouter = express.Router();
const seriesController = require("../controllers/series");

//GET all seriess
seriesRouter.get("/", seriesController.getAllSeries);

//GETS A SINGLE series
seriesRouter.get("/:seriesId", seriesController.getSingleSeries);

//GETS A SINGLE series AND ITS COMICS
seriesRouter.get("/:seriesId/comics", seriesController.getSingleSeriesComics);

//GETS A SINGLE series AND ITS EVENTS
seriesRouter.get("/:seriesId/events", seriesController.getSingleSeriesEvents);

//GETS A SINGLE series AND ITS SERIES
seriesRouter.get("/:seriesId/series", seriesController.getSingleSeriesSeries);

//GETS A SINGLE series AND ITS STORIES
seriesRouter.get(
  "/:seriesId/characters",
  seriesController.getSingleSeriesStories
);

module.exports = seriesRouter;
