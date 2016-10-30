var express = require('express')
var app = express()
var router = express.Router()

var port = process.env.PORT || 5000

// Set public folder
app.use(express.static('public'))

// Default API route
router.get('/', function (req, res) {
  res.json({message: 'Welcome to the API'})
})

// GET and POST routes for /posts
router.route('/posts')
.get(function (req, res) {
  res.json({message: 'GET posts'})
})
.post(function (req, res) {
 res.json({message: 'POST posts'})
})

// Above routes prefixed with /API
app.use('/api', router)

// Point server to port
app.listen(port, function () {
  console.log('Server listening on', port, '!')
})
