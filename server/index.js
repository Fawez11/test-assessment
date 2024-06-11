const express = require('express')
// const db = require('./db-mysql/index.js')
// const factoryRoutes = require("./routes/factoryRoutes.js")
const PORT = 3000
const app = express()


// Middleware to parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'))
// app.use("/api/factories",factoryRoutes)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})