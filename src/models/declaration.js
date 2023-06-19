'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Declaration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(sequelize.models.User, { foreignKey: 'userId' });
    }
  }
  Declaration.init({
    userId: DataTypes.INTEGER,
    value: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Declaration',
  });
  return Declaration;
};
