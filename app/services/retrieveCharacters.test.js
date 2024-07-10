import retrieveCharacters from './retrieveCharacters'
import fetchMock from 'jest-fetch-mock'


fetchMock.enableMocks()


const apiUrl = process.env.API_VITE_URL

describe('retrieveCharacters', () => {

    beforeEach(() => {
        fetchMock.resetMocks()
    })

    it('fetches characters from API  and returns data', async () => {

        const mockData = {
            results: [{ id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', gender: 'Male' },
            { id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human', gender: 'Male' },
            { id: 3, name: 'Summer Smith', status: 'Alive', species: 'Human', gender: 'Female' }]
        }

        fetchMock.mockResponseOnce(JSON.stringify(mockData))

        const data = await retrieveCharacters()

        expect(data).toEqual(mockData)
        expect(fetchMock).toHaveBeenCalledWith(`${apiUrl}/character?page=1`)


    })

})