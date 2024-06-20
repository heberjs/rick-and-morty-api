
import Character from './Character'

import {useCharacters} from '../Hooks/useCharacters'


function CharactersList() {

    const { characters } = useCharacters()

return <section className='flex flex-wrap justify-center'>
    {characters.map(character=> <Character key={character.id} character ={character}/> )}

    </section>
}

export default CharactersList