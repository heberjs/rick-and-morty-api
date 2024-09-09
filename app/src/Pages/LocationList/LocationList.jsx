import Header from "../../Components/Header/Header"
import CharactersList from "../../Components/CharacterList/CharactersList"
import DropDownSelect from '../../Components/Library/DropDownSelect/DropDownSelect'
import useLocationList from "../../Hooks/useLocationList"


const LocationList = () => {

    const {
        locationNames,
        selectedLocation,
        residents,
        currentLocation,
        handleChange

    } = useLocationList()




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