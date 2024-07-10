import { useContext, createContext, useState } from "react"

const NavPagesContext = createContext(null)

export const useNavPages = () => useContext(NavPagesContext)



export const PagesProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState(1)

    const [totalPages, setTotalPages] = useState(1)


    return (

        <NavPagesContext.Provider value={{ currentPage, setCurrentPage, totalPages, setTotalPages }}>
            {children}
        </NavPagesContext.Provider>

    )


}