module.exports = function(sequelize, DataTypes) {

  var Roulette_Spin = sequelize.define("Roulette_Spin", {
    value: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    
    color: {
    	type: DataTypes.STRING,
    	allowNull: false
    }
  
  });

  // Bet.associate = function(models) {
  //   Bet.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Roulette_Spin;
};