const express = require('express')
const dataIngestionService = require('../services/dataIngestionService')

const router = express.Router()

router.post('/ingest', async (req, res, next) => {
  try {
    const data = req.body
    const processedData = await dataIngestionService.processIncomingData(data)
    res.status(200).json({ message: 'Data ingested successfully', data: processedData })
  } catch (error) {
    next(error)
  }
})

module.exports = router

