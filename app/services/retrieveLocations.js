import errors from "../Errors/errors"

const { SystemError, ClientError, ServerError } = errors


const apiUrl = process.env.VITE_API_URL

const retrieveLocations = async () => {

    let allLocationNames = []

    let nextUrl = `${apiUrl}/location`


    while (nextUrl) {
        let response



        try {
            response = await fetch(nextUrl)
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

            allLocationNames = allLocationNames.concat(data.results.map(location => location.name))
            nextUrl = data.info.next


        } catch (error) {

            throw new SystemError(`Error parsing JSON: ${error.message}`)
        }

    }

    return allLocationNames

}

export default retrieveLocations