var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/games", function(req, res) {
    res.render("games");
    //db.findAll({where: {category: 'game'}}).then((data)=> var data = data)
    // send data to games page
  });

  app.get("/movies", function(req, res) {
    res.render("movies");
  });

  app.get("/books", function(req, res) {
    res.render("books");
  });

  app.get("/form", function(req, res) {
    res.render("form");
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
