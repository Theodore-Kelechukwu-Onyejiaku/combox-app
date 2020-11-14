const async = require("async");
const User = require("../models/userModel")
const fetch = require("node-fetch")


exports.getHomePage = async (req, res, next)=>{
    try {
        var issues;
        var characters;
        fetch("http://comicvine.gamespot.com/api/issues/?format=json&api_key="+process.env.api_key+"&field_list=name,api_detail_url,image.original_url")
        .then(res => res.json())
        .then(characters =>{
            characters = characters.results;
        })
        .catch(error => {
            next(err)
        })
        // const characters = fetch("http://comicvine.gamespot.com/api/characters/?format=json&api_key="+process.env.api_key);
        // const series = await fetch("http://comicvine.gamespot.com/api/series/?format=json&api_key="+process.env.api_key);
        // const stories = await fetch("http://comicvine.gamespot.com/api/series/?format=json&api_key="+process.env.api_key);

        // console.log(await characters)
        res.render("index", {characters : await characters.results})
    }
    catch(error){
        res.status(200).json
    }
    
}