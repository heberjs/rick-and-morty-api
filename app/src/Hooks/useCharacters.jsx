
import { createContext, useContext, useState } from 'react'
const EditContext = createContext(null)



export const useCharacters = () => useContext(EditContext)


export const EditCharacterProvider = ({ children }) => {


    const [editCharacter, setEditCharacter] = useState(null)
    const [characters, setCharacters] = useState([])


    return (
        <EditContext.Provider value={{ editCharacter, setEditCharacter, characters, setCharacters }}>
            {children}
        </EditContext.Provider>
    )

}

