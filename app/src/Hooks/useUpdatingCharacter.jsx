
import { createContext, useContext, useState } from 'react'
const UpdatingCharacterContext = createContext(null)



export const useUpdatingCharacter = () => useContext(UpdatingCharacterContext)


export const UpdatingCharacterProvider = ({ children }) => {


    const [updatingCharacter, setUpdatingCharacter] = useState(null)


    return (
        <UpdatingCharacterContext.Provider value={{ updatingCharacter, setUpdatingCharacter }}>
            {children}
        </UpdatingCharacterContext.Provider>
    )

}

 