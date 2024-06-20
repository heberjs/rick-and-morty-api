async function retrieveCharacters(page = 1) {

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)

        if (!response.ok) throw new Error(`Fetch error: ${response.status} - ${response.statusText}`)

        const data = await response.json()

        return data

    } catch (error) {
        if (error.name === 'TypeError') throw new Error(`Network error: ${error.message}`)

        throw new Error(`Error fetching data: ${error.message}`)

    }
}

export default retrieveCharacters