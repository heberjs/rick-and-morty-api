import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logic from '../../services'
import Header from '../Components/Header'

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

        <article className='flex flex-col items-center justify-center p-8 bg-slate-900 min-h-screen text-white'>

            <Header />

            <h2 className='font-extrabold text-4xl text-white mb-8'>{characterDetails.name}</h2>
            <div>
                <img className='' src={characterDetails.image} alt={characterDetails.name} />
            </div>

            <div className='flex gap-2 my-2 mr-4 text-white'>
                <img src="/public/greenBall.png" alt="green ball" className='w-3 h-3 mt-1.5' />
                <p>{characterDetails.status}</p>
                <span>-</span>
                <p>{characterDetails.species}</p>
                <span>/</span>
                <p>{characterDetails.gender}</p>

            </div>
            <h3>First seen in:</h3>
            <p>{characterDetails.origin?.name}</p>

            <h3>Last known locations:</h3>
            <p>{characterDetails.location?.name}</p>
        </article>
    )
}

export default CharacterDetails