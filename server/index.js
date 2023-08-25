require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {REACT_APP_PORT} = process.env

app.use(express.json())
app.use(cors())

const {events} = require('./controller/controller')

app.get('/events', events)



app.listen(REACT_APP_PORT, () => console.log(`Server running on ${REACT_APP_PORT}`))