import logic from '../../services'
import { useEffect, useState } from 'react'
import { useCharacters } from '../Hooks/useCharacters'




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



    const handleStatusClick = (newStatus) => setStatus(newStatus)

    const handleGenderClick = (newGender) => setGender(newGender)

    const handleSpeciesClick = (newSpecie) => setSpecies(newSpecie)


    return <>

        <div className="text-white flex flex-col items-center gap-2">
            <h2 className="font-extrabold text-2xl mb-1">Filters</h2>
            <div className="flex flex-col items-center bg-slate-500 p-1">

                <h3 className="mb-4 font-semibold">Status</h3>
                <div className="flex gap-2">
                    {["Alive", "Dead", "Unknown"].map((statusC) => (

                        <button key={statusC}
                            className="bg-slate-800 px-2 py-1"
                            onClick={() => handleStatusClick(statusC)}
                        >{statusC}</button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center bg-slate-500 p-1">
                <h3 className="mb-4 font-semibold">Species</h3>
                <div className="flex gap-2">
                    {['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet'].map((specie) => (

                        <button key={specie}
                            className="bg-slate-800 px-2 py-1"
                            onClick={() => handleSpeciesClick(specie)}
                        >{specie}</button>

                    )
                    )}

                </div>

            </div>
            <div className="flex flex-col items-center bg-slate-500 p-1">
                <h3 className="mb-4 font-semibold">Gender</h3>
                <div className="flex gap-2">
                    {['Male', 'Female', 'Genderless', 'Unknown'].map(gender => {
                        return (
                            <button className="bg-slate-800 px-2 py-1"
                                onClick={() => handleGenderClick(gender)}
                            >{gender}</button>

                        )
                    })}
                </div>

            </div>
        </div>

    </>

}

export default FiltersBar