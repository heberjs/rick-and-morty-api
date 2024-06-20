import {useUpdatingCharacter} from "../Hooks/useUpdatingCharacter"

function Character({character}) {

    const {setUpdatingCharacter} = useUpdatingCharacter()

    const handleUpdateClick = () => setUpdatingCharacter(character)
    


    return <article className="p-10 flex flex-col gap-2">
      
        <h1 className='text-white font-semibold font-helvetica text-2xl  m-0'>{character.name}</h1>
        <p className='text-white font-semibold font-helvetica'>{character.location.name}</p>
        <p className='text-white font-semibold font-helvetica'>{character.status}</p>
        <img src={character.image} alt="character image" />
        <button className="text-white bg-slate-600 p-4" onClick={handleUpdateClick}>Edit</button>

    </article>

    
}


export default Character