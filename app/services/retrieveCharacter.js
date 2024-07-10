import errors from '../Errors/errors'

const { SystemError, ClientError, ServerError } = errors



const apiUrl = process.env.VITE_API_URL


async function retrieveCharacter(id) {

    //Try/Catch Block for Network Errors in fetch

    let response
    try {
        response = await fetch(`${apiUrl}/character/${id}`)
    } catch (error) {
        throw new SystemError(error.message)
    }

    // Checks if the HTTP response is not successful
    if (!response.ok) {
        if (response.status < 500) {
            throw new ClientError('Client error ocurred while fetching')
        } else {
            throw new ServerError('Server error ocurred while fetching')
        }
    }


    // try/Catch Block for JSON Parsing
    try {
        const data = await response.json()

        return data
    } catch (error) {
        throw new SystemError('Error parsing JSON: ' + error.message)
    }


}

export default retrieveCharacter