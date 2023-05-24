// Import required modules and dependencies
const express = require('express')
const bodyParser = require('body-parser')
const dataRoutes = require('./routes/dataRoutes')

// Create an instance of Express app
const app = express()

// Set up middleware
app.use(bodyParser.json())

// Define API routes
app.use('/api/data', dataRoutes)

// Define a default route
app.get('/', (req, res) => {
  res.send('Welcome to Microservice 1!')
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Microservice 1 is running on port ${PORT}`)
})

