import { useCharacters } from '../Hooks/useCharacters'
import CharacterCard from './CharacterCard'

const CharactersList = ({ characters }) => {

    const { error } = useCharacters()

    return <section className='flex flex-wrap justify-center'>

        {error ? (
            <h2 className='text-white font-semibold text-3xl mt-28'>{error}</h2>
        ) : characters.map(character => <CharacterCard key={character.id} character={character} />)}

    </section>
}

export default CharactersList