const express = require('express')
const cors = require('cors')
const routes = require('./network/routes')

const PORT = 3000
const HOST = 'localhost'

const app = express()
app.use(cors('dev'))

routes(app)

app.listen(PORT, HOST, () => {
  console.log(`Server running at ${HOST}:${PORT}`)
})