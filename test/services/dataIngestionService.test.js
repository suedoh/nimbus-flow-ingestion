const dataIngestionService = require('../services/dataIngestionService')
const dataModel = require('../models/dataModel')

jest.mock('../models/dataModel')

describe('Data Ingestion Service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('ingestData', () => {
    test('should ingest data and return success message', async () => {
      const mockData = { /* Mock data for testing */ }
      const expectedResponse = { message: 'Data ingested successfully' }

      dataModel.create.mockResolvedValue(expectedResponse)

      const response = await dataIngestionService.ingestData(mockData)

      expect(response).toEqual(expectedResponse)
      expect(dataModel.create).toHaveBeenCalledWith(mockData)
    })

    test('should handle errors and throw an error message', async () => {
      const mockData = { /* Mock data for testing */ }
      const expectedError = new Error('Failed to ingest data')

      dataModel.create.mockRejectedValue(expectedError)

      await expect(dataIngestionService.ingestData(mockData)).rejects.toThrow(expectedError)
      expect(dataModel.create).toHaveBeenCalledWith(mockData)
    })
  })
})

