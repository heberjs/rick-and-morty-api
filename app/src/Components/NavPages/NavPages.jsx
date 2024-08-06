import { useNavPages } from '../../Hooks/usePages'



const NavPages = () => {

    const { currentPage, setCurrentPage, totalPages } = useNavPages()


    const getPageNumbers = () => {

        const pageNumbers = []

        const maxPagesToShow = 5

        //calculamos inicio de pag a mostrar
        let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1)

        //calculo del fin de pag a mostrar
        let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages)

        if (endPage - startPage < maxPagesToShow - 1) {
            startPage = Math.max(endPage - maxPagesToShow + 1, 1)
        }

        //generamos el array de num de paginas a mostrar

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i)
        }
        return pageNumbers
    }

    const pages = getPageNumbers()


    const handlePrevPage = () => {

        if (currentPage > 1) setCurrentPage(currentPage - 1)


    }


    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }


    const handleOnPageSelected = page => {

        setCurrentPage(page)

    }

    return (

        <div className='font-semibold - text-white flex gap-1 my-4 justify-center items-center p-2'>
            <div className='inline-block'>
                <button onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className='px-4 py-2 md:text-2xl md:px-8 border rounded-l'
                >Prev</button>

                {pages.map((page) => (
                    < button key={page}
                        onClick={() => handleOnPageSelected(page)}
                        disabled={page === currentPage}
                        className={`px-4 py-2 border-y md:px-8 md:text-2xl border-r ${page === currentPage ? 'bg-gray-600' : ''}`}
                    >{page}</button>
                ))
                }

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className='px-4 py-2 md:text-2xl border md:px-8 rounded-r'
                >Next</button>
            </div>
        </div >

    )

}

export default NavPages