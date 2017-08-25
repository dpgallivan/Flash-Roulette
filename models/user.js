module.exports = function(sequelize, DataTypes) {
  
  var User = sequelize.define("User", {
    user_name: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    
    password: {
    	type: DataTypes.STRING,
    	allowNull: false
    },

    money: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  
  });

  User.associate = function(models) {
    User.hasMany(models.Bet, {});
  };

  return User;
};