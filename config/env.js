require("dotenv").config({ path: __dirname + "/.env" });

var keys = {
  movie: process.env.MOVIE_KEY,
  game: process.env.GAME_KEY
};

module.exports = keys;
