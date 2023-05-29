/**
 * @file dataIngestionService.js
 * @description Service for data ingestion operations
 * @current-functionality Handles basic data ingestion functionality
 * @TODO Implements data validation, error handling, and interacts with data storage
 */

const kafka = require('../../config/kafka')
const UserGeneratorService = require('./userGeneratorService')
const userGeneratorService = new UserGeneratorService()
const DataModel = require('../models/dataModel')

class DataIngestionService {
  async processIncomingData(data) {
    try {
      // Validate and process the incoming data
      const processedData = await this.validateAndProcessData(data)

      // Save the processed data to the database
      await DataModel.create(processedData)

      // Publish an event/message to Kafka (optional)
      await this.publishToKafka(processedData)

      return processedData
    } catch (error) {
      // Handle errors and log them
      console.error('Error occurred during data ingestion:', error)
      throw error
    }
  }

  async validateAndProcessData(data) {
    // Implement your data validation and processing logic here
    // This method should validate and transform the incoming data according to your project requirements
    console.log(data, 'validated.')
    // Return the processed data
  }

  async publishToKafka(data) {}

  async ingestDataFromAPI() {
    try {
      // Call the API to fetch data
      const data = await userGeneratorService.fetchRandomUser()
      // const data = await APIService.fetchData()

      // Process the fetched data
      const processedData = await this.validateAndProcessData(data)

      // Save the processed data to the database
      // Currently throwing error due to no time stamp
      // await DataModel.create(processedData)

      // Publish an event/message to Kafka (optional)
      await this.publishToKafka(processedData)

      return processedData
    } catch (error) {
      console.error('Error occurred during data ingestion from API:', error)
      throw error
    }
  }
}

module.exports = new DataIngestionService()

