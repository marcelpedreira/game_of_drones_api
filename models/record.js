const mongoose = require('mongoose');
// const sequelize = require('../configuration/sequelize');

const Record = new mongoose.Schema({
  // iph: { type: String },
  player: { type: String },
  wins: { type: Number },
});

// Export the model
module.exports = mongoose.model('records', Record);