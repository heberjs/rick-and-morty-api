import logic from "../../services"
import { useCharacters } from "./useCharacters"
import { useNavPages } from "./usePages"
import { useEffect } from "react"

const useCharactersData = () => {

    const { setCharacters, setError } = useCharacters()
    const { currentPage, setTotalPages } = useNavPages()

    useEffect(() => {

        const fetchCharacters = async () => {
            try {
                const data = await logic.retrieveCharacters(currentPage)
                setCharacters(data.results)
                setTotalPages(data.info.pages)

            } catch (error) {
                setError(error.message)
            }
        }

        window.scrollTo(0, 0);

        fetchCharacters()
    }, [setCharacters, currentPage])

}

export default useCharactersData