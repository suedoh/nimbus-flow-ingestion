const request = require('supertest')
const app = require('../index')
const dataIngestionService = require('../services/dataIngestionService')

jest.mock('../services/dataIngestionService')

describe('Data Ingestion Controller', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('POST /api/data', () => {
    test('should return 200 OK and success message on successful data ingestion', async () => {
      const mockData = { /* Mock data for testing */ }
      const expectedResponse = { message: 'Data ingested successfully' }
      
      dataIngestionService.ingestData.mockResolvedValue(expectedResponse)
      
      const response = await request(app).post('/api/data').send(mockData)
      
      expect(response.statusCode).toBe(200)
      expect(response.body).toEqual(expectedResponse)
      expect(dataIngestionService.ingestData).toHaveBeenCalledWith(mockData)
    })
    
    test('should return 400 Bad Request if request data is invalid', async () => {
      const mockData = { /* Invalid mock data for testing */ }
      const expectedResponse = { message: 'Invalid data format' }
      
      dataIngestionService.ingestData.mockRejectedValue(expectedResponse)
      
      const response = await request(app).post('/api/data').send(mockData)
      
      expect(response.statusCode).toBe(400)
      expect(response.body).toEqual(expectedResponse)
      expect(dataIngestionService.ingestData).toHaveBeenCalledWith(mockData)
    })
  })
})

