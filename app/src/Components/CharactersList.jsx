import { useCharacters } from '../Hooks/useCharacters'
import CharacterCard from './CharacterCard'

const CharactersList = ({ characters }) => {

    const { error } = useCharacters()

    return <section className='flex flex-wrap justify-center'>

        {error ? (
            <p className='text-white'>{error}</p>
        ) : characters.map(character => <CharacterCard key={character.id} character={character} />)}

    </section>
}

export default CharactersList