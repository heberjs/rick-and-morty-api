import CharactersList from '../Components/CharactersList'
import EditCharacterForm from '../Components/EditCharacterForm'
import TableCharacters from '../Components/TableCharacters'
import NavPages from '../Components/NavPages'
import { useCharacters } from '../Hooks/useCharacters'
import useCharactersData from '../Hooks/useCharactersData'
import FiltersBar from '../Components/FiltersBar'
import Header from '../Components/Header'
import NameSearchBar from '../Components/NameSearchBar'

function Home() {

    const { editCharacter, characters } = useCharacters()

    useCharactersData()



    return (

        <section className='bg-slate-900 flex justify-center flex-col p-4'>

            <Header />

            <NameSearchBar />


            <div className='flex p-2'>

                <FiltersBar />

                <CharactersList characters={characters} />

                {editCharacter && <EditCharacterForm character={editCharacter} />}
            </div>
            <NavPages />

            <TableCharacters />


        </section>
    )


}

export default Home