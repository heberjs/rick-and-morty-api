import errors from "../Errors/errors"

const { SystemError, ClientError, ServerError } = errors


const apiUrl = process.env.VITE_API_URL

async function filterCharactersBy({ name, status, gender, species }) {

    const queryParams = new URLSearchParams()

    if (name) queryParams.append('name', name)
    if (status) queryParams.append('status', status)
    if (gender) queryParams.append('gender', gender)
    if (species) queryParams.append('species', species)

    const url = `${apiUrl}/character/?${queryParams.toString()}`

    let response


    try {

        response = await fetch(url)

    } catch (error) {

        throw new SystemError(`Network error: ${error.message}`)

    }

    if (!response.ok) {
        if (response.status < 500) {
            throw new ClientError('Client error ocurred while fetching')
        } else {
            throw new ServerError('Server error ocurred while fetching')
        }
    }

    try {
        const data = await response.json()
        return data
    } catch (error) {

        throw new SystemError(`Error parsing JSON: ${error.message}`)

    }

}

export default filterCharactersBy
