/**
 * @file index.js
 * @description Main entry point of the microservice
 * @current-functionality Sets up the server and initializes necessary components
 * @TODO Enhances server configuration and handles additional functionalities as required
 */

const express = require('express')
const app = express()
const dataRoutes = require('./routes/dataRoutes')

// Middleware
app.use(express.json())

// Route handler for the root path
app.get('/', (_req, res) => {
  res.send('Welcome to Nimbus')
})

// Routes
app.use('/api', dataRoutes)

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal Server Error' })
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}!`)
})

