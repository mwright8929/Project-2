module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Reviews", {
    headline: DataTypes.STRING,
    category: DataTypes.STRING,
    review: DataTypes.STRING,
    score: DataTypes.INTEGER,
    img: DataTypes.STRING
  });
  return Review;
};
