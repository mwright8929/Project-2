module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    name: DataTypes.STRING
  });
  return User;
};
