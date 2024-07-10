import errors from '../Errors/errors'
import retrieveCharacter from './retrieveCharacter'
import fetchMock from 'jest-fetch-mock'

const { SystemError, ClientError } = errors



const apiUrl = process.env.API_VITE_URL
describe('retrieveCharacter', () => {

    beforeEach(() => {
        fetchMock.resetMocks()
    })

    it('Fetch character from API and returns data', async () => {

        const mockData = { results: [{ id: 1, name: 'Rick Sanchez' }] }

        fetchMock.mockResponseOnce(JSON.stringify(mockData))


        const data = await retrieveCharacter(1)

        expect(data).toEqual(mockData)
        expect(fetchMock).toHaveBeenCalledWith(`${apiUrl}/character/1`)

    })

    it('Throws SystemError when network error occurs', async () => {

        fetchMock.mockReject(new SystemError('Network Error'));


        await expect(retrieveCharacter(1)).rejects.toThrow(SystemError)
    })

    it('Throws ClientError when response status is less than 500', async () => {

        fetchMock.mockResponseOnce('', { status: 400 })

        await expect(retrieveCharacter(1)).rejects.toThrow(ClientError)
        await expect(retrieveCharacter(1)).rejects.toThrow('Client error occurred while fetching');


    })



})
