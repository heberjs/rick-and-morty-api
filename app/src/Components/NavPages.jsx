import logic from '../../services'
import { useEffect } from 'react'
import { useCharacters } from '../Hooks/useCharacters'
import { useNavPages } from '../Hooks/usePages'



function NavPages() {

    const { currentPage, setCurrentPage, totalPages } = useNavPages()



    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    return (

        <div className=' text-white flex gap-2 p-2 my-8'>
            <button className='border p-2 px-4' onClick={prevPage}>Previous</button>
            <div className='border py-2 px-4'>{currentPage}</div>
            <button className='border p-2 px-4' onClick={nextPage}>Next</button>
        </div>

    )

}

export default NavPages