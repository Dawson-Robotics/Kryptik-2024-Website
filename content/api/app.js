const express = require('express');
const app = express();
const api = require('./src/api');

app.use('/', express.static('../../site/build'));
app.use('/images', express.static('../md/images'))

app.use(express.json());

app.use('/api', api);

module.exports = app;