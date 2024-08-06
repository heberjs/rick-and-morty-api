import errors from "../Errors/errors"
import fetchWithHandling from "./fetchWithHandling"

const { SystemError } = errors


const apiUrl = process.env.VITE_API_URL

const retrieveCharsEpisode = async (episode) => {


    const charsUrl = `${apiUrl}/episode/${episode}`

    try {
        const dataEpisode = await fetchWithHandling(charsUrl)

        const charactersPromise = dataEpisode.characters.map(url => fetchWithHandling(url))

        const charsEpisode = await Promise.all(charactersPromise)

        return {
            dataEpisode: dataEpisode.air_date,
            charsEpisode: charsEpisode
        }

    } catch (error) {

        throw new SystemError(error.message)
    }

}

export default retrieveCharsEpisode