import './App.css'
import CharactersList from './Components/CharactersList'
import TableCharacters from './Components/TableCharacters'
import EditCharacterForm from './Components/EditCharacterForm'

import { useUpdatingCharacter } from './Hooks/useUpdatingCharacter'



function App() {

  const {updatingCharacter} = useUpdatingCharacter()

  return  <>


  <main className='bg-slate-900 flex justify-center flex-col p-4'>

    <h1 className='flex justify-center text-white font-semibold font-helvetica text-6xl m-12 '>WELCOME TO RICK AND MORTY CHARACTERS</h1>

  <CharactersList />

  {updatingCharacter && <EditCharacterForm character={updatingCharacter} />}

  <TableCharacters/>

  </main>


  </>

}

export default App


