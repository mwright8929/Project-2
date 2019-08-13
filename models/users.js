module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 70]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 70]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  //   User.associate = function(models) {
  //     User.hasMany(models.Review, {
  //       onDelete: "cascade"
  //     });
  //   };
  return User;
};
