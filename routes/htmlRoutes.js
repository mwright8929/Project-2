var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/games", function(req, res) {
    db.Reviews.findAll({
      include: [db.Users],
      where: { category: "game" }
    }).then(data => {
      res.render("games", { data: data });
      console.log(data);
    });
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

  app.get("/test", (req, res) => {
    res.render("test");
  })
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
