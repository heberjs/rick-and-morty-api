import { useCharacters } from '../../Hooks/useCharacters'
import CharacterCard from '../CharacterCard/CharacterCard'

const CharactersList = ({ characters }) => {

    const { error } = useCharacters()

    return <article className='p-1 min-h-screen lg:flex lg:flex-wrap lg:px-24 md:flex md:flex-wrap  justify-center'>

        {error ? (
            <h2 className='text-white font-semibold text-3xl'>{error}</h2>
        ) : characters.map(character => <CharacterCard key={character.id} character={character} />)}

    </article>
}

export default CharactersList