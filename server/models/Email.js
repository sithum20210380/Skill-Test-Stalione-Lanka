const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Email = sequelize.define('Email', {
  to: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Email;