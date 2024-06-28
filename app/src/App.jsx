import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { EditCharacterProvider } from './Hooks/useCharacters'
import { PagesProvider } from './Hooks/usePages'







function App() {


  return <>

    <PagesProvider>
      <EditCharacterProvider>
        <Routes>
          <Route path='/*' element={<Home />} />
          {/* <Route path='/rickandmorty/:id' element={<CharacterCard />} /> */}
        </Routes>
      </EditCharacterProvider>
    </PagesProvider>



  </>

}

export default App


