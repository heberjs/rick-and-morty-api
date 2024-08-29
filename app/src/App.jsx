import { Outlet } from 'react-router-dom'
import { CharacterProvider } from './Hooks/useCharacters'
import { PagesProvider } from './Hooks/usePages'

function App() {


  return (
    <>
      <PagesProvider>
        <CharacterProvider>
          <main>
            <Outlet />
          </main>
        </CharacterProvider>
      </PagesProvider>



    </>
  )
}

export default App


