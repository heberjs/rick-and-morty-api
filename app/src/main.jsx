import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UpdatingCharacterProvider } from './Hooks/useUpdatingCharacter.jsx'
import {CharactersProvider} from './Hooks/useCharacters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharactersProvider>
    <UpdatingCharacterProvider>
    <App />
    </UpdatingCharacterProvider>
    </CharactersProvider>
  </React.StrictMode>,
)
