const express = require('express');
const app = express();
const api = require('./src/api');

const cors = require('cors');

app.use(cors());

app.use('/images', express.static('../md/images'))
app.use(express.json());
app.use('/api', api);


module.exports = app;
