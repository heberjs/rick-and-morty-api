import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logic from '../../../services'
import Header from '../../Components/Header/Header'

const CharacterDetails = () => {

    const [characterDetails, setCharacterDetails] = useState({})

    const { id } = useParams()


    useEffect(() => {

        const fetchCharacter = async () => {

            try {
                const data = await logic.retrieveCharacter(id)

                setCharacterDetails(data)

            } catch (error) {

                alert(error.message)

            }
        }

        fetchCharacter()
    }, [id])

    return (

        <article className='bg-slate-900 min-h-screen text-white  flex flex-col'>

            <Header />

            <div className='flex flex-col items-center mt-12 justify-center'>

                <h2 className='text-yellow-200 font-bold text-4xl text- mb-8 sm:text-7xl'>{characterDetails.name}</h2>
                <div>
                    <img className='sm:w-[500px] rounded-full' src={characterDetails.image} alt={characterDetails.name} />
                </div>

                <div className='flex gap-2 my-2 mr-4 text-3xl'>
                    <div className={`w-5 h-5 rounded-full ${characterDetails.status === 'Alive' ? 'bg-green-400' :
                        characterDetails.status === 'Dead' ? 'bg-red-700' :
                            'bg-gray-500'} mt-2.5`}></div>
                    <h3 className={`font-semibold text-3xl -tracking-tighter ${characterDetails.status === 'Alive' ? 'text-green-400' :
                        characterDetails.status === 'Dead' ? 'text-red-700' :
                            'text-gray-500'}`}>{characterDetails.status}</h3>

                </div>

                <div className={`flex flex-col ${characterDetails.status === 'Alive' ? 'text-green-400' :
                    characterDetails.status === 'Dead' ? 'text-red-700' :
                        'text-gray-500'}`}>

                    <div className='flex gap-2'>
                        <h4 className='font-semibold text-xl text-yellow-400'>Specie:</h4>
                        <p className='mt-1 '>{characterDetails.species}</p>
                    </div>

                    <div className='flex gap-2'>
                        <h4 className='font-semibold text-xl text-yellow-400'>First seen:</h4>
                        <p className='mt-1'>{characterDetails.origin?.name}</p>
                    </div>

                    <div className='flex gap-2'>
                        <h4 className='font-semibold text-xl text-yellow-400'>Last known location:</h4>
                        <p className='mt-1'>{characterDetails.location?.name}</p>
                    </div>

                    <div className='flex gap-2'>
                        <h4 className='font-semibold text-xl text-yellow-400'>Episodes:</h4>
                        <p className='mt-1'>{characterDetails.episode ? characterDetails.episode.length : 0} episodes</p>

                    </div>

                </div>

            </div>

        </article >
    )
}

export default CharacterDetails