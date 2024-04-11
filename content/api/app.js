const express = require('express');
const app = express();
const api = require('./src/api');

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/images', express.static('../md/images'))
app.use('/api', api);

app.use('/', express.static('../../site/build/'));

module.exports = app;
