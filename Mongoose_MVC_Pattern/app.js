const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middlewares
app.use(express.json());
app.use(cors());

// routes
const productRoute = require('./routes/product.route')

app.get('/', (req, res) => {
  res.send('Router is working! YaY');
});

// posting to database
app.use('/api/v1/product', productRoute);

/**
 * @find
 * mongoose has 3 methods to find(get) data from mongodb
 * 1. find, 2. findOne, 3. findById
 */


module.exports = app;
