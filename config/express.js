const express = require('express');
const morgan = require('morgan')
const cors = require('cors');

//Middleware´s for app
function connectDB(app) {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
  app.use(cors());
}

morgan.token('body', function (req, res) { 
  return JSON.stringify(req.body)
});

module.exports = connectDB;