import errors from "../Errors/errors"

const { SystemError, ClientError, ServerError } = errors


const fetchWithHandling = async (url) => {

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
        return await response.json()
    } catch (error) {
        throw new SystemError(`Error parsing JSON: ${error.message}`)
    }
}

export default fetchWithHandling