const express = require("express");
const app = express();
const request = require("request");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/userModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
//configuring dotenv
require("dotenv").config();
//Importing the body-parser middle ware
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(cors());
//Use of cookies
app.use(cookieParser());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));


const userController = require("./controllers/userController");
const userRouter = require("./routers/userRoute");
app.get("/", userRouter);


app.get("/signin", (req, res, next) =>{
    res.render("signin")
})

app.get("/signup", (req, res, next)=>{
    res.render("signup")
})


var mongoDB = process.env.DB || process.env.DB_Online;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connections;
db.concat("error", console.error.bind(console, "MongoDB connection error."));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Server running succesfully on port:"+PORT)
})