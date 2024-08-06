import errors from "../Errors/errors"
import fetchWithHandling from "./fetchWithHandling"

const { SystemError } = errors

const apiUrl = process.env.VITE_API_URL

const retrieveCharsLocation = async (locationId) => {

    const locationUrl = `${apiUrl}/location/${locationId}`

    try {

        const dataLocation = await fetchWithHandling(locationUrl)

        const residentsPromise = dataLocation.residents.map(url => fetchWithHandling(url))
        const residents = await Promise.all(residentsPromise)

        return {
            location: dataLocation,
            residents: residents
        }

    } catch (error) {

        throw new SystemError(error.message)

    }



}

export default retrieveCharsLocation