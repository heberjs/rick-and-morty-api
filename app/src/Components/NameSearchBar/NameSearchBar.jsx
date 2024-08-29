import { useState, useEffect, useCallback } from "react"
import logic from "../../../services"
import { useCharacters } from "../../Hooks/useCharacters"
import debounce from "../../../utils/debunce"
import errors from "../../../Errors/errors"

const { NotFoundError } = errors

const NameSearchBar = () => {


    const { characters, setCharacters, setError } = useCharacters()
    const [name, setName] = useState("")



    //memorizar la fn debounce para evitar recrearla en cada render
    const fetchCharacters = useCallback(

        debounce(async (searchName) => {
            try {
                const data = await logic.filterCharactersBy({ name: searchName })

                if (data?.results) {
                    setCharacters(data.results)
                    setError("")
                } else {
                    throw new NotFoundError(errors.message)
                }
            } catch (error) {
                setError('Character Not Found')
                console.error(error)

            }
        }, 2000),
        [setCharacters, setError])



    useEffect(() => {
        if (name.trim()) {

            fetchCharacters(name)
        } else {


        }

        return () => {
            fetchCharacters.cancel() //limpiar el timeOut si el compo se desmonta o el nombre cambia antes del debounce
        }
    }, [name, fetchCharacters])



    const handleNameSearch = (event) => {

        setName(event.target.value)
    }



    return (

        <div className="justify-center p-1">
            <form className="flex gap-2 rounded justify-center">
                <input
                    className="rounded px-1 py-1 border border-black font-semibold w-full md:w-[300px]"
                    id="search"
                    type="text"
                    placeholder="Search for Characters"
                    onChange={handleNameSearch}

                />
                <button type="submit" className="text-white px-2  rounded bg-slate-500 font-medium">
                    <p className="text-lg">Clear</p>

                </button>
            </form>

        </div>

    )
}

export default NameSearchBar