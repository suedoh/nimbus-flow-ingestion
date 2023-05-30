const express = require('express')
const dataIngestionService = require('../services/dataIngestionService')
const router = express.Router()

const processData = async (req, res, next) => {
  try {
    const data = req.body
    const processedData = await dataIngestionService.processData(data)
    res.status(200).json({ message: 'Data processed successfully', data: processedData })
  } catch (error) {
    next(error)
  }
}

const validateData = async (req, res, next) => {
  try {
    // Logic for validating the data
    // ...

    res.status(200).json({ message: 'Data validation successful' })
  } catch (error) {
    next(error)
  }
}

const generateUserData = async (req, res, next) => {
  try {
    // const data = req.body
    const generatedUserData = await dataIngestionService.ingestDataFromAPI()

    res.status(200).json({
      message: 'Data validation successful',
      data: generatedUserData
    })

    return generatedUserData
  } catch (error) {

  }
}

// Export the functions
module.exports = {
  processData,
  validateData,
  generateUserData,
}
