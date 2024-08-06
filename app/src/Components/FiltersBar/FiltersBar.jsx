import logic from '../../../services'
import { useEffect, useState } from 'react'
import { useCharacters } from '../../Hooks/useCharacters'
import FilterSection from '../FilterSection/FilterSection'





function FiltersBar() {

    const [name, setName] = useState("")
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [species, setSpecies] = useState("")
    const [view, setView] = useState('open')

    const { setCharacters } = useCharacters()

    const POSIBLE_STATUS = ["Alive", "Dead", "Unknown"]

    const POSIBLE_SPECIES = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet']

    const POSIBLE_GENDER = ['Male', 'Female', 'Genderless', 'Unknown']

    useEffect(() => {

        const fetchFilterCharacters = async () => {

            try {
                const data = await logic.filterCharactersBy({ name, status, gender, species })
                setCharacters(data.results)
            } catch (error) {
                setError(error.message)

            }

        }

        fetchFilterCharacters()

    }, [status, gender, species])

    const handleToggleView = () => {

        setView(prevView => (prevView === 'close' ? 'open' : 'close'))
    }

    return (
        <div className="text-white flex flex-col items-center p-2">

            < h2 className="font-extrabold text-2xl lg:text-4xl cursor-pointer mb-2" onClick={handleToggleView}>Filters</h2>
            {view === 'open' && (
                <>
                    <FilterSection
                        title={"Status"}
                        options={POSIBLE_STATUS}
                        selectedOption={status}
                        setOption={setStatus}

                    />
                    <FilterSection
                        title={"Species"}
                        options={POSIBLE_SPECIES}
                        selectedOption={species}
                        setOption={setSpecies}
                    />

                    <FilterSection
                        title={"Gender"}
                        options={POSIBLE_GENDER}
                        selectedOption={gender}
                        setOption={setGender}
                    />

                </>

            )

            }

        </div >
    )


}

export default FiltersBar