require('dotenv').config('../.env')
const express = require('express')
const { notFoundHandler, errorHandler } = require('./error')

const app = express()

app.use(require('./middleware'));
app.use(require('./routes'));

// error show 404 route
// global error handling
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app;


/** NOTE **
 * unused function or parameter can throw error. so use underline(_) sign. best use is underline with parameter/functions. eg: _req
 * b
 * 
*/