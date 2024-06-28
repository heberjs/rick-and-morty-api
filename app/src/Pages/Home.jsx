import CharactersList from '../Components/CharactersList'
import EditCharacterForm from '../Components/EditCharacterForm'
import TableCharacters from '../Components/TableCharacters'
import NavPages from '../Components/NavPages'
import { useCharacters } from '../Hooks/useCharacters'
import useCharactersData from '../Hooks/useCharactersData'

function Home() {

    const { editCharacter, characters } = useCharacters()

    useCharactersData()



    return (

        <main className='bg-slate-900 flex justify-center flex-col p-4'>

            <h1 className='flex align-middle justify-center text-white font-semibold font-helvetica text-3xl ml-24 my-16 md:my-20 md:text-6xl'>Rick and Morty App</h1>

            <CharactersList characters={characters} />

            {editCharacter && <EditCharacterForm character={editCharacter} />}

            <NavPages />

            <TableCharacters />


        </main>
    )


}

export default Home