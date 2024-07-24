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

        <section className=" bg-slate-900 flex justify-center flex-col p-2">

            <Header />

            <h2 className='text-white'>{currentLocation.name}</h2>


            <div className='grid grid-cols-10 gap-2 p-2 text-white'>

                <div className='col-span-1'>


                    <select className='text-black' name="locations" onChange={handleChange}>
                        <option value="">Choose ...</option>
                        {locationNames.map((location, id) => (
                            <option value={id + 1} key={id + 1}>{location}</option>
                        ))}
                    </select>




                </div>

                <div className='col-span-9'>
                    <CharactersList characters={residents} />

                </div>

                {editCharacter && <EditCharacterForm character={editCharacter} />}
            </div>

        </section >


    )
}

export default LocationList