
import { createContext, useContext, useState } from 'react'
const EditContext = createContext(null)



export const useCharacters = () => useContext(EditContext)


export const CharacterProvider = ({ children }) => {


    const [characters, setCharacters] = useState([])
    const [error, setError] = useState("")



    return (
        <EditContext.Provider value={{ characters, setCharacters, error, setError }}>
            {children}
        </EditContext.Provider>
    )

}

