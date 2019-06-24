require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./services/db.service');

const {mainRouter} = require('./routes/main.router');

const PORT = process.env.PORT || 5000;

const app = express();

const init = () => {
    db.initClient();

    app.use('/', mainRouter);

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
};

init();
