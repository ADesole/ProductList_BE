const express = require('express')
const app = express()


let products = require("./data.js")
const PORT = 8000 

app.get('/api/products', (req, res) => {
  res.send(products)
  res.status(200)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})