const mongoose = require('../../config/database');

const citySchema = new mongoose.Schema({
  city: String,
  state: String,
  population: String
});

module.exports = mongoose.model('City', citySchema);
