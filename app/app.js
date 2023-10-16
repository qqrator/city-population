const express = require('express');
const bodyParser = require('body-parser');
const cityRoutes = require('./routes/cityRoutes');

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api/population', cityRoutes);

module.exports = app;
