var db = require("../models");
const Op = db.Sequelize.Op;

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
      //console.log(data);
    });
  });

  app.get("/movies", function(req, res) {
    db.Reviews.findAll({
      include: [db.Users],
      where: { category: "movie" }
    }).then(data => {
      res.render("movies", { data: data });
      //console.log(data);
    });
  });

  app.get("/books", function(req, res) {
    db.Reviews.findAll({
      include: [db.Users],
      where: { category: "book" }
    }).then(data => {
      res.render("books", { data: data });
      //console.log(data);
    });
  });

  app.get("/form", isLoggedIn, function(req, res) {
    res.render("form", { user: req.user });
    //console.log(req.user); // this sends information from the user table to the page, capture the ID for the form?
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

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.get("/search/:cat/:query", function(req, res) {
    db.Reviews.findAll({
      include: [db.Users],
      where: {
        category: req.params.cat,
        [Op.or]: {
          headline: { [Op.like]: `%${req.params.query}%` },
          productName: { [Op.like]: `%${req.params.query}%` },
          review: { [Op.like]: `%${req.params.query}%` }
        }
      }
    }).then(data => {
      res.json(data);
      //console.log(data);
    });
  });

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      if (err) throw err;
      res.redirect("/");
    });
  });

  app.get("/dashboard", isLoggedIn, (req, res) => {
    db.Reviews.findAll({
      where: { UserId: req.user.id }
    }).then(function(userdata) {
      res.render("dashboard", { reviews: userdata, user: req.user });
    });
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
