import CharactersList from '../../Components/CharacterList/CharactersList'
import NavPages from '../../Components/NavPages/NavPages'
import { useCharacters } from '../../Hooks/useCharacters'
import useCharactersData from '../../Hooks/useCharactersData'
import FiltersBar from '../../Components/FiltersBar/FiltersBar'
import Header from '../../Components/Header/Header'
import NameSearchBar from '../../Components/NameSearchBar/NameSearchBar'

function Home() {

    const { characters } = useCharacters()

    useCharactersData()



    return (

        <section className='bg-slate-900 flex flex-col'>

            <Header />

            <NameSearchBar />

            <div className='lg:flex lg:flex-row p-4 gap-4'>
                <aside className='lg:w-1/5'>
                    <FiltersBar />
                </aside>
                <section className='lg:w-5/6'>
                    <CharactersList characters={characters} />
                </section>
            </div>





            <NavPages />


        </section>
    )


}

export default Home