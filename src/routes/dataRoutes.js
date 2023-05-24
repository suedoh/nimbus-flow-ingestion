/**
* dataRoutes.js file sets up an Express router and defines a route handler for the POST request. 
* When a POST request is received at the specified endpoint (/), it extracts the data from the request body and creates a new instance of the DataModel class. 
* It then performs data validation using the isValid() method and proceeds with further actions if the data is valid. 
* Finally, appropriate responses are sent back to the client
**/
const express = require('express')
const router = express.Router()

// Import the DataModel and any other necessary modules
const DataModel = require('../models/dataModel')
const dataController = require('../controllers/dataIngestionController');

// Route for handling data ingestion
router.post('/data', dataController.processData);

// Define the route handlers
router.post('/', (req, res) => {
  const data = req.body

  // Create a new instance of the DataModel with the received data
  const newData = new DataModel(data)

  // Perform any necessary validations
  if (!newData.isValid()) {
    return res.status(400).json({ error: 'Invalid data' })
  }

  // Save the data or perform any other desired actions
  // ...

  // Return a response indicating success
  res.status(200).json({ message: 'Data saved successfully' })
})

// Export the router
module.exports = router

