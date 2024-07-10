import { Outlet } from 'react-router-dom'
import { EditCharacterProvider } from './Hooks/useCharacters'
import { PagesProvider } from './Hooks/usePages'

function App() {


  return (
    <>
      <PagesProvider>
        <EditCharacterProvider>
          <main>
            <Outlet />
          </main>
        </EditCharacterProvider>
      </PagesProvider>



    </>
  )
}

export default App


