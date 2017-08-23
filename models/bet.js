module.exports = function(sequelize, DataTypes) {

  var Bet = sequelize.define("Bet", {
    type: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    
    values: {
    	type: DataTypes.STRING,
    	allowNull: false
    },

    net: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  
  });

  Bet.associate = function(models) {
    Bet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Bet;
};