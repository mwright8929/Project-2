var db = require("../models");
var passport = require("passport");

module.exports = function(app) {
  // Get all examples
  app.get("/api/reviews", function(req, res) {
    db.Reviews.findAll({}).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  // Create a new example
  app.post("/api/reviews", function(req, res) {
    db.Reviews.create(req.body).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  app.put("/api/reviews/:id", function(req, res) {
    db.Reviews.update({ where: { id: req.params } }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  // Delete an example by id
  app.delete("/api/reviews/:id", function(req, res) {
    db.Reviews.destroy({ where: { id: req.params } }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",
      failureRedirect: "/signup"
    })
  );
};
