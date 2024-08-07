import { useState, useEffect } from "react"
import logic from "../../../services"
import { useCharacters } from "../../Hooks/useCharacters"

const NameSearchBar = () => {


    const { setCharacters, setError } = useCharacters()
    const [name, setName] = useState("")


    useEffect(() => {

        const fetchFilterCharacters = async () => {

            if (name) {

                try {
                    const data = await logic.filterCharactersBy({ name })
                    setCharacters(data.results)
                    setError("")

                } catch (error) {
                    setError('Character Not Found')
                    console.error(error)

                }
            }
        }

        fetchFilterCharacters()

    }, [name, setCharacters])

    const handleNameSearch = (event) => {

        setName(event.target.value)
    }




    return (

        <div className="justify-center p-1">
            <form className="flex gap-2 rounded justify-center">
                <input
                    className="rounded px-1 py-2 border border-black font-semibold w-full md:w-[300px]"
                    id="search"
                    type="text"
                    placeholder="Search for Characters"
                    onChange={handleNameSearch}

                />
                <button type="submit" className="text-white px-2  rounded bg-slate-500 font-medium">
                    <p className="text-lg">Search</p>

                </button>
            </form>

        </div>

    )
}

export default NameSearchBar