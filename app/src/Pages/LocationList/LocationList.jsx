import logic from '../../../services'
import Header from "../../Components/Header/Header"
import CharactersList from "../../Components/CharacterList/CharactersList"
import { useEffect, useState } from "react"
import DropDownSelect from '../../Components/Library/DropDownSelect/DropDownSelect'
import NavPages from '../../Components/NavPages/NavPages'


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

            <h1 className='text-white font-semibold text-3xl md:text-5xl text-center p-2'>Location: <span className='text-amber-200 text-3xl'>{currentLocation.name}</span></h1>


            <div className=' text-white'>

                <DropDownSelect options={locationNames} selectedValue={selectedLocation} onChange={handleChange} />


                <CharactersList characters={residents} />

            </div>


        </section >

    )
}

export default LocationList