const express = require('express')
const app = express()

const bookRoute = require('../api/router/bookRoute')


app.use(express.json())

app.get("/", (req, res) => {
  res.send("working")
});

app.use('/api/book-search', bookRoute)
// /api/book-search


module.exports = app;