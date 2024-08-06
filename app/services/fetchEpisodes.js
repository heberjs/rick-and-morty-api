import { SystemError } from "../Errors/errors"
import fetchWithHandling from "./fetchWithHandling"


const apiUrl = process.env.VITE_API_URL

const fetchEpisodes = async () => {

    let nextUrl = `${apiUrl}/episode`

    let episodesNames = []

    while (nextUrl) {

        try {

            const data = await fetchWithHandling(nextUrl)

            episodesNames = episodesNames.concat(data.results.map(episode => episode.name))

            nextUrl = data.info.next


        } catch (error) {

            throw new SystemError(error.message)

        }

    }

    return episodesNames


}

export default fetchEpisodes