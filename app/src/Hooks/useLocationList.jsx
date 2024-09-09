import { useEffect, useState } from "react"
import logic from '../../services'

const useLocationList = () => {

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

    return {
        locationNames,
        selectedLocation,
        residents,
        currentLocation,
        handleChange

    }



}

export default useLocationList