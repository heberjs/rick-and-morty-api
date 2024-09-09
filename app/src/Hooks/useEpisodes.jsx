import { useEffect, useState, useCallback } from "react"
import fetchEpisodes from "../../services/fetchEpisodes"
import retrieveCharsEpisode from "../../services/retrieveCharsEpisode"

const useEpisodes = () => {

    const [episodeNames, setEpisodeNames] = useState([])

    const [selectedEpisode, setSelectedEpisode] = useState("1")

    const [selectedEpisodeName, setSelectedEpisodeName] = useState("Pilot")

    const [charactersEpisode, setCharacterEpisode] = useState([])

    const [airDateEpisode, setairDateEpisode] = useState([])



    useEffect(() => {

        const fetchEpisodeNames = async () => {

            try {
                const allEpisodeNames = await fetchEpisodes()
                setEpisodeNames(allEpisodeNames)
            } catch (error) {

                console.error(error, error.message)

            }
        }

        fetchEpisodeNames()

    }, [])

    useEffect(() => {

        // if (!selectedEpisode) return // Evita llamada si no hay episodio

        const fetchSelectedChar = async () => {

            try {
                const { charsEpisode, dataEpisode } = await retrieveCharsEpisode(selectedEpisode)

                setCharacterEpisode(charsEpisode)
                setairDateEpisode(dataEpisode)

            } catch (error) {

                console.error("Error fetching episode data", error.message)

            }
        }

        fetchSelectedChar()

    }, [selectedEpisode])


    const handleChange = useCallback((e) => {

        const episodeSelectedIndex = e.target.value

        setSelectedEpisode(episodeSelectedIndex)
        setSelectedEpisodeName(episodeNames[episodeSelectedIndex - 1])
    }, [episodeNames])


    return {
        episodeNames,
        selectedEpisode,
        selectedEpisodeName,
        charactersEpisode,
        airDateEpisode,
        handleChange
    }


}

export default useEpisodes