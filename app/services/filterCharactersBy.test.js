import filterCharactersBy from './filterCharactersBy'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

describe('filterCharactersBy', () => {
    const apiUrl = process.env.API_VITE_URL

    beforeEach(() => {
        fetchMock.resetMocks()
    })

    it('fetches characters filtered by name', async () => {
        const mockData = {
            results: [
                { id: 1, name: 'Rick Sanchez', status: 'Alive' }
            ]
        }
        fetchMock.mockResponseOnce(JSON.stringify(mockData))

        const result = await filterCharactersBy('Rick', '', '', '')
        expect(result.results).toEqual(mockData.results)
        expect(fetchMock).toHaveBeenCalledWith(`${apiUrl}/character/?name=Rick`)
    })

    it('fetches characters filtered by status', async () => {
        const mockData = {
            results: [
                { id: 1, name: 'Rick Sanchez', status: 'Alive' },
                { id: 3, name: 'Morty Dueñas', status: 'Alive' }
            ]
        }
        fetchMock.mockResponseOnce(JSON.stringify(mockData))

        const result = await filterCharactersBy('', 'alive', '', '')
        expect(result.results).toEqual(mockData.results)
        expect(fetchMock).toHaveBeenCalledWith(`${apiUrl}/character/?status=alive`)
    })

    it('fetches characters filtered by gender', async () => {
        const mockData = {
            results: [
                { id: 1, name: 'Summer Smith', gender: 'Female' }
            ]
        }
        fetchMock.mockResponseOnce(JSON.stringify(mockData))

        const result = await filterCharactersBy('', '', 'female', '')
        expect(result.results).toEqual(mockData.results)
        expect(fetchMock).toHaveBeenCalledWith(`${apiUrl}/character/?gender=female`)
    })

    it('fetches characters filtered by species', async () => {
        const mockData = {
            results: [
                { id: 1, name: 'Krombopulos Michael', species: 'Gromflomite' }
            ]
        }
        fetchMock.mockResponseOnce(JSON.stringify(mockData))

        const result = await filterCharactersBy('', '', '', 'Gromflomite')
        expect(result.results).toEqual(mockData.results)
        expect(fetchMock).toHaveBeenCalledWith(`${apiUrl}/character/?species=Gromflomite`)
    })

    it('fetches characters with multiple filters', async () => {
        const mockData = {
            results: [
                { id: 2, name: 'Morty Smith', status: 'Alive', gender: 'Male', species: 'Human' }
            ]
        }
        fetchMock.mockResponseOnce(JSON.stringify(mockData))

        const result = await filterCharactersBy('Morty', 'alive', 'male', 'Human')
        expect(result.results).toEqual(mockData.results)
        expect(fetchMock).toHaveBeenCalledWith(`${apiUrl}/character/?name=Morty&status=alive&gender=male&species=Human`)
    })

})
