import { Link } from "react-router-dom"
import { useCharacters } from "../Hooks/useCharacters"



function CharacterCard({ character }) {

    const { setEditCharacter } = useCharacters()



    const handleEditForm = () => {

        setEditCharacter(character)
    }

    return <article className="p-10 flex flex-col gap-2">

        <h1 className='text-white font-semibold font-helvetica text-2xl  m-0'>{character.name}</h1>
        <p className='text-white font-semibold font-helvetica'>{character.location.name}</p>
        <p className='text-white font-semibold font-helvetica'>{character.status}</p>
        <Link to={`/rickandmorty/${character.id}`}>
            <img src={character.image} alt="character image" />
        </Link>
        <button onClick={handleEditForm} className="text-white bg-slate-600 p-4">Edit</button>

    </article>


}


export default CharacterCard