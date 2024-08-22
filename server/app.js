const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');
const sequelize = require('./config/database');

const app = express();

sequelize.sync().then(() => {
    console.log('Database synced');
}).catch((error) => {
    console.error('Error syncing database:', error);
});

app.use(bodyParser.json());
app.use('/api/emails', emailRoutes);

module.exports = app;