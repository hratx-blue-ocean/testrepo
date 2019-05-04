const express = require('express')
const app = express()

app.get('/dat/bread', (req, res) => {
  res.send('boii');
})
app.use(bodyParser)