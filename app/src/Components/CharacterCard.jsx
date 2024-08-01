import { Link } from "react-router-dom"
import { useCharacters } from "../Hooks/useCharacters"



function CharacterCard({ character }) {

    const { setEditCharacter } = useCharacters()



    // const handleEditForm = () => {

    //     setEditCharacter(character)
    // }

    return <>

        <Link to={`/rickandmorty/${character.id}`}>
            <article className="p-1 border-2 border-slate-700 rounded-lg mt-2">
                <h2 className='text-yellow-200 font-bold font-sans text-4xl p-1 text-center mb-2'>{character.name}</h2>

                <img className="rounded-3xl w-full border-opacity-20 border-slate-950" src={character.image} alt="character image" />


                <p className={`${character.status === 'Alive' ? 'text-green-500' : character.status === 'Dead' ? 'text-red-600' : character.status === 'unknown' ? 'text-gray-400' : 'text-white'} text-3xl font-bold font-helvetica p-1 text-center`}>{character.status}</p>
                <p className='text-white font-semibold font-helvetica p-1 text-center text-2xl'>{character.location.name}</p>
                {/* <button onClick={handleEditForm} className="text-white bg-slate-600 p-4 rounded">Edit</button> */}

            </article>
        </Link >
    </>

}


export default CharacterCard