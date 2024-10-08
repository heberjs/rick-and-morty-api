import errors from '../Errors/errors'

const { SystemError, ClientError, ServerError } = errors


const apiUrl = process.env.VITE_API_URL


const retrieveCharacters = async (page = 1) => {

    let response
    try {
        response = await fetch(`${apiUrl}/character?page=${page}`)
    } catch (error) {
        throw new SystemError(error.message)

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

        throw new SystemError(error.message)

    }

}

export default retrieveCharacters