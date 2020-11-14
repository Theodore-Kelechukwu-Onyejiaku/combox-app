const async = require("async");
const User = require("../models/userModel")
const fetch = require("node-fetch")


exports.getHomePage = (req, res, next)=>{
    
        var issues;
        var characters;
        fetch("http://comicvine.gamespot.com/api/characters/?format=json&api_key="+process.env.api_key)
        .then(res => res.json())
        .then(char =>{
            characters = char.results;
            // console.log(char.results)
            res.render("index", {characters : char.results, key: process.env.api_key})

        })
        .catch(error => {
            next(error)
        })
        // const characters = fetch("http://comicvine.gamespot.com/api/characters/?format=json&api_key="+process.env.api_key);
        // const series = await fetch("http://comicvine.gamespot.com/api/series/?format=json&api_key="+process.env.api_key);
        // const stories = await fetch("http://comicvine.gamespot.com/api/series/?format=json&api_key="+process.env.api_key);

        // console.log(await characters)
    
    
}

exports.getIssues = (req, res, next) =>{
    var issues;
        fetch("http://comicvine.gamespot.com/api/issues/?format=json&api_key="+process.env.api_key)
        .then(res => res.json())
        .then(iss =>{
            issues = iss.results;
            // console.log(char.results)
            res.render("issues", {issues : iss.results, key: process.env.api_key})

        })
        .catch(error => {
            next(error)
        })
}

exports.getStories = (req, res, next) =>{
    var stories;
        fetch("http://comicvine.gamespot.com/api/story_arcs/?format=json&api_key="+process.env.api_key)
        .then(res => res.json())
        .then(iss =>{
            stories = iss.results;
            
            res.render("stories", {stories : iss.results, key: process.env.api_key})

        })
        .catch(error => {
            next(error)
        })
}

exports.getSeries = (req, res, next) =>{
    var stories;
        fetch("http://comicvine.gamespot.com/api/series_list/?format=json&api_key="+process.env.api_key)
        .then(res => res.json())
        .then(iss =>{
            stories = iss.results;
            
            res.render("series", {stories : iss.results, key: process.env.api_key})

        })
        .catch(error => {
            next(error)
        })
}

exports.getDetail = (req, res, next)=>{
    fetch("https://comicvine.gamespot.com/api/character/"+req.params.char_id+"/?format=json&api_key="+process.env.api_key)
    .then(res => res.json())
    .then(detail =>{
        
        res.render("stories-page");
    })
} 