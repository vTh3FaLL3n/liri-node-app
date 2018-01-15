require("dotenv").config();
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = require("request");
var inquirer = require("inquirer");
var Twitter = require("twitter");
// var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var userChoice = process.argv[2];

inquirer
    .prompt([{
        type: "list",
        message: "Hello, I'm Liri. How can I help?",
        choices: ["View Tweets", "Spotify Search", "Movie Search", "Surprise Me"],
        name: "choice"
    }])
    .then(function (user) {
        if (userChoice === "View Tweets") {
            var params = {
                screen_name: 'luishw1996'
            };
            client.get('statuses/user_timeline', params, function (error, tweets, response) {
                if (!error) {
                    for (t = 0; t < tweets.length; t++)
                        console.log(tweets[t].text);
                }
            });
        }
    });