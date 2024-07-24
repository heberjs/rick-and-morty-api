import retrieveCharacter from './retrieveCharacter'
import retrieveCharacters from './retrieveCharacters'
import filterCharactersBy from './filterCharactersBy'
import retrieveLocations from './retrieveLocations'
import retrieveCharsLocation from './retrieveCharsLocation'
import fetchWithHandling from './fetchWithHandling'


const logic = {
    fetchWithHandling,
    retrieveCharacters,
    retrieveCharacter,
    filterCharactersBy,
    retrieveLocations: retrieveLocations,
    retrieveCharsLocation
}

export default logic