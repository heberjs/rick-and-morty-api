import logic from '../../services'
import Header from "../Components/Header"
import CharactersList from "../Components/CharactersList"
import EditCharacterForm from '../Components/EditCharacterForm'
import { useEffect, useState } from "react"
import { useCharacters } from '../Hooks/useCharacters'



const LocationList = () => {

    const [locationNames, setLocationNames] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(1)
    const [residents, setResidents] = useState([])
    const [currentLocation, setCurrentLocation] = useState('')

    const { editCharacter } = useCharacters()

    useEffect(() => {

        const fetchLocationsNames = async () => {

            try {
                const allLocationNames = await logic.retrieveLocations()
                setLocationNames(allLocationNames)

            } catch (error) {
                console.error(error, error.message)

            }
        }

        fetchLocationsNames()



    }, [])



    useEffect(() => {
        const fetchResidents = async () => {

            try {
                const { residents, location } = await logic.retrieveCharsLocation(selectedLocation)
                setResidents(residents)
                setCurrentLocation(location)
            } catch (error) {

                console.error(error, error.message)

            }
        }

        fetchResidents()
    }, [selectedLocation])


    const handleChange = (e) => {

        const locationName = e.target.value
        setSelectedLocation(locationName)
    }



    return (

        <section className=" bg-slate-900 flex justify-center flex-col p-2 border border-red-700 min-h-screen">

            <Header />

            <h2 className='text-white font-semibold text-4xl text-center p-4 mb-2 border border-red-700'>Location: <span className='text-amber-200 text-4xl'>{currentLocation.name}</span></h2>


            <div className='gap-2 p-2 text-white flex'>

                <div className='border'>

                    <select className='font-bold text-slate-500 py-2 px-1 appearance-auto' name="locations" onChange={handleChange}>
                        <option value="1">Choose ...</option>
                        {locationNames.map((location, id) => (
                            <option value={id + 1} key={id + 1}>{location}</option>
                        ))}
                    </select>


                </div>

                <div className='border-2'>
                    <CharactersList characters={residents} />

                </div>

                {editCharacter && <EditCharacterForm character={editCharacter} />}
            </div>

        </section >


    )
}

export default LocationList