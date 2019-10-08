const mongoose = require('mongoose');

const Record = new mongoose.Schema({
  player: { type: String },
  wins: { type: Number },
});

module.exports = mongoose.model('records', Record);