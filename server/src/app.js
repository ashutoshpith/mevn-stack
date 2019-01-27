const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose')

// Express configuration
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.listen(process.env.PORT || 8082)

// Mongoose configuration
mongoose.connect('mongodb://localhost:27017/project')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})

// Test handler
app.get('/test', (req, res) => {
  res.send(
    [{
      serviceName: 'test',
      isRunning: false
    }]
  )
})
