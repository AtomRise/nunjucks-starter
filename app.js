const express = require('express')
const path = require('path')
const bodyParser= require('body-parser')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')

const app = express()
const PORT_NUMBER = 4588

const data = require('./data/data')
const currentYear = new Date().getFullYear()

app.set('views', path.join(__dirname, 'views'))
const env = nunjucks.configure(app.get('views'), {
  autoescape: true,
  noCache: true,
  watch: true,
  express: app
})
app.set('view engine', 'html')

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('index', {
    data: data,
    currentYear: currentYear
  })
})

app.listen(PORT_NUMBER, function () {
  console.log('Example app listening on port ' + PORT_NUMBER)
})
