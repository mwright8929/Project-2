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
      img: req.body.img,
      UserId: req.user.id
    })
      .then(function(dbReviews) {
        res.json(dbReviews);
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  app.put("/api/reviews", function(req, res) {
    db.Reviews.update(req.body, { where: { id: req.body.id } })
      .then(function(dbReviews) {
        res.json(dbReviews);
      })
      .catch(function(err) {
        res
          .status(500)
          .send("Failed to update your review. Check this form and try again.");
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
