// userGeneratorService.js

const axios = require('axios')

class UserGeneratorService {
  constructor() {
    this.baseURL = 'https://randomuser.me/api/'
  }

  async fetchRandomUser() {
    try {
      const response = await axios.get(this.baseURL)
      return response.data.results[0]
    } catch (error) {
      console.error('Error occurred while fetching random user:', error)
      throw error
    }
  }

  async fetchMultipleRandomUsers(count) {
    try {
      const response = await axios.get(`${this.baseURL}?results=${count}`)
      return response.data.results
    } catch (error) {
      console.error('Error occurred while fetching multiple random users:', error)
      throw error
    }
  }

  // Add more methods here to interact with the Random User Generator API based on your requirements
}

module.exports = UserGeneratorService

