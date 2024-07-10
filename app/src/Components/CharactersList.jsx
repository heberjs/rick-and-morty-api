
import CharacterCard from './CharacterCard'

function CharactersList({ characters }) {

    return <section className='flex flex-wrap justify-center'>
        {characters.map(character => <CharacterCard key={character.id} character={character} />)}

    </section>
}

export default CharactersList