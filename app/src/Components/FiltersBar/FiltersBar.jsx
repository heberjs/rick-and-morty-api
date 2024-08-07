import logic from '../../../services'
import { useEffect, useState } from 'react'
import { useCharacters } from '../../Hooks/useCharacters'
import FilterSection from '../Library/FilterSection/FilterSection'





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
        <div className="text-white flex flex-col items-center lg:ml-8 md:mt-2">

            < h2 className={`font-extrabold text-2xl lg:text-4xl cursor-pointer mb-2 bg-slate-600 text-center rounded flex items-center justify-between px-2 py-2 w-full md:w-[350px]`} onClick={handleToggleView}>Filters <span><img className='w-8' src={view === 'open' ? '/chevron-up.png' : '/chevron-down.png'} alt={view === 'open' ? 'arrow-up' : 'arrow-down'} /></span></h2>
            {view === 'close' && (
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