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
    db.Reviews.create({
      category: req.body.category,
      productName: req.body.productName,
      score: req.body.score,
      headline: req.body.headline,
      review: req.body.review,
      img: req.body.image,
      UserId: req.user.id
    }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  app.put("/api/reviews", function(req, res) {
    db.Reviews.update(req.body, { where: { id: req.body.id } }).then(function(
      dbReviews
    ) {
      res.json(dbReviews);
    });
  });

  // Delete an example by id
  app.delete("/api/reviews", function(req, res) {
    db.Reviews.destroy({ where: { id: req.body.id } }).then(function(
      dbReviews
    ) {
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

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",
      failureRedirect: "/signin"
    })
  );
};
