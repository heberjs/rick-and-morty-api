import { useCharacters } from '../Hooks/useCharacters'
import CharacterCard from './CharacterCard'

const CharactersList = ({ characters }) => {

    const { error } = useCharacters()

    return <section className='p-1 min-h-screen'>

        {error ? (
            <h2 className='text-white font-semibold text-3xl'>{error}</h2>
        ) : characters.map(character => <CharacterCard key={character.id} character={character} />)}

    </section>
}

export default CharactersList