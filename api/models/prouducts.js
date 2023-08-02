'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prouducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  prouducts.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    discount: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    unit: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'prouducts',
  });
  return prouducts;
};