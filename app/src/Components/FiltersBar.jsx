import logic from '../../services'
import { useEffect, useState } from 'react'
import { useCharacters } from '../Hooks/useCharacters'
import FilterButton from './Library/FilterButton'




function FiltersBar() {

    const [name, setName] = useState("")
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [species, setSpecies] = useState("")

    const { setCharacters } = useCharacters()

    useEffect(() => {

        const fetchFilterCharacters = async () => {

            try {
                const data = await logic.filterCharactersBy({ name, status, gender, species })
                setCharacters(data.results)
            } catch (error) {
                alert(error.message)
                console.error(error)


            }

        }

        fetchFilterCharacters()

    }, [status, gender, species])

    const handleClick = (value, setValue) => setValue(prev => (prev === value ? "" : value))


    return <>


        <div className="text-white flex flex-col items-center gap-3">
            <h2 className="font-extrabold text-2xl m-0">Filters</h2>
            <div className="flex flex-col items-center rounded-lg bg-slate-500 p-2">

                <h3 className="mb-4 font-semibold shadow p-1">Status</h3>
                <div className="flex flex-wrap gap-2">
                    {["Alive", "Dead", "Unknown"].map((statusC) => (
                        <FilterButton key={statusC}
                            isActive={statusC === status}
                            onClick={() => handleClick(statusC, setStatus)}
                        />

                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-slate-500 p-2">
                <h3 className="mb-4 font-semibold shadow p-1">Species</h3>
                <div className="flex flex-wrap gap-2">
                    {['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet'].map((specie) => (

                        <FilterButton
                            key={specie}
                            isActive={specie === species}
                            onClick={() => handleClick(specie, setSpecies)}
                        />

                    )
                    )}

                </div>

            </div>
            <div className="flex flex-col items-center rounded-lg bg-slate-500 p-2">
                <h3 className="mb-4 font-semibold shadow p-1">Gender</h3>
                <div className="flex gap-2 flex-wrap">
                    {['Male', 'Female', 'Genderless', 'Unknown'].map(genderC => {
                        return (

                            <FilterButton
                                key={genderC}
                                isActive={genderC === gender}
                                onClick={() => handleClick(genderC, setGender)}

                            />

                        )
                    })}
                </div>

            </div>
        </div>

    </>

}

export default FiltersBar