module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Reviews", {
    // reviewid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   omitNull: true,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    headline: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 70] }
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 70] }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { is: /\b(movie|game|book)\b/i }
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { len: [10, 255] }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5, isInt: true }
    },
    img: {
      type: DataTypes.STRING
     // validate: { is: /\.(gif|jpg|jpeg|tiff|png)$/ }
    }
  });

  Review.associate = function(models) {
    Review.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Review;
};
