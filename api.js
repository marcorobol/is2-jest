const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }) )

const PORT = process.env.PORT || 3000

var courses_offered = [{id: 21, name: 'IS2'}, {id: 28, name:'sweng'}]

app.get('/courses', (req, res) => {
   res.json(courses_offered)
})

app.listen(PORT, () => console.log('App listening on port ' + PORT) )