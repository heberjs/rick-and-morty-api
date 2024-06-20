import { useState, useEffect, createContext, useContext } from "react"

import logic from "../../logic"

const CharacterContext = createContext(null)

export  const useCharacters = ()=> useContext(CharacterContext)



export const CharactersProvider = ({children}) => {

    const [characters, setCharacters] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchCharacters = async () => {
            try {
                const data = await logic.retrieveCharacters()
                setCharacters(data.results)
            } catch (error) {
                alert(error.message)
            }
        }

        fetchCharacters()
    }, [])

    return (
        <CharacterContext.Provider value={{characters, setCharacters}}>
            {children}
        </CharacterContext.Provider>

    )
}
