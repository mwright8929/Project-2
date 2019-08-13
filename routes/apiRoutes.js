var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/reviews", function(req, res) {
    db.Review.findAll({}).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  // Create a new example
  app.post("/api/reviews", function(req, res) {
    db.Review.create(req.body).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  app.put("/api/reviews/:id", function(req,res){
    db.Review.update({ where: { id: req.params }}).then(function(dbReview){
      res.json(dbReview);
    });
  });

  // Delete an example by id
  app.delete("/api/reviews/:id", function(req, res) {
    db.Review.destroy({ where: { id: req.params } }).then(function(dbReview) {
      res.json(dbReview);
    });
  });
};
