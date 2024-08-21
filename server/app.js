const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/emails', emailRoutes);

module.exports = app;