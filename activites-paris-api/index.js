const express = require('express');
const activitesRoutes = require('./routes/activite.routes');
require('dotenv').config({path: './config/.env'});
require('./config/database');
const app = express();

var cors = require('cors')
app.use(cors())

//routes
app.use('/api/activites', activitesRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})