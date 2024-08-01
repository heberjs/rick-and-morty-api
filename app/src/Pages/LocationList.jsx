import logic from '../../services'
import Header from "../Components/Header"
import CharactersList from "../Components/CharactersList"
import { useEffect, useState } from "react"
import { useCharacters } from '../Hooks/useCharacters'



const LocationList = () => {

    const [locationNames, setLocationNames] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(1)
    const [residents, setResidents] = useState([])
    const [currentLocation, setCurrentLocation] = useState('')


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

        <section className=" bg-slate-900 flex flex-col justify-center min-h-screen">

            <Header />

            <h2 className='text-white font-semibold text-3xl text-center p-2'>Location: <span className='text-amber-200 text-3xl'>{currentLocation.name}</span></h2>


            <div className='flex flex-col  text-white'>

                <div className='p-2'>

                    <select className='font-bold text-slate-500 py-2 px-1 appearance-auto' name="locations" onChange={handleChange}>
                        <option value="1">Choose ...</option>
                        {locationNames.map((location, id) => (
                            <option value={id + 1} key={id + 1}>{location}</option>
                        ))}
                    </select>


                </div>


                <CharactersList characters={residents} />

            </div>

        </section >


    )
}

export default LocationList