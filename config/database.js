const mongoose = require('mongoose');
const fs = require('fs');
const rawdata = fs.readFileSync('environment.json');
const config = JSON.parse(rawdata);
const mongoConnectionString = config.mongo_connection_string;

mongoose.connect(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
