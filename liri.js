require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = require("request");
var inquirer = require("inquirer");
var Twitter = require("twitter");
var spotify = require('node-spotify-api');
var keys = require("./keys.js");
var userPick = process.argv[2];

inquirer
    .prompt([{
        type: "list",
        message: "Hello, I'm Liri. How can I help?",
        choices: ["View Tweets", "Spotify Search", "Movie Search", "Surprise Me"],
        name: "choice"
    }])